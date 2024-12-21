import { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

import Writing from '@/components/Writing';
import { example_input, snippet_1, snippet_2 } from './snippets';

export const metadata: Metadata = {
  title: 'Advent of Code 2024 - Day 2',
  description: "Marco Tan's Advent of Code 2024 Day 2 solution.",
  keywords: ['Advent of Code', 'Advent of Code 2024', 'C++'],
  alternates: {
    canonical: 'https://ionicargon.ca/writings/aoc-2024/day-2',
  },
};

const AoC2024Day1 = () => {
  return (
    <Writing
      writingMetadata={{
        title: 'Advent of Code 2024 - Day 2',
        shortDescription: 'test',
        date: 'Written December 21st, 2024 | Attempted December 4th, 2024',
        tags: ['Advent of Code', 'C++'],
      }}
    >
      <p className="mb-4">
        With Day 2, we can see that the problems are starting to get a little more challenging. Not significantly so but I can tell that it&apos;s going to get harder.
      </p>

      <h2 className="text-2xl font-bold mt-8"># Part 1</h2>
      <p className='mb-4'>
        The sample input we&apos;re given is as follows:
      </p>
      
      <CodeBlock code={example_input} language="plaintext" height="h-50" />

      <p className='mb-4'>
        Each row is a &ldquo;report&rdquo; containing some X number of integers. For the first part, we have to confirm whether or not each report adheres to the following set of conditions:
      </p>
      <ul className='list-disc list-outside ml-5 mb-4'>
        <li>From left to right, the integers are either strictly increasing or strictly decreasing.</li>
        <li>The magnitude of the change between two adjacent numbers is at most three (strictly changing implies a minimum of one, since zeros would mean the set is now monotonic).</li>
      </ul>
      <p className='mb-4'>
        It is based on these requirements that the problem boils down to the following set of steps:
      </p>
      <ol className='list-decimal list-outside ml-5 mb-4'>
        <li>Read in the file (arguably the biggest part).</li>
        <li>Parse each report and check if it meets the conditions.</li>
        <li>Count the number of reports that meet the conditions.</li>
      </ol>

      <p className='mb-4'>
        Based on these steps, I implemented the following C++ solution (this time opting to use ranges the first time around):
      </p>

      <CodeBlock code={snippet_1} language="cpp" height="h-80" />

      <h2 className="text-2xl font-bold mt-8"># Part 2</h2>
      <p className='mb-4'>
        The second part of the problem now asks us to include reports that could be turned &ldquo;safe&rdquo; by removing a single integer from the report. Since these input sizes are not monstrously big, we can brute force this by permuting the reports and checking if they meet the conditions. It&apos;s admittedly not the most efficient solution but it works.
      </p>
      
      <CodeBlock code={snippet_2} language="cpp" height="h-80" />

      <p className='mb-4'>
        Again, not terribly hard problems but they&apos;re definitely starting to ramp up a bit&mdash;whereas the first day was just a simple "read an array in and sort them" kind of problem, this one requires a little more thought into the algorithm used, but still not too bad.
      </p>
    </Writing>
  );
};

export default AoC2024Day1;
