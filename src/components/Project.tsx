'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

import AnimatedLink from '@/components/AnimatedLink';
import type { ProjectMetadata } from '@/types/ProjectTypes';

const Project: React.FC<{
  projectMetadata: ProjectMetadata;
  children: React.ReactNode;
}> = ({ projectMetadata, children }) => {
  const [showTeamMemberData, setShowTeamMemberData] = useState<
    Record<string, boolean>
  >({});

  const populateTeamMemberData = () => {
    if (projectMetadata.team) {
      const newShowTeamMemberData: Record<string, boolean> = {};
      projectMetadata.team.forEach((teamMember) => {
        newShowTeamMemberData[teamMember.name] = false;
      });
      setShowTeamMemberData(newShowTeamMemberData);
    }
  };

  useEffect(() => {
    populateTeamMemberData();
  }, []);

  return (
    <main>
      <div id="main-content" className="text-cream font-mono">
        <h1 className="text-4xl font-bold">{projectMetadata.title}</h1>
        <h2 className="text-lg font-medium text-mountbatten-pink">
          {projectMetadata.shortDescription}
        </h2>
        {projectMetadata.titleImage && (
          <div className="flex flex-row justify-center mt-8">
            <div className="relative w-full max-w-4xl h-[600px]">
              <Image
                src={projectMetadata.titleImage}
                alt={projectMetadata.title}
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        )}
        <h3 className="text-2xl font-bold mt-8 mb-4"># TL;DR</h3>
        <div id="project-metadata" className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2">
            <span className="font-bold">Focus:</span>
            {projectMetadata.focus.sort().map((focus, index) => (
              <span
                key={index}
                className="text-sm flex items-center text-center justify-center text-dark-purple bg-rose-quartz py-1 px-2 rounded-sm leading-none"
              >
                {focus}
              </span>
            ))}
          </div>
          <div className="flex flex-row space-x-2">
            <span className="font-bold">Stack:</span>
            {projectMetadata.stack.sort().map((stack, index) => (
              <span
                key={index}
                className="text-sm flex items-center text-center justify-center text-dark-purple bg-rose-quartz py-1 px-2 rounded-sm leading-none"
              >
                {stack}
              </span>
            ))}
          </div>
          {projectMetadata.duration && (
            <div className="flex flex-row space-x-2">
              <span className="font-bold">Duration:</span>
              <span className="text-sm flex items-center text-center justify-center text-dark-purple bg-rose-quartz py-1 px-2 rounded-sm leading-none">
                {projectMetadata.duration}
              </span>
            </div>
          )}
          <div className="flex flex-row space-x-2">
            <span className="font-bold mr-2">Features:</span>
            <ul className="list-disc list-inside text-rose-quartz">
              {projectMetadata.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          {projectMetadata.team && (
            <div className="flex flex-row space-x-2">
              <span className="font-bold mr-2">Team:</span>
              <ul className="list-inside text-mountbatten-pink space-y-2">
                {projectMetadata.team.map((teamMember, index) => (
                  <li key={index}>
                    <span
                      className="text-sm text-dark-purple bg-rose-quartz py-1 px-2 rounded-sm max-w-fit cursor-pointer flex items-center justify-center text-center leading-none"
                      onMouseEnter={() => {
                        setShowTeamMemberData((prev) => ({
                          ...prev,
                          [teamMember.name]: true,
                        }));
                      }}
                      onMouseLeave={() => {
                        setShowTeamMemberData((prev) => ({
                          ...prev,
                          [teamMember.name]: false,
                        }));
                      }}
                    >
                      {teamMember.name}
                      <ChevronUp
                        className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${showTeamMemberData[teamMember.name] ? 'rotate-180' : null}`}
                      />
                    </span>
                    {showTeamMemberData[teamMember.name] ? (
                      <div className="mt-2">{teamMember.blurb}</div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {projectMetadata.links && (
          <div className="flex flex-row space-x-2 mt-4">
            <span className="font-bold">Links:</span>
            <ul className="list-inside text-mountbatten-pink space-y-2">
              {projectMetadata.links.map((link, index) => (
                <li key={index}>
                  <AnimatedLink href={link.url}>{link.text}</AnimatedLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-4">{children}</div>
      </div>
    </main>
  );
};

export default Project;
