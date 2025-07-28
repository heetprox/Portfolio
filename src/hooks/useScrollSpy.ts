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
  const elementsRef = useRef<Record<T, HTMLElement | null>>(elementRefs);

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

        const element = sortedEntries[0].target;
        const id = element.getAttribute('data-id') as T;
        
        
        if (id) {
          setActiveId(id);
        }
      } else {
        console.log('No visible entries, keeping current active ID');
      }
    }, debounceTime);
  }, [debounceTime]);

  // Update elements reference when refs change
  useEffect(() => {
    elementsRef.current = elementRefs;
  });

  // Setup observer
  useEffect(() => {
    
    if (observer.current) {
      observer.current.disconnect();
    }

    const observerOptions = { threshold, rootMargin };
    
    const observerInstance = new IntersectionObserver(handleIntersection, observerOptions);
    observer.current = observerInstance;

    // Wait a bit for elements to be ready, then observe them
    const timeoutId = setTimeout(() => {
      const currentRefs = elementsRef.current;
      
      Object.entries(currentRefs).forEach(([id, element]) => {
        if (element) {
          (element as HTMLElement).setAttribute('data-id', id);
          observerInstance.observe(element as Element);
        } else {
          console.log(`Element ${id} is null, skipping`);
        }
      });
      
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer.current) {
        observer.current.disconnect();
      }
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return activeId;
}