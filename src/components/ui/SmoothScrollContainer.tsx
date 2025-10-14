"use client";

import React, { useRef, useEffect, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';

export interface SmoothScrollSection {
  id: string;
  element?: HTMLElement;
}

export interface ScrollProgress {
  scrollY: number;
  scrollYProgress: number;
  velocity: number;
  direction: 'up' | 'down';
}

export interface EasingFunction {
  (t: number): number;
}

export interface SmoothScrollConfig {
  easing?: EasingFunction;
  damping?: number;
  mass?: number;
  stiffness?: number;
  restDelta?: number;
  restSpeed?: number;
  velocity?: number;
}

export interface SmoothScrollContainerProps {
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal' | 'both';
  smooth?: boolean;
  snapToSections?: boolean;
  snapThreshold?: number;
  sections?: SmoothScrollSection[];
  config?: SmoothScrollConfig;
  className?: string;
  onScrollStart?: (progress: ScrollProgress) => void;
  onScrollProgress?: (progress: ScrollProgress) => void;
  onScrollComplete?: (progress: ScrollProgress) => void;
  onSectionChange?: (sectionId: string, index: number) => void;
  disabled?: boolean;
  performance?: 'auto' | 'high' | 'balanced';
}

export interface SmoothScrollHandle {
  scrollToSection: (sectionId: string, options?: { duration?: number; easing?: EasingFunction }) => Promise<void>;
  scrollToPosition: (x: number, y: number, options?: { duration?: number; easing?: EasingFunction }) => Promise<void>;
  getCurrentSection: () => string | null;
  getSections: () => SmoothScrollSection[];
  getScrollProgress: () => ScrollProgress;
}

const defaultEasing: EasingFunction = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

const easeOutCubic: EasingFunction = (t: number) => {
  return 1 - Math.pow(1 - t, 3);
};

const easeInOutQuart: EasingFunction = (t: number) => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
};

