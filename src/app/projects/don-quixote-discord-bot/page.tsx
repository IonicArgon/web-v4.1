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
        title: 'Don Quixote Discord Bot',
        shortDescription: 'silly little creature',
        focus: ['Software Development', 'Bots', 'Python', 'API'],
        stack: ['Python 3.12', 'PyCord'],
        features: ['Detection of Limbus Company via Discord Rich Presence', 'Automatic connection to voice channels', 'Multiple Identity creation with channel webhooks'],
        links: [
          {
            text: 'GitHub (v1)',
            url: 'https://github.com/IonicArgon/don-quixote'
          },
          {
            text: 'GitHub (v2)',
            url: 'https://github.com/IonicArgon/don-quixote-v2'
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
