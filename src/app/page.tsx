"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import { SmoothScrollContainer, type SmoothScrollSection } from "@/components/ui/SmoothScrollContainer";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";
import { ThemeProvider } from "next-themes";
import { useRef, useEffect, useState } from "react";

const sections: SmoothScrollSection[] = [
  { id: 'hero' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'skills' },
  { id: 'education' },
  { id: 'contact' },
];

export default function Home() {
  const smoothScrollRef = useRef(null);
  const [sectionsWithElements, setSectionsWithElements] = useState<SmoothScrollSection[]>([]);
  // Mobile/performance flags
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Update sections with actual DOM elements after mount
    const updatedSections = sections.map(section => ({
      ...section,
      element: document.getElementById(section.id) || undefined
    }));
    setSectionsWithElements(updatedSections);
  }, []);

  useEffect(() => {
    // Detect mobile viewport
    const mqMobile = window.matchMedia('(max-width: 768px)');
    const updateIsMobile = () => setIsMobile(mqMobile.matches);
    updateIsMobile();
    mqMobile.addEventListener?.('change', updateIsMobile);

    // Detect reduced motion preference
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateReduced = () => setPrefersReducedMotion(mqReduced.matches);
    updateReduced();
    mqReduced.addEventListener?.('change', updateReduced);

    return () => {
      mqMobile.removeEventListener?.('change', updateIsMobile);
      mqReduced.removeEventListener?.('change', updateReduced);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <Navigation />
        
        <SmoothScrollContainer
          ref={smoothScrollRef}
          sections={sectionsWithElements}
          snapToSections={false}
          smooth={!isMobile && !prefersReducedMotion}
          performance={isMobile || prefersReducedMotion ? "battery" : "balanced"}
          config={{
            damping: isMobile ? 20 : 30,
            mass: isMobile ? 0.6 : 0.8,
            stiffness: isMobile ? 100 : 120
          }}
          onSectionChange={(sectionId, index) => {
            console.log(`Current section: ${sectionId} (${index})`);
          }}
          className="scroll-smooth"
        >
          <div id="hero" className="snap-start">
            <ParallaxWrapper
              effects={{
                translateY: [-50, 50],
                opacity: [1, 0.8]
              }}
              intensity={isMobile || prefersReducedMotion ? 0 : 0.3}
              className="relative"
            >
              <HeroSection />
            </ParallaxWrapper>
          </div>

          <div id="about" className="snap-start">
            <ParallaxWrapper
              effects={{
                translateY: [-30, 30],
                scale: [0.98, 1.02]
              }}
              intensity={isMobile || prefersReducedMotion ? 0 : 0.4}
              className="relative"
            >
              <AboutSection />
            </ParallaxWrapper>
          </div>

          <div id="experience" className="snap-start">
            <ParallaxWrapper
              effects={{
                translateY: [-40, 40],
                opacity: [0.9, 1]
              }}
              intensity={isMobile || prefersReducedMotion ? 0 : 0.5}
              className="relative"
            >
              <ExperienceSection />
            </ParallaxWrapper>
          </div>

          <div id="skills" className="snap-start">
            <ParallaxWrapper
              effects={{
                translateY: [-20, 20],
                scale: [1, 1.05]
              }}
              intensity={isMobile || prefersReducedMotion ? 0 : 0.3}
              className="relative"
            >
              <SkillsSection />
            </ParallaxWrapper>
          </div>

          <div id="education" className="snap-start">
            <ParallaxWrapper
              effects={{
                translateY: [-35, 35],
                opacity: [0.85, 1]
              }}
              intensity={isMobile || prefersReducedMotion ? 0 : 0.6}
              className="relative"
            >
              <EducationSection />
            </ParallaxWrapper>
          </div>

          <div id="contact" className="snap-start">
            <ParallaxWrapper
              effects={{
                translateY: [-25, 25],
                scale: [0.95, 1]
              }}
              intensity={isMobile || prefersReducedMotion ? 0 : 0.4}
              className="relative"
            >
              <ContactSection />
            </ParallaxWrapper>
          </div>

          <ParallaxWrapper
            effects={{
              translateY: [-15, 15]
            }}
            intensity={isMobile || prefersReducedMotion ? 0 : 0.2}
            className="relative"
          >
            <Footer />
          </ParallaxWrapper>
        </SmoothScrollContainer>
      </div>
    </ThemeProvider>
  );
}