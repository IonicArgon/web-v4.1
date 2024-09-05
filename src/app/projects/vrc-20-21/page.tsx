import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';

export const metadata: Metadata = {
  title: 'VRC Season - Change Up | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectVRC21 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'VRC Season - Change Up',
        shortDescription: 'Competition code for the 2020 - 2021 VRC season, "Change Up".'
        
      }}
    >

    </Project>
  );
};

export default ProjectVRC21;

