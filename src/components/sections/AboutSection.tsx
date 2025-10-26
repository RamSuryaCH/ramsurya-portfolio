"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: containerRef, variants: containerVariants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.2
  });

  return (
    <section id="about" className="bg-background py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left: Large Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/h-1761462804317.png"
              alt="Ram Surya Chelluboyina"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              An all-around developer and innovator.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
              <p>
                A passionate full-stack developer and AI enthusiast. With experience in building real-world products and fostering tech communities.
              </p>
              
              <p>
                Ram Surya's journey started as an AI enthusiast and B.Tech CSE (Cyber Security) student who builds real-world products and communities. As an MLSA (Beta) and CMO at Smartzy Edu, he's hosted 6+ technical events in a month and helped 1,000+ students grow their skills.
              </p>
              
              <p>
                Technically, he works across Flutter/Dart, Python, Firebase, MongoDB, and AWS—shipping performant cross‑platform apps like e‑DAM and Halt‑NPC with native C/CMake optimizations.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <span className="text-sm font-medium text-foreground/60 uppercase tracking-wider">MLSA Beta</span>
              <span className="text-sm font-medium text-foreground/60 uppercase tracking-wider">Flutter Developer</span>
              <span className="text-sm font-medium text-foreground/60 uppercase tracking-wider">AI Enthusiast</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;