import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Matrix Solving in C | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Matrix Solving in C',
        shortDescription:
          'Matrix Solving implementation in C on CSR matrices using the Jacobi method and Successive Over-Relaxation.',
        focus: ['Software Development', 'Algorithms'],
        stack: ['C'],
        features: [
          'Numerical solving of matrix systems with the Jacobi method and Successive Over-Relaxation',
          'Input and output of CSR matrices',
          'Preconditioners prepare matrices for numerical solving',
        ],
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/IonicArgon/MT2MP3-MatrixSolver',
          },
        ],
      }}
    >
      <p className="mb-4">
        This was an implementation of the Jacobi method and Successive
        Over-Relaxation for matrix solving, written in C, for the MECHTRON 2MP3
        course. This program accepts a file in the Matrix Market format
        containing a compressed, sparse matrix, then uses a selected method and
        specified number of iterations to solve the system.
      </p>
    </Project>
  );
};

export default ProjectVRC22;
