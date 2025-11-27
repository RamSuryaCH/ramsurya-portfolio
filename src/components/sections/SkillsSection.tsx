"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import {
  Code2,
  Cloud,
  Sparkles,
  Users,
  Layers,
  Database,
} from "lucide-react";

const skills = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Code2 className="h-4 w-4" />,
    title: "Full-Stack Development",
    description: "Building production systems with Node.js, Next.js, Swift, and modern web frameworks. Strong foundation in JavaScript/TypeScript ecosystems.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Sparkles className="h-4 w-4" />,
    title: "AI Integration",
    description: "Shipping AI-powered applications with Gemini Pro, LLM APIs, and Generative AI. Experience building context-aware intelligent systems.",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Cloud className="h-4 w-4" />,
    title: "Cloud Architecture",
    description: "Deploying scalable applications on AWS and Azure. Experienced with serverless functions, cloud databases, and DevOps practices.",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Database className="h-4 w-4" />,
    title: "Database & APIs",
    description: "Designing RESTful APIs and working with MongoDB, PostgreSQL, and cloud databases. Strong understanding of data modeling and optimization.",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Users className="h-4 w-4" />,
    title: "Developer Community Leadership",
    description: "Leading tech communities, organizing developer events, conducting technical workshops, and mentoring fellow developers in modern technologies.",
  },
];

interface SkillCardProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  index: number;
}

const SkillCard = ({ area, icon, title, description, index }: SkillCardProps) => {
  const { ref, variants } = useScrollAnimation('scale', {
    threshold: 0.2,
    delay: index * 0.1
  });

  return (
    <motion.li
      ref={ref}
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn("min-h-[14rem] list-none", area)}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default function SkillsSection() {
  const { ref: headerRef, variants: headerVariants } = useScrollAnimation('fadeInUp', {
    threshold: 0.3
  });

  return (
    <section id="skills" className="bg-background py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight-3 mb-4 text-foreground leading-tight">
            Technical Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
            Full-stack developer with AI fluency, cloud expertise, and passion for building production systems.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              area={skill.area}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}