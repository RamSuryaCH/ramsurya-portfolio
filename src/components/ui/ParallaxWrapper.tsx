"use client";

import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export interface ParallaxConfig {
  translateY?: [number, number];
  scale?: [number, number];
  opacity?: [number, number];
  rotate?: [number, number];
}

export interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  direction?: 'up' | 'down';
  effects?: ParallaxConfig;
  triggerElement?: React.RefObject<HTMLElement>;
  offset?: [string, string];
  type?: 'background' | 'foreground';
  responsive?: {
    mobile?: ParallaxConfig;
    tablet?: ParallaxConfig;
    desktop?: ParallaxConfig;
  };
  disabled?: boolean;
}

const defaultEffects: ParallaxConfig = {
  translateY: [-100, 100],
  opacity: [0.8, 1],
};

const useResponsiveConfig = (
  effects: ParallaxConfig,
  responsive?: ParallaxWrapperProps['responsive']
): ParallaxConfig => {
  // In a real implementation, you'd use useMediaQuery or similar
  // For now, we'll return the base effects
  // This could be enhanced with actual breakpoint detection
  return effects;
};

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  children,
  className = '',
  intensity = 1,
  direction = 'up',
  effects = defaultEffects,
  triggerElement,
  offset = ['start end', 'end start'],
  type = 'foreground',
  responsive,
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = triggerElement || containerRef;

  // Get responsive configuration
  const finalEffects = useResponsiveConfig(effects, responsive);

  // Set up scroll tracking
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offset,
  });

  // Create transform values with intensity multiplier
  const createTransform = (range: [number, number]): MotionValue<number> => {
    if (disabled) return useTransform(scrollYProgress, [0, 1], [0, 0]);
    
    const [start, end] = range;
    const adjustedRange: [number, number] = [
      start * intensity * (direction === 'down' ? -1 : 1),
      end * intensity * (direction === 'down' ? -1 : 1),
    ];
    return useTransform(scrollYProgress, [0, 1], adjustedRange);
  };

  // Transform values for different effects
  const translateY = finalEffects.translateY 
    ? createTransform(finalEffects.translateY) 
    : useTransform(scrollYProgress, [0, 1], [0, 0]);
    
  const scale = finalEffects.scale
    ? useTransform(scrollYProgress, [0, 1], finalEffects.scale)
    : useTransform(scrollYProgress, [0, 1], [1, 1]);
    
  const opacity = finalEffects.opacity
    ? useTransform(scrollYProgress, [0, 1], finalEffects.opacity)
    : useTransform(scrollYProgress, [0, 1], [1, 1]);
    
  const rotate = finalEffects.rotate
    ? useTransform(scrollYProgress, [0, 1], finalEffects.rotate)
    : useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Performance optimizations
  const motionStyle = {
    y: translateY,
    scale: scale,
    opacity: opacity,
    rotate: rotate,
    // Enable hardware acceleration
    transform: 'translate3d(0,0,0)',
    // Optimize for animations
    willChange: 'transform, opacity',
  };

  // Base styles for different types
  const baseStyles = type === 'background' 
    ? 'absolute inset-0 -z-10' 
    : 'relative z-10';

  return (
    <div ref={containerRef} className={`${baseStyles} ${className}`}>
      <motion.div
        style={motionStyle}
        className="h-full w-full"
        // Performance optimizations
        initial={false}
        // Reduce layout calculations
        layoutId={undefined}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Pre-configured variants for common use cases
export const ParallaxVariants = {
  hero: {
    effects: {
      translateY: [-50, 50],
      scale: [1, 1.05],
      opacity: [1, 0.9],
    },
    intensity: 0.5,
  },
  
  background: {
    effects: {
      translateY: [-200, 200],
      scale: [1, 1.1],
    },
    intensity: 0.3,
    type: 'background' as const,
  },
  
  card: {
    effects: {
      translateY: [-30, 30],
      opacity: [0.8, 1],
    },
    intensity: 0.8,
  },
  
  text: {
    effects: {
      translateY: [-20, 20],
      opacity: [0.9, 1],
    },
    intensity: 1,
  },
  
  subtle: {
    effects: {
      translateY: [-10, 10],
      opacity: [0.95, 1],
    },
    intensity: 0.5,
  },
};

// Helper component for quick parallax implementation
export const ParallaxText: React.FC<{
  children: ReactNode;
  variant?: keyof typeof ParallaxVariants;
  className?: string;
}> = ({ children, variant = 'text', className }) => {
  const config = ParallaxVariants[variant];
  
  return (
    <ParallaxWrapper {...config} className={className}>
      {children}
    </ParallaxWrapper>
  );
};

// Helper component for parallax backgrounds
export const ParallaxBackground: React.FC<{
  children: ReactNode;
  variant?: keyof typeof ParallaxVariants;
  className?: string;
}> = ({ children, variant = 'background', className }) => {
  const config = ParallaxVariants[variant];
  
  return (
    <ParallaxWrapper {...config} className={className}>
      {children}
    </ParallaxWrapper>
  );
};

export default ParallaxWrapper;