export const SmoothScrollContainer = forwardRef<SmoothScrollHandle, SmoothScrollContainerProps>(({
  children,
  direction = 'vertical',
  smooth = true,
  snapToSections = false,
  snapThreshold = 0.5,
  sections = [],
  config = {},
  className = '',
  onScrollStart,
  onScrollProgress,
  onScrollComplete,
  onSectionChange,
  disabled = false,
  performance = 'balanced'
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const animationFrameRef = useRef<number>();
  const lastScrollTimeRef = useRef<number>(0);
  const scrollVelocityRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const currentSectionRef = useRef<string | null>(null);
  const sectionsRef = useRef<SmoothScrollSection[]>(sections);

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  const defaultConfig: SmoothScrollConfig = {
    easing: defaultEasing,
    damping: 50,
    mass: 1,
    stiffness: 400,
    restDelta: 0.01,
    restSpeed: 0.01,
    velocity: 0,
    ...config
  };

  const { scrollY, scrollYProgress } = useScroll({
    container: containerRef
  });

  const smoothScrollY = useSpring(scrollY, {
    damping: defaultConfig.damping,
    mass: defaultConfig.mass,
    stiffness: defaultConfig.stiffness,
    restDelta: defaultConfig.restDelta,
    restSpeed: defaultConfig.restSpeed
  });

  const transform = useTransform(
    smooth ? smoothScrollY : scrollY,
    (value) => {
      if (direction === 'vertical') return `translateY(${-value}px)`;
      if (direction === 'horizontal') return `translateX(${-value}px)`;
      return `translate(${-value}px, ${-value}px)`;
    }
  );

  const updateScrollProgress = useCallback(() => {
    if (!containerRef.current) return;

    const currentTime = Date.now();
    const deltaTime = currentTime - lastScrollTimeRef.current;
    const currentScrollY = scrollY.get();
    const deltaY = currentScrollY - lastScrollYRef.current;
    
    scrollVelocityRef.current = deltaTime > 0 ? deltaY / deltaTime : 0;
    
    const newDirection = deltaY > 0 ? 'down' : 'up';
    if (newDirection !== scrollDirection) {
      setScrollDirection(newDirection);
    }

    const progress: ScrollProgress = {
      scrollY: currentScrollY,
      scrollYProgress: scrollYProgress.get(),
      velocity: scrollVelocityRef.current,
      direction: newDirection
    };

    if (onScrollProgress) {
      onScrollProgress(progress);
    }

    // Update current section
    if (sectionsRef.current.length > 0) {
      const containerHeight = containerRef.current.clientHeight;
      const viewportCenter = containerHeight / 2;
      
      let newCurrentSection: string | null = null;
      let minDistance = Infinity;

      sectionsRef.current.forEach((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            newCurrentSection = section.id;
          }
        }
      });

      if (newCurrentSection !== currentSectionRef.current) {
        currentSectionRef.current = newCurrentSection;
        if (newCurrentSection && onSectionChange) {
          const sectionIndex = sectionsRef.current.findIndex(s => s.id === newCurrentSection);
          onSectionChange(newCurrentSection, sectionIndex);
        }
      }
    }

    lastScrollTimeRef.current = currentTime;
    lastScrollYRef.current = currentScrollY;

    if (performance !== 'high') {
      animationFrameRef.current = requestAnimationFrame(updateScrollProgress);
    }
  }, [scrollY, scrollYProgress, scrollDirection, onScrollProgress, onSectionChange, performance]);

  const handleScrollStart = useCallback(() => {
    if (isScrollingRef.current) return;
    
    isScrollingRef.current = true;
    setIsScrolling(true);
    
    if (onScrollStart) {
      const progress: ScrollProgress = {
        scrollY: scrollY.get(),
        scrollYProgress: scrollYProgress.get(),
        velocity: scrollVelocityRef.current,
        direction: scrollDirection
      };
      onScrollStart(progress);
    }

    if (performance === 'high') {
      const highPerformanceUpdate = () => {
        updateScrollProgress();
        if (isScrollingRef.current) {
          animationFrameRef.current = requestAnimationFrame(highPerformanceUpdate);
        }
      };
      animationFrameRef.current = requestAnimationFrame(highPerformanceUpdate);
    }
  }, [scrollY, scrollYProgress, scrollDirection, onScrollStart, updateScrollProgress, performance]);

  const handleScrollEnd = useCallback(() => {
    if (!isScrollingRef.current) return;
    
    isScrollingRef.current = false;
    setIsScrolling(false);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (onScrollComplete) {
      const progress: ScrollProgress = {
        scrollY: scrollY.get(),
        scrollYProgress: scrollYProgress.get(),
        velocity: scrollVelocityRef.current,
        direction: scrollDirection
      };
      onScrollComplete(progress);
    }

    // Handle snap to section
    if (snapToSections && sectionsRef.current.length > 0) {
      const currentSection = getCurrentSection();
      if (currentSection) {
        scrollToSection(currentSection, { duration: 500, easing: easeOutCubic });
      }
    }
  }, [scrollY, scrollYProgress, scrollDirection, onScrollComplete, snapToSections]);

  const scrollToSection = useCallback(async (
    sectionId: string, 
    options: { duration?: number; easing?: EasingFunction } = {}
  ): Promise<void> => {
    return new Promise((resolve) => {
      const section = sectionsRef.current.find(s => s.id === sectionId);
      if (!section || !section.element || !containerRef.current) {
        resolve();
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const sectionRect = section.element.getBoundingClientRect();
      const targetY = sectionRect.top - containerRect.top + scrollY.get();

      const duration = options.duration || 1000;
      const easing = options.easing || defaultConfig.easing || defaultEasing;
      const startY = scrollY.get();
      const deltaY = targetY - startY;
      const startTime = Date.now();

      const animateScroll = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        const currentY = startY + deltaY * easedProgress;

        containerRef.current?.scrollTo({
          top: currentY,
          behavior: 'auto'
        });

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(animateScroll);
    });
  }, [scrollY, defaultConfig.easing]);

  const scrollToPosition = useCallback(async (
    x: number, 
    y: number, 
    options: { duration?: number; easing?: EasingFunction } = {}
  ): Promise<void> => {
    return new Promise((resolve) => {
      if (!containerRef.current) {
        resolve();
        return;
      }

      const duration = options.duration || 1000;
      const easing = options.easing || defaultConfig.easing || defaultEasing;
      const startX = containerRef.current.scrollLeft;
      const startY = containerRef.current.scrollTop;
      const deltaX = x - startX;
      const deltaY = y - startY;
      const startTime = Date.now();

      const animateScroll = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        const currentX = startX + deltaX * easedProgress;
        const currentY = startY + deltaY * easedProgress;

        containerRef.current?.scrollTo({
          left: currentX,
          top: currentY,
          behavior: 'auto'
        });

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(animateScroll);
    });
  }, [defaultConfig.easing]);

  const getCurrentSection = useCallback((): string | null => {
    return currentSectionRef.current;
  }, []);

  const getSections = useCallback((): SmoothScrollSection[] => {
    return sectionsRef.current;
  }, []);

  const getScrollProgress = useCallback((): ScrollProgress => {
    return {
      scrollY: scrollY.get(),
      scrollYProgress: scrollYProgress.get(),
      velocity: scrollVelocityRef.current,
      direction: scrollDirection
    };
  }, [scrollY, scrollYProgress, scrollDirection]);

  useImperativeHandle(ref, () => ({
    scrollToSection,
    scrollToPosition,
    getCurrentSection,
    getSections,
    getScrollProgress
  }), [scrollToSection, scrollToPosition, getCurrentSection, getSections, getScrollProgress]);

  // Update sections ref when sections prop changes
  useEffect(() => {
    sectionsRef.current = sections.map(section => ({
      ...section,
      element: section.element || document.getElementById(section.id) || undefined
    }));
  }, [sections]);

  // Setup scroll event listeners
  useEffect(() => {
    if (disabled || performance === 'balanced') return;

    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isScrollingRef.current) {
        handleScrollStart();
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        handleScrollEnd();
      }, 150);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [disabled, performance, handleScrollStart, handleScrollEnd]);

  // Setup continuous progress updates for balanced performance
  useEffect(() => {
    if (disabled || performance !== 'balanced') return;

    const startUpdates = () => {
      animationFrameRef.current = requestAnimationFrame(updateScrollProgress);
    };

    startUpdates();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [disabled, performance, updateScrollProgress]);

  // Keyboard navigation support
  useEffect(() => {
    if (disabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionsRef.current.length) return;

      const currentIndex = sectionsRef.current.findIndex(s => s.id === currentSectionRef.current);
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          if (currentIndex < sectionsRef.current.length - 1) {
            scrollToSection(sectionsRef.current[currentIndex + 1].id, {
              duration: 800,
              easing: easeInOutQuart
            });
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          if (currentIndex > 0) {
            scrollToSection(sectionsRef.current[currentIndex - 1].id, {
              duration: 800,
              easing: easeInOutQuart
            });
          }
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(sectionsRef.current[0].id, {
            duration: 1000,
            easing: easeInOutQuart
          });
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sectionsRef.current[sectionsRef.current.length - 1].id, {
            duration: 1000,
            easing: easeInOutQuart
          });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [disabled, scrollToSection]);

  const containerClasses = [
    'relative',
    'w-full',
    'h-screen',
    direction === 'vertical' && 'overflow-y-auto overflow-x-hidden',
    direction === 'horizontal' && 'overflow-x-auto overflow-y-hidden',
    direction === 'both' && 'overflow-auto',
    snapToSections && direction === 'vertical' && 'snap-y snap-mandatory',
    snapToSections && direction === 'horizontal' && 'snap-x snap-mandatory',
    'scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300',
    className
  ].filter(Boolean).join(' ');

  const contentClasses = [
    'relative',
    direction === 'vertical' && 'w-full',
    direction === 'horizontal' && 'h-full flex',
    snapToSections && 'snap-start'
  ].filter(Boolean).join(' ');

  if (disabled) {
    return (
      <div className={containerClasses}>
        <div className={contentClasses}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={containerClasses}
      style={{
        scrollBehavior: smooth ? 'auto' : 'smooth',
        ...(!smooth && direction === 'vertical' && { scrollSnapType: snapToSections ? 'y mandatory' : 'none' }),
        ...(!smooth && direction === 'horizontal' && { scrollSnapType: snapToSections ? 'x mandatory' : 'none' })
      }}
    >
      <motion.div
        ref={contentRef}
        className={contentClasses}
        style={smooth ? { y: transform } : undefined}
        transition={{
          type: 'spring',
          ...defaultConfig
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isScrolling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-4 right-4 z-50 bg-gray-100 text-pure-white px-3 py-1 rounded-md text-sm font-medium"
          >
            Scrolling {scrollDirection}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

SmoothScrollContainer.displayName = 'SmoothScrollContainer';

export const useSmoothScroll = (containerRef: React.RefObject<SmoothScrollHandle>) => {
  const scrollToSection = useCallback((sectionId: string, options?: { duration?: number; easing?: EasingFunction }) => {
    return containerRef.current?.scrollToSection(sectionId, options);
  }, [containerRef]);

  const scrollToPosition = useCallback((x: number, y: number, options?: { duration?: number; easing?: EasingFunction }) => {
    return containerRef.current?.scrollToPosition(x, y, options);
  }, [containerRef]);

  const getCurrentSection = useCallback(() => {
    return containerRef.current?.getCurrentSection() || null;
  }, [containerRef]);

  const getSections = useCallback(() => {
    return containerRef.current?.getSections() || [];
  }, [containerRef]);

  const getScrollProgress = useCallback(() => {
    return containerRef.current?.getScrollProgress() || {
      scrollY: 0,
      scrollYProgress: 0,
      velocity: 0,
      direction: 'down' as const
    };
  }, [containerRef]);

  return {
    scrollToSection,
    scrollToPosition,
    getCurrentSection,
    getSections,
    getScrollProgress
  };
};

export { defaultEasing, easeOutCubic, easeInOutQuart };