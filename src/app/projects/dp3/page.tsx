import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Design Project 3 | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectDP3 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Design Project 3',
        shortDescription:
          'Power wheelchair control system for partially paralysed individuals.',
        titleImage: '/projects/dp3/dp3-fig1.png',
        focus: ['Software Development', 'Accessibility'],
        stack: ['Python', 'Raspberry Pi'],
        features: [
          'Sensor filtering and smoothing',
          'PID control',
          'Accessible usage and control',
        ],
        duration: '2 months',
        team: [
          { name: 'Marco Tan', role: 'Coordinator, Software subteam' },
          { name: 'Ethan Otteson', role: 'Manager, Hardware subteam' },
          { name: 'Salma Baig', role: 'Administrator, Hardware subteam' },
          {
            name: 'Emily Attai',
            role: 'Subject Matter Expert, Software subteam',
          },
        ],
      }}
    >
      <h2 className="text-2xl font-bold"># Overview</h2>
      <p></p>
    </Project>
  );
};

export default ProjectDP3;
