"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import {
  Code2,
  Boxes,
  Cloud,
  Database,
  Cpu,
  GitBranch,
  Shield,
  Binary,
  Rocket,
  Smartphone,
  Server,
  Workflow } from
"lucide-react";

const skills = [
{ name: "Flutter", className: "md:col-span-2 md:row-span-2", icon: Smartphone },
{ name: "Dart", className: "md:col-span-1", icon: Binary },
{ name: "Python", className: "md:col-span-1", icon: Code2 },
{ name: "Firebase", className: "md:row-span-2", icon: Cloud },
{ name: "MongoDB", className: "md:col-span-1", icon: Database },
{ name: "AWS", className: "md:col-span-2", icon: Server },
{ name: "AI fluency", className: "md:col-span-1", icon: Cpu },
{ name: "Prompt Engineering", className: "md:col-span-2", icon: Boxes },
{ name: "Postman API", className: "md:col-span-1", icon: Workflow },
{ name: "Git & GitHub", className: "md:col-span-1", icon: GitBranch },
{ name: "Android & iOS", className: "md:col-span-2", icon: Smartphone },
{ name: "Cyber Security (Basics)", className: "md:col-span-2", icon: Shield }];


const SkillCard = ({ name, className, icon: Icon, index }: {name: string;className?: string;icon: any;index: number;}) => {
  const { ref, variants } = useScrollAnimation('scale', {
    threshold: 0.2,
    delay: index * 0.05
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "group bg-muted rounded-2xl p-4 sm:p-6 flex flex-col items-start justify-between border border-border hover:border-border/80 transition-all duration-300 ease-in-out hover:scale-[1.02] min-h-[120px] sm:min-h-[140px] relative overflow-hidden",
        className
      )}>

      <GlowingEffect
        disabled={false}
        proximity={100}
        spread={30}
        blur={8}
        borderWidth={2}
        movementDuration={1.5}
      />

      <div className="mb-3 sm:mb-4 relative z-10">
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-foreground leading-tight relative z-10">{name}</h3>
    </motion.div>);

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
          className="text-center mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight-3 mb-4 text-foreground leading-tight">
            Technical Skills & Stack
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto px-4">
            Building performant, cross-platform apps and cloud-backed experiences with Flutter/Dart, Python, Firebase, MongoDB, and AWS. Solid grounding in C/C++ with native builds via CMake and security fundamentals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[120px] sm:auto-rows-[140px] md:auto-rows-[12rem] gap-4 sm:gap-6">
          {skills.map((skill, index) =>
          <SkillCard key={skill.name} name={skill.name} className={skill.className} icon={skill.icon} index={index} />
          )}
        </div>
      </div>
    </section>);

}