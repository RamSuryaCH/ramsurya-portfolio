"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import TiltedCard from "@/components/ui/TiltedCard";

const AboutSection = () => {
  const verticalTitle = "About me";
  const { ref: containerRef, variants: containerVariants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.2,
    staggerChildren: 0.2
  });
  const { ref: imageRef, variants: imageVariants } = useScrollAnimation('scale', { 
    threshold: 0.3,
    delay: 0.2 
  });
  const { ref: textRef, variants: textVariants } = useScrollAnimation('fadeInRight', { 
    threshold: 0.3,
    delay: 0.4 
  });

  return (
    <section 
      id="about" 
      className="bg-background py-16 sm:py-24 md:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-8 items-center"
        >
            
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="flex flex-row lg:flex-col items-center justify-center gap-1 sm:gap-2 text-muted-foreground uppercase text-xs font-medium tracking-[0.2em]">
              {verticalTitle.split("").map((char, index) => (
                <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-10">
            <div className="bg-muted border border-border rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 sm:gap-8 md:gap-12">
                <motion.div 
                  ref={imageRef}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex-shrink-0"
                >
                  <TiltedCard
                    imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1754721562928-k2i74ecq9ac.png"
                    altText="Portrait of Ram Surya Chelluboyina"
                    captionText="Ram Surya"
                    containerHeight="180px"
                    containerWidth="180px"
                    imageHeight="180px"
                    imageWidth="180px"
                    scaleOnHover={1.08}
                    rotateAmplitude={12}
                    showMobileWarning={false}
                    showTooltip={true}
                  />
                </motion.div>
                <motion.div
                  ref={textRef}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex-1"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight-2 text-foreground">Ram Surya Chelluboyina</h3>
                  <p className="text-muted-foreground mt-1 mb-3 sm:mb-4 text-sm sm:text-base">AI Enthusiast • B.Tech CSE (Cyber Security) • Microsoft Learn Student Ambassador (Beta)</p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    I'm an AI enthusiast and B.Tech CSE (Cyber Security) student who builds real-world products and communities. As an MLSA (Beta) and CMO at Smartzy Edu, I've hosted 6+ technical events in a month and helped 1,000+ students grow their skills. Technically, I work across Flutter/Dart, Python, Firebase, MongoDB, and AWS—shipping performant cross‑platform apps like e‑DAM and Halt‑NPC with native C/CMake optimizations.
                  </p>
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
                    <Link href="#education" className="inline-flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-foreground/90 px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02]">
                      View Certifications
                    </Link>
                    <Link href="#skills" className="inline-flex items-center justify-center rounded-lg bg-accent-orange text-white hover:bg-orange-600 px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02]">
                      Explore Skills
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;