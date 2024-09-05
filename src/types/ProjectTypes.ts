import React from 'react';

type Project = {
  date: string;
  title: string;
  description: string;
  tags: string[];
  path: string;
};

type ProjectTeamMember = {
  name: string;
  blurb: React.ReactNode;
};

type ProjectLinks = {
  text: string;
  url: string;
};

type ProjectMetadata = {
  title: string;
  shortDescription: string;
  titleImage?: string;
  focus: string[];
  stack: string[];
  features: string[];
  duration?: string;
  team?: ProjectTeamMember[];
  links?: ProjectLinks[];
};

export type { Project, ProjectMetadata, ProjectTeamMember };
