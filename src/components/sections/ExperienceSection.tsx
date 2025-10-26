"use client";

import React from 'react';
import { Timeline } from "@/components/ui/timeline";

const ExperienceSection = () => {
  const timelineData = [
    {
      title: "2025",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Gemini Student Ambassador
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                August 2025 - Present
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">Google</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Hyderabad, Telangana, India
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Led AI awareness initiatives, conducted workshops, and collaborated on festivals to engage students</li>
              <li>Encouraged hands-on usage of Google Gemini tools across campus communities</li>
              <li>Represented Google Gemini, driving conversations around AI innovation and community building</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Chief Marketing Officer
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                April 2025 - Present
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">Smartzy Edu</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Hyderabad, Telangana, India
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Driving brand growth and engagement through strategic campaigns, digital marketing, and partnerships</li>
              <li>Leveraging EdTech to empower schools and learners across India</li>
              <li>Leading innovative campaigns and community building initiatives</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Beta MLSA
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                February 2025 - Present
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">Microsoft Learn Student Ambassadors</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Global Program
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Leading campus tech communities and helping fellow students develop technical skills</li>
              <li>Creating robust tech communities and organizing workshops</li>
              <li>Building career skills for the future through mentorship and events</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2024-2025",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Marketing Manager
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                November 2024 - March 2025
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">SkoolSaver</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              EdTech Sector
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Drove brand growth and engagement through strategic campaigns and digital marketing</li>
              <li>Developed partnerships to empower schools and learners</li>
              <li>Leveraged EdTech solutions to create impactful educational experiences</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Alpha MLSA
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                January 2025 - February 2025
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">Microsoft Learn Student Ambassadors</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Global Program
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Joined global group of campus leaders eager to help fellow students</li>
              <li>Started creating tech communities and developing technical skills</li>
              <li>Promoted to Beta level after demonstrating leadership impact</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2023-2024",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Marketing Manager
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                June 2024 - January 2025
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">e-DAM</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Hyderabad, Telangana, India
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Managed comprehensive marketing strategy and brand positioning</li>
              <li>Led digital marketing initiatives and campaign execution</li>
              <li>Built strong brand presence through strategic marketing efforts</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Social Media Handler
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                September 2023 - January 2025
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">e-DAM</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Hyderabad, Telangana, India
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Managed social media strategy across multiple platforms</li>
              <li>Created engaging content and built community engagement</li>
              <li>Developed brand presence through consistent social media management</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="bg-background">
      <Timeline data={timelineData} />
    </section>
  );
};

export default ExperienceSection;