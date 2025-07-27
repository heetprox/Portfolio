'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  immediate?: boolean;
  lock?: boolean;
}

interface LenisInstance {
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
}

interface SmoothScrollContextType {
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
  isReady: boolean;
  lenisInstance: LenisInstance | null;
}

interface SmoothScrollProviderProps {
  children: JSX.Element;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollTo: () => {},
  isReady: false,
  lenisInstance: null
});

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState<LenisInstance | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const scrollTo = useCallback((target: string | number | HTMLElement, options: ScrollToOptions = {}) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, options);
    }
  }, [lenisInstance]);

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

  const handleLenisRef = useCallback((instance: unknown) => {
    if (instance) {
       const lenisRef = (instance as { lenis?: LenisInstance }).lenis || instance as LenisInstance;
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