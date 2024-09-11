import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';
import KatexMath from '@/components/KatexMath';

export const metadata: Metadata = {
  title: 'Matrix Solving in C | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Solving Linear Systems in C',
        shortDescription:
          'Linear solver implementation in C on CSR matrices using the Jacobi method and Successive Over-Relaxation.',
        focus: ['Software Development', 'Algorithms', 'Numerical Methods'],
        stack: ['C'],
        features: [
          'Numerical solving of linear systems with the Jacobi method and Successive Over-Relaxation',
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
        Over-Relaxation for solving linear systems, written in C. This program
        accepts a file in the Matrix Market format containing a compressed,
        sparse matrix, then uses a selected method and specified number of
        iterations to solve the system.
      </p>

      <h2 className="text-2xl font-bold"># computer go brrr-</h2>
      <p className="mb-4">
        I think the heading describes this pretty succinctly. Whereas heuristics
        tries to solve a problem by approximating it just <em>good enough</em>,
        numerical methods are all about crafting an algorithm and having it run
        on the beefiest hardware you have for as long as you can bear it.
        It&apos;s nowhere near as elegant as heuristics, but it does work for a
        lot of situations.
      </p>

      <h2 className="text-2xl font-bold"># But Why Matrices?</h2>
      <p className="mb-4">
        Because solving linear systems is important for a multitude of things I
        want to look into as I continue exploring the world of code. Probably
        the best example I can give is the use of{' '}
        <em>eigenvectors and eigenvalues</em> in graphics applications
        (geometric transformations), Markov chains, calculating stresses, and
        even in facial recognition (with eigenfaces).
      </p>

      <h2 className="text-2xl font-bold"># Code and Features</h2>
      <p className="mb-4">There were two methods I wanted to explore</p>
      <KatexMath mathExp="\sqrt{a + b}" />
    </Project>
  );
};

export default ProjectVRC22;
