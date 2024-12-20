type Writings = {
  date: string;
  title: string;
  description: string;
  tags: string[];
  path: string;
};

type WritingMetadata = {
  title: string;
  shortDescription: string;
  titleImage?: string;
  tags: string[];
  date: string;
};

export type { Writings, WritingMetadata };
