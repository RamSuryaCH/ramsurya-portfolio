import { useRef, useEffect, useState } from 'react';
import { useAnimation, AnimationControls, Variants } from 'framer-motion';

interface ScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  staggerDirection?: 1 | -1;
}

type AnimationType = 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInDown' | 'scale' | 'slideInUp' | 'slideInLeft' | 'slideInRight';

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  controls: AnimationControls;
  isInView: boolean;
  variants: Variants;
}

const animationVariants: Record<AnimationType, Variants> = {
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 60,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        mass: 0.8
      }
    }
  },
  fadeInLeft: {
    hidden: {
      opacity: 0,
      x: -60,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        mass: 0.8
      }
    }
  },
  fadeInRight: {
    hidden: {
      opacity: 0,
      x: 60,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        mass: 0.8
      }
    }
  },
  fadeInDown: {
    hidden: {
      opacity: 0,
      y: -60,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        mass: 0.8
      }
    }
  },
  scale: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        mass: 0.8
      }
    }
  },
  slideInUp: {
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 100
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 100,
        mass: 1
      }
    }
  },
  slideInLeft: {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 100
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 100,
        mass: 1
      }
    }
  },
  slideInRight: {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 100
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 100,
        mass: 1
      }
    }
  }
};

export const useScrollAnimation = (
  animationType: AnimationType = 'fadeInUp',
  options: ScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    once = true,
    delay = 0,
    duration,
    staggerChildren = 0.1,
    staggerDirection = 1
  } = options;

  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const variants: Variants = {
    ...animationVariants[animationType],
    visible: {
      ...animationVariants[animationType].visible,
      transition: {
        ...animationVariants[animationType].visible?.transition,
        delay: delay,
        duration: duration || animationVariants[animationType].visible?.transition?.duration,
        staggerChildren,
        staggerDirection,
      }
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting && (!once || !hasAnimated)) {
          setIsInView(true);
          controls.start('visible');
          if (once) {
            setHasAnimated(true);
          }
        } else if (!isIntersecting && !once) {
          setIsInView(false);
          controls.start('hidden');
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [controls, threshold, rootMargin, once, hasAnimated]);

  // Initialize with hidden state
  useEffect(() => {
    controls.set('hidden');
  }, [controls]);

  return {
    ref,
    controls,
    isInView,
    variants
  };
};

export default useScrollAnimation;