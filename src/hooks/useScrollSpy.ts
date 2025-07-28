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
      
      console.log('Intersection callback fired. Visible entries:', visibleEntries.length);

      if (visibleEntries.length > 0) {
        const sortedEntries = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );

        const element = sortedEntries[0].target;
        const id = element.getAttribute('data-id') as T;
        
        console.log('Element with highest intersection ratio:', element, 'ID:', id);
        
        if (id) {
          console.log('Setting active ID to:', id);
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
    console.log('useScrollSpy: Setting up observer');
    
    if (observer.current) {
      observer.current.disconnect();
    }

    const observerOptions = { threshold, rootMargin };
    console.log('Observer options:', observerOptions);
    
    const observerInstance = new IntersectionObserver(handleIntersection, observerOptions);
    observer.current = observerInstance;

    // Wait a bit for elements to be ready, then observe them
    const timeoutId = setTimeout(() => {
      const currentRefs = elementsRef.current;
      console.log('Available refs:', Object.keys(currentRefs));
      
      let observedCount = 0;
      Object.entries(currentRefs).forEach(([id, element]) => {
        if (element) {
          (element as HTMLElement).setAttribute('data-id', id);
          observerInstance.observe(element as Element);
          observedCount++;
          console.log(`Now observing element: ${id}`);
        } else {
          console.log(`Element ${id} is null, skipping`);
        }
      });
      
      console.log(`Total elements being observed: ${observedCount}`);
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