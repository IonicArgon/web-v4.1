import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';
import KatexMath from '@/components/KatexMath';

export const metadata: Metadata = {
  title: 'Matrix Solving in C | IonicArgon',
  description: "Marco Tan's personal website",
};

const LinearSystems = () => {
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
      <div className="mb-4 relative w-full max-w-4xl h-[400px]">
        <Image
          src="/projects/linear-systems/linsys-fig1.png"
          alt="BeeAble"
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="text-sm text-mountbatten-pink mb-4">
        (i won&apos;t even lie, these are kinda creepy)
      </p>

      <h2 className="text-2xl font-bold"># Code and Features</h2>
      <p className="mb-4">
        There were two methods I wanted to explore in particular, those being
        the{' '}
        <AnimatedLink href="https://en.wikipedia.org/wiki/Jacobi_method">
          Jacobi method
        </AnimatedLink>{' '}
        and{' '}
        <AnimatedLink href="https://en.wikipedia.org/wiki/Successive_over-relaxation">
          Successive over-relaxation
        </AnimatedLink>
        . I chose these two methods in particular because they&apos;re both
        methods of <em>relaxing</em> (solving for) the system, but the ways they
        go about it allowed me to make a very interesting parallel between
        linear system solvers and control theory.
      </p>

      <h3 className="text-xl font-bold">## Jacobi Method</h3>
      <p className="mb-4">
        The Jacobi method, as far as I understand, is the most basic way to
        solve for some linear systems (the &quot;some&quot; is addressed later).
        Starting with a more formal definition, we have some system:
      </p>
      <KatexMath mathExp="Ax = b" />
      <p className="mb-4">
        This system can be defined in terms of matrices, where <b>A</b> and{' '}
        <em>b</em> are known to us, and we&apos;re trying to solve for x:
      </p>
      <KatexMath
        mathExp={`A =
        \\begin{bmatrix}
          a_{11} & a_{12} & \\dots & a_{1n} \\\\
          a_{21} & a_{22} & \\dots & a_{2n} \\\\
          \\vdots & \\vdots & \\ddots & \\vdots \\\\
          a_{n1} & a_{n2} & \\dots & a_{nn} \\\\
        \\end{bmatrix},

        \\mathbf{x} = 
        \\begin{bmatrix}
          x_{1} \\\\
          x_{2} \\\\
          \\vdots \\\\
          x_{n}
        \\end{bmatrix}, \\\\[10pt]

        \\mathbf{b} = 
        \\begin{bmatrix}
          b_{1} \\\\
          b_{2} \\\\
          \\vdots \\\\
          b_{n}
        \\end{bmatrix}
        `}
      />

      <h3 className="text-xl font-bold">## Successive Over-Relaxation</h3>
    </Project>
  );
};

export default LinearSystems;
