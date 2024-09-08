import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Matrix Multiplication in C | IonicArgon',
  description: "Marco Tan's personal website",
}

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Matrix Multiplication in C',
        shortDescription: 'Matrix multiplication implementation in C on CSR matrices using the Jacobi method and Successive Over-Relaxation.',
        focus: ['Software Development', 'Algorithms'],
        stack: ['C'],
        features: ['Numerical solving of matrix systems with the Jacobi method and Successive Over-Relaxation', 'Input and output of CSR matrices', 'Preconditioners prepare matrices for numerical solving'],
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/IonicArgon/MT2MP3-MatrixSolver'
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
