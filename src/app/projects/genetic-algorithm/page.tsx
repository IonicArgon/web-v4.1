import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Genetic Algorithm in C | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Genetic Algorithm in C',
        shortDescription:
          'Genetic algorithm implementation in C to minimize the Rastrigin function, with optional elitism.',
        focus: ['Software Development', 'Algorithms', 'Heuristics'],
        stack: ['C'],
        features: [
          'Heuristic optimization of the Rastrigin function.',
          'Modifiable crossover rates, mutation rates, and other initial values.',
          'Optional elitism with culling.',
        ],
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/IonicArgon/MT2MP3-GeneticAlgorithm',
          },
        ],
      }}
    >
      <p className="mb-4">
        This was an implementation of a genetic algorithm in C written for the
        MECHTRON 2MP3 course. This program takes in values from the command line
        and computes the best solution to minimize the Rastrigin function, with
        the option to enable and disable elitism.
      </p>

      <h2 className="text-2xl font-bold"># Code and Features</h2>
      <p className="mb-4">
        I wish there was more to talk about for this project, but coursework
        being coursework, there has to be a set of constraints so that
        instructors and TAs know that a student can hit certain criteria.
        I&apos;m still pretty happy about the end product, and it is a very cool
        project, but I felt like there was so much more room for cool things.
        That being said, here are the features:
      </p>
      <ul className="list-disc list-outside ml-5 mb-2">
        <li>
          Accepts CLI arguments to modify values like population, max
          generations, mutagenesis factors, etc.
        </li>
        <li>
          Heuristically computes the minimal solution to the Rastrigin function
          with a genetic algorithm.
        </li>
        <li>
          Able to enable and disable elitism to preserve the most fit
          individuals in the population.
        </li>
        <li>Computes the wall clock time spent computing the solution.</li>
      </ul>

      <h2 className="text-2xl font-bold"># Final Takeaways</h2>
      <p className="mb-4">
        There were two pretty big takeaways from this, despite being your usual
        college project.
      </p>

      <h3 className="text-xl font-bold">## Counterintuitive Results</h3>
      <p className="mb-4">
        When I was looking for methods to improve my performance with the
        genetic algorithm, I came across elitism, a strategy to improve the
        fitness of the population by reserving a few seats for the most fit
        individuals. The idea is that by keeping the fittest alive, any further
        children will most likely be fit, as well.
      </p>
      <div className="mb-4 relative w-full max-w-4xl h-[200px]">
        <Image
          src="/projects/genetic-algorithm/ga-fig1.png"
          alt="Genetic algorithm, fig 1."
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="mb-4 relative w-full max-w-4xl h-[200px]">
        <Image
          src="/projects/genetic-algorithm/ga-fig2.png"
          alt="Genetic algorithm, fig 2."
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="mb-4">
        However, this was not actually the case, and it turns out here that
        counterintuitively, elitism was worse than the genetic algorithm by
        itself. It would make sense that keeping the most fit individuals alive
        would create more fit offspring. What actually happens though is that by
        guaranteeing the survival of a select few individuals, you end up{' '}
        <b>lowering the genetic diversity</b> of the population, and are
        therefore more likely to end up stuck in a local minimum.
      </p>
      <p className="mb-4">
        The main lesson here is that <b>intuition can be misleading at times</b>
        , especially in complex systems. Instead of just going with what
        &quot;makes sense&quot;, I should strive to test initial assumptions,
      </p>

      <h3 className="text-xl font-bold">## Planning Ahead</h3>
      <p className="mb-4">
        Another issue I encountered during this project was figuring out how to
        make my program run faster. It wasn&apos;t egregiously slow, but it was
        still slow enough to warrant concern. I figured that besides the small
        optimizations I could make, like using a binary search algorithm for
        finding parents, I ought to parallelize the program with a library like
        OpenMP. However, when I went to do that, I found that with the way the
        current program was written meant that it wasn&apos;t embarrassingly
        parallelizable.
      </p>
      <p className="mb-4">
        The lesson here was to <b>plan ahead of time</b>, as it saves a lot of
        headache later. Had this had been a bigger project where I had to make a
        major change after-the-fact, the effort spent refactoring the whole
        codebase would&apos;ve been a nightmare&mdash;a nightmare that could be
        avoided with careful planning.
      </p>
    </Project>
  );
};

export default ProjectVRC22;
