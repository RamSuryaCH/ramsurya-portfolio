"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div
      className="w-full font-sans"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 px-4 md:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10 relative z-[1]"
          >
            {/* YEAR LABEL - Large and prominent */}
            <div className="sticky flex flex-col md:flex-row z-[100] items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="flex items-center gap-6">
                {/* DOT */}
                <div 
                  className="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'var(--color-background)',
                    border: '3px solid #666666',
                  }}
                >
                  <div 
                    className="h-6 w-6 rounded-full"
                    style={{
                      backgroundColor: '#666666',
                    }}
                  />
                </div>
                
                {/* LARGE YEAR */}
                <h3 className="text-7xl md:text-8xl font-bold text-muted-foreground opacity-60">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {item.content}
            </div>
          </div>
        ))}
        
        {/* Vertical line - gradient from blue to purple */}
        <div
          style={{
            height: Math.max(height, 500) + "px",
            left: '20px',
            width: '4px',
            background: 'linear-gradient(to bottom, #60A5FA, #A78BFA)',
            position: 'absolute',
            top: 0,
            zIndex: 2,
            borderRadius: '9999px'
          }}
        />
        
        {/* Animated progress line */}
        <motion.div
          style={{
            height: heightTransform,
            left: '20px',
            width: '4px',
            position: 'absolute',
            top: 0,
            zIndex: 3,
            borderRadius: '9999px',
            background: 'linear-gradient(to bottom, #3B82F6, #8B5CF6)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
          }}
        />
      </div>
    </div>
  );
};