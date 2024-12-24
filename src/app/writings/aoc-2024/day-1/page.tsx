import { Metadata } from 'next';
import AnimatedLink from '@/components/AnimatedLink';
import CodeBlock from '@/components/CodeBlock';

import Writing from '@/components/Writing';
import { snippet_1, snippet_2, snippet_3, sample_list } from './snippets';

export const metadata: Metadata = {
  title: 'Advent of Code 2024 - Day 1',
  description: "Marco Tan's Advent of Code 2024 Day 1 solution.",
  keywords: ['Advent of Code', 'Advent of Code 2024', 'C++'],
  alternates: {
    canonical: 'https://www.ionicargon.ca/writings/aoc-2024/day-1',
  },
};

const AoC2024Day1 = () => {
  return (
    <Writing
      writingMetadata={{
        title: 'Advent of Code 2024 - Day 1',
        shortDescription: 'Historian Hysteria',
        date: 'Written December 20th, 2024 | Attempted December 3rd, 2024',
        tags: ['Advent of Code', 'C++'],
      }}
    >
      <p className="mb-4">
        So from what I understand, the problems on the first day are typically
        &ldquo;easy,&rdquo; just to warm up people to the format I think. Guess
        that makes sense since this solution is relatively straight forward.
      </p>

      <h2 className="text-2xl font-bold mt-8"># Part 1</h2>
      <p className="mb-4">
        There&apos;s a lot of text but it basically boils down to the following
        steps:
      </p>
      <ol className="list-decimal list-outside ml-5 mb-4">
        <li>Read in the file (arguably the biggest part).</li>
        <li>Sort the two lists provided in the file.</li>
        <li>Find the first differences and compute the sum of them.</li>
      </ol>

      <p className="mb-4">
        Here&apos;s an example of the input file, where the first list is on the
        left and the second list is on the right:
      </p>
      <CodeBlock code={sample_list} language="plaintext" height="h-50" />

      <p className="mb-4">In C++, the code boils down to this:</p>

      <CodeBlock code={snippet_1} language="cpp" height="h-80" />

      <p className="mb-4">
        And because I&apos;m an <em>epic</em> C++ programmer, here&apos;s the
        same thing but using ranges:
      </p>

      <CodeBlock code={snippet_2} language="cpp" height="h-80" />

      <h2 className="text-2xl font-bold mt-8"># Part 2</h2>
      <p className="mb-4">
        Part 2 is a bit more involved but it&apos;s still relatively simple.
        Basically:
      </p>
      <ol className="list-decimal list-outside ml-5 mb-4">
        <li>Read in the file (again).</li>
        <li>
          For the first unique instance of a number in the first list, count the
          number of occurrences in the second list. The base &ldquo;similarity
          score&rdquo; is the product of the unique number and the number of
          occurrences.
        </li>
        <li>
          For every repeat occurrence in the first list, the score increases by
          the product computed before.
        </li>
        <li>Then compute the sum of the similarity scores.</li>
      </ol>

      <p className="mb-4">Here&apos;s the code:</p>

      <CodeBlock code={snippet_3} language="cpp" height="h-80" />

      <p className="mb-4">
        Again, pretty simple stuff that&apos;s good for a warm-up. Though,
        I&apos;ve heard the problems get harder as the days go on. Here&apos;s
        hoping I can get past day 5 <em>lmao</em>.
      </p>
    </Writing>
  );
};

export default AoC2024Day1;
