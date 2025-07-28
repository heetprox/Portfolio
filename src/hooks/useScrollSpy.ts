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
  
  // Use ref to store the latest elementRefs without causing re-renders
  const elementsRef = useRef<Record<T, HTMLElement | null>>(elementRefs);
  
  // Update the ref when elementRefs change, but don't trigger re-renders
  elementsRef.current = elementRefs;

  // Memoize the intersection handler with stable dependencies
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio and position
        const sortedEntries = visibleEntries.sort((a, b) => {
          // First sort by intersection ratio
          const ratioDiff = b.intersectionRatio - a.intersectionRatio;
          if (Math.abs(ratioDiff) > 0.1) return ratioDiff;
          
          // If ratios are similar, sort by position (topmost first)
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

        const element = sortedEntries[0].target;
        const id = element.getAttribute('data-id') as T;
        
        if (id) {
          setActiveId(prev => prev === id ? prev : id); // Prevent unnecessary updates
        }
      }
    }, debounceTime);
  }, [debounceTime]); // Only depend on debounceTime

  // Setup observer effect - only re-run when options change
  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const observerOptions = { threshold, rootMargin };
    const observerInstance = new IntersectionObserver(handleIntersection, observerOptions);
    observer.current = observerInstance;

    // Observe elements that exist
    const observeElements = () => {
      const currentRefs = elementsRef.current;
      
      Object.entries(currentRefs).forEach(([id, element]) => {
        if (element) {
          (element as HTMLElement).setAttribute('data-id', id);
          observerInstance.observe(element as Element);
        }
      });
    };

    // Small delay to ensure elements are mounted
    const timeoutId = setTimeout(observeElements, 50);

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

  // Re-observe when elementRefs change (e.g., new elements added)
  useEffect(() => {
    if (observer.current) {
      // Re-observe all current elements
      Object.entries(elementRefs).forEach(([id, element]) => {
        if (element) {
          (element as HTMLElement).setAttribute('data-id', id);
          observer.current!.observe(element as Element);
        }
      });
    }
  }, [Object.keys(elementRefs).length]); // Only re-run when the number of refs changes

  return activeId;
}