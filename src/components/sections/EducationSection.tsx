"use client";

import React from 'react';
import { Award, BadgeCheck, School, BookOpen } from 'lucide-react';
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const educationData = [
  {
    icon: School,
    institution: 'Institute of Aeronautical Engineering',
    degree: 'B.Tech CSE (Cyber Security)',
    period: 'Expected 2027',
    description:
      'Pursuing Computer Science & Engineering with specialization in Cyber Security. Active in technical communities and student programs; focused on AI, cloud and security fundamentals.',
  },
  {
    icon: Award,
    institution: 'Gen AI Study Jams',
    degree: 'Certification',
    period: '2024',
    description:
      'Completed advanced coursework in Generative AI technologies and applications, staying at the forefront of AI innovation and implementation.',
  },
  {
    icon: BadgeCheck,
    institution: 'Google x ISC2',
    degree: 'Prepare for Cybersecurity Jobs',
    period: '2024',
    description:
      'Comprehensive cybersecurity certification covering industry best practices, threat assessment, and security protocols for modern organizations.',
  },
  {
    icon: BookOpen,
    institution: 'Frost Hacks',
    degree: 'Participant',
    period: '2024',
    description:
      'Active participant in hackathon events, demonstrating problem-solving skills and collaborative development in competitive environments.',
  },
  {
    icon: Award,
    institution: 'Microsoft IDC',
    degree: 'Gen AI Summit',
    period: '2024',
    description:
      'Attended exclusive AI summit at Microsoft India Development Center, gaining insights into cutting-edge AI technologies and industry applications.',
  },
];

const EducationSection = () => {
  const { ref: headerRef, variants: headerVariants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.3 
  });

  return (
    <section id="education" className="bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight-3 text-foreground">
            Education & Certifications
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-4">
            A foundation of continuous learning that powers my professional growth and technical expertise.
          </p>
        </motion.div>
        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {educationData.map((item, index) => {
            const { ref, variants } = useScrollAnimation('slideInUp', { 
              threshold: 0.2,
              delay: index * 0.15 
            });

            return (
              <motion.article
                ref={ref}
                variants={variants}
                initial="hidden"
                animate="visible"
                key={item.institution}
                className="flex h-full flex-col rounded-2xl bg-muted p-6 sm:p-8 border border-border transform transition-transform duration-300 ease-in-out hover:scale-[1.03]"
              >
                <div className="flex-grow">
                  <div className="flex items-start gap-x-3 sm:gap-x-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-border">
                      <item.icon
                        className="h-5 w-5 sm:h-6 sm:w-6 text-foreground"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold leading-tight text-foreground">
                        {item.institution}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mt-1">{item.degree}</p>
                    </div>
                  </div>
                  <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <p className="mt-4 sm:mt-6 border-t border-border pt-4 sm:pt-6 text-xs sm:text-sm text-muted-foreground font-medium">
                  {item.period}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;