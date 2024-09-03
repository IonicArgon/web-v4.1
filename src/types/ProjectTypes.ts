type Project = {
  date: string;
  title: string;
  description: string;
  tags: string[];
  path: string;
};

type ProjectTeamMember = {
  name: string;
  role: string;
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
};

export type { Project, ProjectMetadata, ProjectTeamMember };
