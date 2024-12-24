import { Metadata } from 'next';
import AnimatedLink from '@/components/AnimatedLink';
import CodeBlock from '@/components/CodeBlock';

import Writing from '@/components/Writing';
import {
  example_search,
  example_correct,
  node_class,
  build_graph,
  search_xmas,
  part1,
  x_mas,
  search_x_mas,
  part2,
} from './snippets';

export const metadata: Metadata = {
  title: 'Advent of Code 2024 - Day 4',
  description: "Marco Tan's Advent of Code 2024 Day 4 solution.",
  keywords: ['Advent of Code', 'Advent of Code 2024', 'C++'],
  alternates: {
    canonical: 'https://www.ionicargon.ca/writings/aoc-2024/day-4',
  },
};

const AoC2024Day1 = () => {
  return (
    <Writing
      writingMetadata={{
        title: 'Advent of Code 2024 - Day 4',
        shortDescription: 'Ceres Search',
        date: 'December 19th, 2024',
        tags: ['Advent of Code', 'C++'],
      }}
    >
      <p className="mb-4">
        This is where I thought things were starting to get interesting. It took
        a little bit more thinking and some tinkering to get the solution right,
        but it worked out in the end.
      </p>

      <h2 className="text-2xl font-bold mt-8"># Part 1</h2>
      <p className="mb-4">
        This is basically just a word search at the most basic level. We have
        some X by Y grid of letters containing only Xs, Ms, As, and Ss, and we
        have to find the number of occurrences of the word &ldquo;XMAS&rdquo; in
        the grid. The word can be found in any direction, backwards, and can
        even overlap with other occurrences. The following is an example of a
        grid:
      </p>

      <CodeBlock code={example_search} language="plaintext" height="h-40" />

      <p className="mb-4">
        And here&apos;s the same thing but letters not involved with any XMASes
        are replaced with periods. There are 18 occurrences total in this
        example:
      </p>

      <CodeBlock code={example_correct} language="plaintext" height="h-40" />

      <p className="mb-4">
        It took a little bit for me to figure this out. I knew that the most
        straightforward method would be to use some sort of graph data structure
        to represent the grid and then search for all occurrences, but figuring
        out the specific algorithm was a little tricky. However, I realized
        that:
      </p>
      <ol className="list-decimal list-inside ml-5 mb-4">
        <li>
          All the instances start with X, meaning we can search for Xs only
          initially to find the possible word roots.
        </li>
        <li>
          From there, the direction of possible valid instances is set by all
          adjacent Ms that neighbour all root Xs.
        </li>
        <li>
          Finally, we know what neighbours must come sequentially, so we can
          just search down that direction to determine if we found a valid
          instance of XMAS.
        </li>
      </ol>

      <p className="mb-4">
        To implement this, I created a class to represent a node. Within each
        class is a hash table of pointers to all adjacent nodes, where the key
        is the direction of the adjacent node relative to the current node.
      </p>

      <CodeBlock code={node_class} language="cpp" height="h-80" />

      <p className="mb-4">
        We can then read in the file to assemble the graph&mdash;first by
        creating all the nodes, then linking them together by assigning the
        appropriate pointers.
      </p>

      <CodeBlock code={build_graph} language="cpp" height="h-80" />

      <p className="mb-4">
        After that, implementation of the search algorithm using a semi-breadth
        first search was pretty straight forward. We search for all Xs, then all
        neighbouring Ms of those Xs (keeping track of the direction). Then, we
        look down all possible directions (based on the neighbours we found) to
        see if we have a valid instance of XMAS.
      </p>

      <CodeBlock code={search_xmas} language="cpp" height="h-80" />

      <p className="mb-4">The result is this final implementation:</p>

      <CodeBlock code={part1} language="cpp" height="h-80" />

      <h2 className="text-2xl font-bold mt-8"># Part 2</h2>
      <p className="mb-4">
        This second part gets a little trickier as now we&apos;re trying to look
        for &ldquo;X-MAS&rdquo;es instead, the distinction being that an X-MAS
        is an X made of two MASes, like shown below:
      </p>

      <CodeBlock code={x_mas} language="plaintext" height="h-20" />

      <p className="mb-4">
        We can use a similar line of reasoning as before to solve this part. We
        search for all the As as the roots this time (since there&apos;s always
        an A in the middle of an X-MAS), then look for neighbouring Ms. From
        there, each neighbouring M must have an opposing S relative to the root
        A. If a given root has two such pairs, it&apos;s a valid X-MAS. This
        leads to the following modified search function:
      </p>

      <CodeBlock code={search_x_mas} language="cpp" height="h-80" />

      <p className="mb-4">And the final implementation for part 2:</p>

      <CodeBlock code={part2} language="cpp" height="h-80" />

      <p className="mb-4">
        Definitely starting to get a little trickier now, but I&apos;m still
        enjoying the challenge. There&apos;s some kind of charm with these
        particular questions that you don&apos;t get with LeetCode problems and
        the like and I wish I had done this sooner. Here&apos;s hoping that I
        fair just as well with the other problems.
      </p>
    </Writing>
  );
};

export default AoC2024Day1;
