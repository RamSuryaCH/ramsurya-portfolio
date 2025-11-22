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
                .NET Conf Hyderabad Organizer
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                November 2025 - Present
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">.NET Conf Hyderabad</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Hyderabad, Telangana, India
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Organizing .NET Conf 2025 Hyderabad in-person conference bringing together 300+ developers</li>
              <li>End-to-end event planning: venue, speakers, sponsorships, and logistics</li>
              <li>Website development and registration management</li>
              <li>Marketing strategy and community engagement</li>
              <li>On-ground coordination and attendee experience</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                AWS Cloud Club Captain
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                November 2025 - Present
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">Amazon Web Services (AWS)</p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Leading AWS Cloud Club initiatives on campus</li>
              <li>Organizing cloud computing workshops and training sessions</li>
              <li>Building cloud-focused student community</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
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
                April 2025 - November 2025
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">Smartzy Edu</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Hyderabad, Telangana, India
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Drove transformative growth in EdTech by blending technical knowledge with strategic marketing</li>
              <li>Led innovative campaigns and built vibrant tech communities</li>
              <li>Leveraged cloud platforms to empower learners and educational institutions</li>
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
              <li>Leading campus tech communities and helping fellow students develop technical and career skills</li>
              <li>Creating robust tech communities for the future</li>
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
              <li>Promoted to Beta level demonstrating leadership impact</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
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
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Drove brand growth and engagement through strategic campaigns and digital marketing</li>
              <li>Developed partnerships to empower schools and learners</li>
              <li>Leveraged EdTech solutions to create impactful educational experiences</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
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
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-8">
          <div className="space-y-3">
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