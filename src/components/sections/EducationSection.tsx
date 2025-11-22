"use client";

import React from 'react';
import { Award, BadgeCheck, School, BookOpen, GraduationCap, Code2 } from 'lucide-react';
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Timeline } from "@/components/ui/timeline";

const educationData = [
  {
    title: '2027 - 2023',
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4 bg-muted p-6 rounded-2xl border border-border">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-border">
            <School className="h-6 w-6 text-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Institute of Aeronautical Engineering</h3>
            <p className="text-base text-muted-foreground mt-1">B.Tech CSE (Cyber Security)</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Pursuing Computer Science & Engineering with specialization in Cyber Security. Active in technical communities and student programs; focused on AI, cloud and security fundamentals.
            </p>
            <p className="mt-4 text-sm text-muted-foreground font-medium">Expected 2027</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2023 - 2021',
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4 bg-muted p-6 rounded-2xl border border-border">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-border">
            <GraduationCap className="h-6 w-6 text-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Sri Shirdi Sai Junior College, Rajahmundry</h3>
            <p className="text-base text-muted-foreground mt-1">Intermediate (MPC)</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Completed intermediate education in Mathematics, Physics, and Chemistry, building a strong foundation in science and analytical thinking.
            </p>
            <p className="mt-4 text-sm text-muted-foreground font-medium">July 2021 - March 2023</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: '2021 - 2020',
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4 bg-muted p-6 rounded-2xl border border-border">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-border">
            <School className="h-6 w-6 text-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Tirumala Proactive High School, Rajahmundry</h3>
            <p className="text-base text-muted-foreground mt-1">Secondary Education</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Completed high school education with a focus on core subjects and extracurricular activities.
            </p>
            <p className="mt-4 text-sm text-muted-foreground font-medium">July 2020 - June 2021</p>
          </div>
        </div>
      </div>
    ),
  },
];

const certificationsData = [
  {
    icon: Award,
    institution: 'Google Cloud',
    degree: 'Gen AI Study Jams',
    period: '2024',
    description:
      'Completed advanced coursework in Generative AI technologies and applications, staying at the forefront of AI innovation and implementation.',
  },
  {
    icon: BadgeCheck,
    institution: 'Google x ISC2',
    degree: 'Put It to Work: Prepare for Cybersecurity Jobs',
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
    icon: Code2,
    institution: 'Anthropic',
    degree: 'Introduction to Model Context Protocol',
    period: '2024',
    description:
      'Learned the fundamentals of Model Context Protocol (MCP) for building context-aware AI applications and integrations.',
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

const CertificationCard = ({ item, index }: { item: typeof certificationsData[0], index: number }) => {
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
};

const EducationSection = () => {
  const { ref: headerRef, variants: headerVariants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.3 
  });

  const { ref: certHeaderRef, variants: certHeaderVariants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.3 
  });

  return (
    <section id="education" className="bg-background py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Education Section with Timeline */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight-3 text-foreground">
            Education
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-4">
            Academic foundation and continuous learning journey.
          </p>
        </motion.div>

        <Timeline data={educationData} />

        {/* Certifications Section */}
        <motion.div
          ref={certHeaderRef}
          variants={certHeaderVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center mt-24 sm:mt-32 md:mt-40"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight-3 text-foreground">
            Certifications
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground px-4">
            Professional certifications and achievements that showcase my expertise.
          </p>
        </motion.div>
        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {certificationsData.map((item, index) => (
            <CertificationCard key={item.institution} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;