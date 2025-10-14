"use client";

import React from 'react';
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Smartzy Edu",
    role: "Chief Marketing Officer",
    duration: "April 2025 - Present",
    location: "Hyderabad, Telangana, India",
    achievements: [
      "Led outreach for technical courses, increasing student awareness and enrollments.",
      "Drove community growth by facilitating active WhatsApp groups and student engagement.",
      "Built partnerships and campaigns aligned with developer education initiatives.",
    ],
  },
  {
    company: "Microsoft Learn Student Ambassadors",
    role: "Beta MLSA",
    duration: "February 2025 - Present",
    location: "Global Program",
    achievements: [
      "Hosted 6+ technical events in one month; rapidly promoted from Alpha to Beta.",
      "Mentored 1,000+ students through workshops and community engagement.",
      "Built hands-on sessions around Flutter/Dart, cloud, and AI fundamentals.",
    ],
  },
  {
    company: "SkoolSaver",
    role: "Marketing Manager",
    duration: "November 2024 - March 2025",
    location: "EdTech Sector",
    achievements: [
      "Drove brand growth and engagement through strategic campaigns and partnerships.",
      "Specialized in leveraging EdTech solutions to empower schools and learners.",
      "Executed digital marketing initiatives resulting in increased user engagement.",
    ],
  },
  {
    company: "e-DAM",
    role: "Marketing Manager & Social Media Handler",
    duration: "June 2024 - January 2025",
    location: "Hyderabad, Telangana, India",
    achievements: [
      "Managed comprehensive social media strategy and content creation.",
      "Developed and executed marketing campaigns across multiple platforms.",
      "Built brand presence and community engagement through strategic social media management.",
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const { company, role, duration, location, achievements } = experience;
  
  const { ref, variants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.2,
    delay: index * 0.1,
    staggerChildren: 0.1
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate="visible"
      className="rounded-2xl border border-border bg-muted p-6 sm:p-8 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-border/80 hover:scale-[1.02] hover:bg-muted/95 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">{company}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground shrink-0">{duration}</p>
      </div>
      <p className="mt-2 text-sm sm:text-base font-medium text-accent-orange">{role}</p>
      {location && (
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground/80">{location}</p>
      )}
      <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 list-disc list-inside text-muted-foreground text-sm sm:text-base">
        {achievements.map((achievement, achievementIndex) => (
          <li key={achievementIndex} className="leading-relaxed">{achievement}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const { ref: headerRef, variants: headerVariants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.3 
  });

  return (
    <section id="experience" className="bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-accent-orange">Professional Journey</h2>
          <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground" style={{ letterSpacing: 'var(--tracking-tight-3)'}}>
            Where I've Made My Mark
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-4">
            From student entrepreneur to marketing leader, here's my journey through the EdTech and technology landscape.
          </p>
        </motion.div>
        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;