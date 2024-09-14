import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';
import KatexMath from '@/components/KatexMath';

export const metadata: Metadata = {
  title: 'Solving Linear Systems in C',
  description: "Marco Tan's post about solving linear systems in C.",
  keywords: [
    'C',
    'Project',
    'Linear systems',
    'Jacobi method',
    'Successive over-relaxation',
    'Numerical methods',
    'algorithms',
  ],
};

const LinearSystems = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Solving Linear Systems in C',
        shortDescription:
          'Linear solver implementation in C. Solves systems defined with CSR matrices using the Jacobi method and Successive Over-Relaxation.',
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
            url: 'https://github.com/IonicArgon/LinearSystems',
          },
        ],
      }}
    >
      <p className="mb-4">
        This was an implementation of the Jacobi method and Successive
        Over-Relaxation (SOR) for solving linear systems, written in C. This
        program accepts a file in the Matrix Market format containing a
        compressed, sparse matrix, then uses a selected method and specified
        number of iterations to solve the system.
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
      <KatexMath mathExp="A \mathbf{x} = \mathbf{b}" />
      <p className="mb-4">
        This system can be defined in terms of matrices, where{' '}
        <KatexMath mathExp="A" inline={true} /> and{' '}
        <KatexMath mathExp="\mathbf{b}" inline={true} /> are known to us, and
        we&apos;re trying to solve for{' '}
        <KatexMath mathExp="\mathbf{x}" inline={true} />:
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
        \\end{bmatrix}, 

        \\mathbf{b} = 
        \\begin{bmatrix}
          b_{1} \\\\
          b_{2} \\\\
          \\vdots \\\\
          b_{n}
        \\end{bmatrix}.
        `}
      />
      <p className="mb-4">
        Using our initial guess{' '}
        <KatexMath mathExp="{\mathbf{x}}^{(0)}" inline={true} />, we can
        calculate the <em>k</em>-th iteration of the solution, denoted as{' '}
        <KatexMath mathExp="{\mathbf{x}}^{(k)}" inline={true} />, and we can
        iteratively compute the next individual elements of this solution vector
        via the formula
      </p>
      <KatexMath
        mathExp={`
          {x_i}^{(k+1)} = 
          \\frac{1}{a_{ii}} 
          \\left( 
            b_i - 
            \\displaystyle\\sum_{j\\not = i}{} a_{ij} {x_j}^{(k)}
          \\right), \\enspace i=1,2,\\dots,n.
        `}
      />
      <p className="mb-4">
        Admittedly, this just look like gibberish to the average person. In
        simpler terms, this method is a <b>feedback system</b>, wherein we make
        our next guess based on our previous guess. An easy example of such a
        system is a thermostat, where the temperature of the house is used to
        adjust the furnace or A/C to bring the interior temperature closer to
        the set point.
      </p>
      <p className="mb-4">
        That example actually segues perfectly into my parallel between this and
        control theory. Specifically, the PID controllers I wrote while I was
        still on my robotic&apos;s team. If you think about it, the proportional
        term in such a controller works similarly to this method of system
        relaxation; we have some target we&apos;re trying to reach, we have some
        initial guess or value to get us there, and we&apos;re calculating our
        next value to reduce the error between us and the target; reducing the
        residual when we relax such a system is very similar to reducing the
        error in such a system.
      </p>

      <h3 className="text-xl font-bold">## Successive Over-Relaxation</h3>
      <p className="mb-4">
        Successive over-relaxation takes the Jacobi method a step further (and
        subsequently, our analogy a step further) by introducing{' '}
        <b>current values</b> in our calculations. With the same system we
        defined above, we can iteratively calculate each element in the solution
        vector via the formula
      </p>
      <KatexMath
        mathExp={`
          {x_i}^{(k+1)} =
          (1 - \\omega){x_i}^{(k)} +
          \\frac{\\omega}{a_{ii}}
          \\left(
            b_i -
            \\displaystyle\\sum_{j<i}{}a_{ij}{x_j}^{(k+1)} - 
            \\displaystyle\\sum_{j>i}{}a_{ij}{x_j}^{(k)}
          \\right), \\\\[0.5em]

          \\omega \\in [0, 2], \\enspace i=1,2,\\dots,n.
        `}
      />
      <p className="mb-4">
        Again, this looks like hieroglyphics, but there are a few things to note
        with this particular formula:
      </p>
      <ul className="list-disc list-outside ml-5 mb-2">
        <li>
          We&apos;ve decomposed the matrix{' '}
          <KatexMath mathExp="A" inline={true} /> into upper and lower
          triangular matrices. This isn&apos;t a fundamental change, but it
          allows us to more efficiently calculate element values by using
          forward substitution for some of calculations.*
        </li>
        <li>
          We&apos;ve introduced a new value,{' '}
          <KatexMath mathExp="\omega > 1" inline={true} /> in this formula
          because...
        </li>
        <li>
          <b>
            We now include both previous and current values when calculating the
            next iteration of our solution.
          </b>{' '}
          <KatexMath mathExp="\omega" inline={true} /> dictates the ratio
          between the two when we compute our new iteration.
        </li>
      </ul>
      <p className="text-sm text-mountbatten-pink mb-4">
        * Forward substitution is the process of using the value{' '}
        <KatexMath mathExp="x_i" inline={true} /> in the <em>next</em> equation
        to solve for <KatexMath mathExp="x_{i+1}" inline={true} />, so on and so
        forth.
      </p>
      <p className="mb-4">
        This changes our method of relaxing (solving) linear systems because
        we&apos;ve gone from a pure feedback system to a system with feedback{' '}
        <b>and</b> feedforward elements. This helps us primarily in two ways:
      </p>
      <ul className="list-disc list-outside ml-5 mb-2">
        <li>
          Successive over-relaxation can take larger <em>jumps</em> towards a
          potential unique solution. This means SOR can typically converge to a
          solution faster than the Jacobi method can.
        </li>
        <li>
          The introduction of the relaxation factor{' '}
          <KatexMath mathExp="\omega" inline={true} /> allows SOR to explore the
          solution space more efficiently, potentially avoiding oscillations.
          This addresses a key issue with the Jacobi method wherein systems
          where <KatexMath mathExp="A" inline={true} /> is not{' '}
          <b>strictly diagonally dominant</b> are <b>not guaranteed</b> to
          converge to a unique solution.
        </li>
      </ul>

      <h3 className="text-xl font-bold">## Preconditioners </h3>
      <p className="mb-4">
        Using a different method is not the only way of increasing your chances
        of convergence. Since we know that the Jacobi method is guaranteed to
        converge given a strictly diagonally dominant matrix (for reasons that
        are beyond me, currently), we could try manipulating the matrix{' '}
        <KatexMath mathExp="A" inline={true} /> using <em>preconditioners</em>{' '}
        to try and create a system that minimizes oscillations and creates a
        structure more favourable to convergence.
      </p>
      <p className="mb-4">
        Typically, a preconditioner is some matrix{' '}
        <KatexMath mathExp="P" inline={true} /> that is multiplied with{' '}
        <KatexMath mathExp="A" inline={true} /> to transform it in some way. I
        opted for a kinda messed up version of a permutation matrix-based
        preconditioner where I check for strict diagonal dominance, and if the
        coefficient matrix does not pass the test, I swap rows around until it
        does. The way I implemented didn&apos;t make use of a permutation matrix
        and instead was kinda poorly implemented with a bunch of for-loops, but
        it surprisingly improved the performance of the Jacobi method.
      </p>

      <h2 className="text-2xl font-bold"># Reflection</h2>
      <p className="mb-4">
        I think the biggest lesson from this project was when I was hit with
        sheer disappointment when I discovered that my code was{' '}
        <b>abysmally slow</b>. For relatively small systems, the code works just
        fine, but it scales horribly for some of the larger Matrix Market
        matrices you can find online.
      </p>
      <p className="mb-4">
        I did a profile of my code to see what it was that was slowing
        everything down, and the issue was in my implementation of the
        matrix-vector multiplication operation. The implementation has a time
        complexity of <KatexMath mathExp="\Omicron(n^2)" inline={true} />, which
        would never scale to the kind of systems I wanted to compute.
      </p>
      <p className="mb-4">
        The lesson here is that{' '}
        <b>going into things without a plan does&apos;t always work</b>. Had I
        gone into this with some kind of a plan and an understanding of how I
        would reduce the time complexity of my code, maybe I could&apos;ve
        produced a more functional version of this program. Obviously, that
        doesn&apos;t mean I should develop every little script I write using
        Agile or a waterfall model, but at the very least, I should go into
        larger projects with some kind of plan of action.
      </p>
    </Project>
  );
};

export default LinearSystems;
