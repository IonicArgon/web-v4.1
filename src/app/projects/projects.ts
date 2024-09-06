import type { Project } from '@/types/ProjectTypes';

// todo: make this dynamic via firebase

const ProjectsArray: Project[] = [
  {
    date: '2023-03-03',
    title: 'Power Wheelchair Control System',
    description:
      'Power wheelchair control system for partially paralysed individuals.',
    tags: ['iBioMed', 'Biomedical Engineering', 'Python'],
    path: '/projects/dp3',
  },
  {
    date: '2022-02-18',
    title: 'VRC Season - Tipping Point',
    description:
      'Competition code for the 2021 - 2022 VRC season, "Tipping Point".',
    tags: ['Robotics', 'VEX Robotics', 'C++', 'Design', 'CADing'],
    path: '/projects/vrc-21-22',
  },
  {
    date: '2021-09-25',
    title: 'VRC Season - Change Up',
    description:
      'Competition code for the 2020 - 2021 VRC season, "Change Up".',
    tags: ['Robotics', 'VEX Robotics', 'C++', 'Design', 'CADing'],
    path: '/projects/vrc-20-21',
  },
  {
    date: '2023-11-13',
    title: 'Genetic Algorithm in C',
    description:
      'Implementation of a genetic algorithm to optimize the Rastrigin function.',
    tags: ['Software Development', 'C', 'Heuristic Optimization'],
    path: '/projects/genetic-algorithm',
  },
  {
    date: '2023-11-30',
    title: 'Matrix Multiplication in C',
    description:
      'Implementation of Jacobi and Successive Over-Relaxation methods for matrix multiplication.',
    tags: ['Software Development', 'C', 'Algorithms'],
    path: '/projects/matrix-multiplication',
  },
  {
    date: '2024-01-01',
    title: 'Password Manager in Rust',
    description: 'Password manager implemented in Rust.',
    tags: ['Software Development', 'Rust'],
    path: '/projects/password-manager',
  },
  {
    date: '2024-07-16',
    title: 'Dataset Curation Web App for Machine Learning',
    description:
      'Web app made for LocalStudent, Inc. for curating dispute model training data.',
    tags: [
      'Software Development',
      'Web Development',
      'TypeScript',
      'Firebase',
      'Next.js',
    ],
    path: '/projects/dataset-curation-web-app',
  },
  {
    date: '2023-09-18',
    title: 'Don Quixote Discord Bot',
    description: 'Silly Discord bot based off Don Quixote from Limbus Company.',
    tags: ['Software Development', 'Python', 'Pycord'],
    path: '/projects/don-quixote-discord-bot',
  },
];

export { ProjectsArray };
