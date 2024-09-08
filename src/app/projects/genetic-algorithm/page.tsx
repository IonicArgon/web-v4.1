import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Genetic Algorithm in C | IonicArgon',
  description: "Marco Tan's personal website",
}

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Genetic Algorithm in C',
        shortDescription: 'Genetic algorithm implementation in C to minimize the Rastrigin function, with optional elitsm.',
        focus: ['Software Development', 'Algorithms', 'Heuristics'],
        stack: ['C'],
        features: ['Heuristic optimization of the Rastrigin function.', 'Modifiable crossover rates, mutation rates, and other initial values.', 'Optional elitism with culling.'],
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
