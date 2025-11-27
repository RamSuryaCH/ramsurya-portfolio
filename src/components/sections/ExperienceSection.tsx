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
              <li>Organizing .NET Conf 2025 Hyderabad bringing together 300+ developers</li>
              <li>End-to-end technical event planning: venue, speakers, sponsorships, and logistics</li>
              <li>Built full-stack event website with Next.js for registration management</li>
              <li>Coordinating technical workshops and hands-on coding sessions</li>
              <li>Leading community outreach and developer engagement initiatives</li>
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
              <li>Leading AWS Cloud Club technical initiatives on campus</li>
              <li>Conducting hands-on workshops on AWS services (EC2, Lambda, S3, DynamoDB)</li>
              <li>Building serverless applications and cloud-native solutions</li>
              <li>Mentoring students on cloud architecture and DevOps practices</li>
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
              <li>Building AI-powered applications using Google Gemini API</li>
              <li>Conducting technical workshops on Generative AI and LLM integration</li>
              <li>Creating demos and sample projects showcasing Gemini capabilities</li>
              <li>Collaborating with developer communities on AI innovation projects</li>
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
              <li>Leading technical workshops on Azure, .NET, and Microsoft technologies</li>
              <li>Organizing hackathons and coding challenges for student developers</li>
              <li>Building campus tech communities focused on software development</li>
              <li>Mentoring peers on full-stack development and cloud technologies</li>
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
              <li>Joined global community of student developers and tech leaders</li>
              <li>Completed technical certifications in Azure and Microsoft technologies</li>
              <li>Promoted to Beta level for technical leadership and community impact</li>
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
                Full-Stack Developer & Technical Lead
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                2024
              </span>
            </div>
            <p className="text-lg font-semibold text-accent-orange">Independent Projects</p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Built production-ready web applications using Next.js, Node.js, and MongoDB</li>
              <li>Integrated AI capabilities with Google Gemini and other LLM APIs</li>
              <li>Developed cloud-native applications on AWS and Azure platforms</li>
              <li>Created RESTful APIs and implemented authentication systems</li>
              <li>Collaborated on open-source projects and hackathon challenges</li>
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