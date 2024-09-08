import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'VRC Season - Tipping Point | IonicArgon',
  description: "Marco Tan's personal website",
}

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'VRC Season - Tipping Point',
        shortDescription: 'Competition code for the 2021 - 2022 VRC season, "Tipping Point".',
        focus: ['Software Development', 'Robotics', 'Control Theory', 'CADing'],
        stack: ['C++', 'PROS'],
        features: [],
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/Discobots-1104A/2021-2022-branch-sample'
          }
        ]
      }}
    >
      <p className='mb-4'>
        test,
      </p>
    </Project>
  );
}

export default ProjectVRC22;
