import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Genetic Algorithm in C | IonicArgon',
  description: "Marco Tan's personal website",
};

const GeneticAlgorithm = () => {
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
            url: 'https://github.com/IonicArgon/GeneticAlgorithm',
          },
        ],
      }}
    >
      <p className="mb-4">
        This was an implementation of a genetic algorithm in C. This program
        takes in values from the command line and computes the best solution to
        minimize the Rastrigin function, with the option to enable and disable
        elitism.
      </p>

      <h2 className="text-2xl font-bold"># Biology? In my bits and bytes?</h2>
      <p className="text-sm text-mountbatten-pink mb-2">
        (it&apos;s more likely than you think)
      </p>
      <p className="mb-4">
        Heuristic methods are kind of magical if you think about it. You&apos;re
        taking a complex problem, one that might have hundreds of thousands of
        parameters, and approximating it to the point where you can say
        &quot;Eh, close enough,&quot; and it just works. So, imagine how
        awestruck I was when I found out that you <em>simulate evolution</em>{' '}
        within a program to solve problems.
      </p>
      <p className="mb-4">
        What really got me into this way of thinking was through the videos on
        this{' '}
        <AnimatedLink href="https://www.youtube.com/@PrimerBlobs/videos">
          YouTube channel
        </AnimatedLink>{' '}
        (they make amazing visualizations). Take for example, this video showing
        how simulated creatures can learn how to work together:
      </p>
      <div className="mb-4 flex content-center items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TZfh8hpJIxo?si=LvphTUDivZP2sDNp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <p className="text-sm text-mountbatten-pink mb-4">
        (isn&apos;t that just awesome?)
      </p>
      <p className="mb-4">
        It couldn&apos;t be <em>that</em> hard to implement my own evolutionary
        algorithm, right?
      </p>

      <h2 className="text-2xl font-bold"># Code and Features</h2>
      <p className="mb-4">
        The algorithm I decided to go for was a <b>genetic algorithm</b>. In a
        nutshell, randomize a population, let them make &quot;children&quot;,
        allow these individuals to mate and mutate and hopefully, after some
        amount of generations, you&apos;re left with an answer that&quot;s just{' '}
        <em>close enough</em>. To keep things simple for my first attempt at
        this, I decided to optimize a well-known test function, the{' '}
        <AnimatedLink href="https://en.wikipedia.org/wiki/Rastrigin_function">
          Rastrigin function
        </AnimatedLink>
        , before I moved on to anything larger.
      </p>
      <div className="mb-4 relative w-full max-w-4xl h-[200px]">
        <Image
          src="/projects/genetic-algorithm/ga-fig1.png"
          alt="Genetic algorithm, fig 1."
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="mb-4">
        As for why I chose C as the language, some of the courses I was taken
        were already using C and I didn&apos;t feel like swapping between
        languages for projects, so it made sense to settle on that.
        Nevertheless, here are the features.
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

export default GeneticAlgorithm;
