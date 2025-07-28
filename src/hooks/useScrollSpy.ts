'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollSpyOptions {
  threshold?: number;
  rootMargin?: string;
  debounceTime?: number;
}

export function useScrollSpy<T extends string>(
  elementRefs: Record<T, HTMLElement | null>,
  options: ScrollSpyOptions = {}
): T | null {
  const {
    threshold = 0.2,
    rootMargin = '0px 0px -70% 0px',
    debounceTime = 100
  } = options;

  const [activeId, setActiveId] = useState<T | null>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const currentRefs = useRef(elementRefs);

  // Store the latest refs without triggering re-renders
  useEffect(() => {
    currentRefs.current = elementRefs;
  }, [elementRefs]);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        const sortedEntries = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );

        // Get the ID from the element's dataset
        const id = sortedEntries[0].target.getAttribute('data-id') as T;
        if (id) {
          setActiveId(id); // ← Remove the comparison check
        }
      }
    }, debounceTime);
  }, [debounceTime]); // ← Keep dependency array as is

  // Setup and cleanup the observer
  useEffect(() => {
    // Create new observer with the memoized callback
    const observerOptions = { threshold, rootMargin };
    const observerInstance = new IntersectionObserver(handleIntersection, observerOptions);
    observer.current = observerInstance;

    // Observe all elements
    const refs = currentRefs.current;
    Object.entries(refs).forEach(([id, element]) => {
      if (element) {
        // Add data-id attribute to the element for identification
        (element as HTMLElement).setAttribute('data-id', id);
        observerInstance.observe(element as Element);
      }
    });

    return () => {
      observerInstance.disconnect();
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return activeId;
}