"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";

// Floating paths background component
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const StaggeredButton: FC<{ text: string }> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = text.split("");

  return (
    <Link
      href="#contact"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-block overflow-hidden whitespace-nowrap rounded-lg border-2 border-transparent bg-white px-6 py-3 sm:px-8 sm:py-4 text-center font-medium text-black transition-colors duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white min-h-[44px] min-w-[120px] touch-manipulation"
    >
      {isHovered ? (
        <div className="flex">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              initial="initial"
              animate="hovered"
              transition={{
                duration: 0.3,
                ease: "circOut",
                delay: index * 0.03,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      ) : (
        text
      )}
    </Link>
  );
};

const wordContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HeroSection = () => {
  const headline1 = "Progress becomes the path—".split(" ");
  const headline2 = "daring others to follow".split(" ");

  const totalWords = headline1.length + headline2.length;

  return (
    <main className="relative flex min-h-screen w-full items-center justify-start px-4 py-16 sm:py-24 md:px-8 overflow-hidden bg-white dark:bg-neutral-950">
      {/* Background Paths Animation */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      <div className="container relative z-20 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start text-left pointer-events-none">
          <motion.h1
            className="text-[32px] font-bold leading-[1.1] tracking-tighter text-foreground xs:text-[40px] sm:text-[48px] md:text-[60px] lg:text-[72px] xl:text-[90px]"
            variants={wordContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="block">
              {headline1.map((word, index) => (
                <div key={index} className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="mr-1 inline-block pb-2 xs:mr-2 sm:mr-3 md:mr-4"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
            <div className="block">
              {headline2.map((word, index) => (
                <div key={index + headline1.length} className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="mr-1 inline-block pb-2 xs:mr-2 sm:mr-3 md:mr-4"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: totalWords * 0.08 + 0.2, ease: "easeOut" }}
            className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
          >
            Tech community builder and cybersecurity enthusiast, currently pursuing a B.Tech in Computer Science. Passionate about AI, gaming, and empowering changemakers through hands-on innovation. Experienced in leading impactful events and building vibrant communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: totalWords * 0.08 + 0.5, ease: "easeOut" }}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center gap-4 pointer-events-auto"
          >
            <StaggeredButton text="Get In Touch" />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;