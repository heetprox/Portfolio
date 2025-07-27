'use client';

import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

// Types for scroll options
interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  immediate?: boolean;
  lock?: boolean;
}

interface SmoothScrollContextType {
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
  isReady: boolean;
  lenisInstance: any;
}

interface SmoothScrollProviderProps {
  children: any; // Using any to avoid React version conflicts
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollTo: () => {},
  isReady: false,
  lenisInstance: null
});

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<any>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Scroll to element utility function
  const scrollTo = useCallback((target: string | number | HTMLElement, options: ScrollToOptions = {}) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, options);
    }
  }, [lenisInstance]);

  // Options for Lenis
  const lenisOptions = {
    duration: 1.2,
    easing: (t: number): number => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical' as const,
    gestureDirection: 'vertical' as const,
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  };

  // Handle ref callback
  const handleLenisRef = useCallback((instance: any) => {
    if (instance) {
      // Check if it's a ref object with .lenis property or direct instance
      const lenisRef = instance.lenis || instance;
      setLenisInstance(lenisRef);
      setIsReady(true);
    } else {
      setLenisInstance(null);
      setIsReady(false);
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ 
      scrollTo, 
      isReady, 
      lenisInstance 
    }}>
      <ReactLenis 
        root
        options={lenisOptions}
        ref={handleLenisRef}
        autoRaf={true}
      >
        {children}
      </ReactLenis>
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = (): SmoothScrollContextType => {
  return useContext(SmoothScrollContext);
};