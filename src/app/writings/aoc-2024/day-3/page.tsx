import { Metadata } from 'next';
import AnimatedLink from '@/components/AnimatedLink';
import CodeBlock from '@/components/CodeBlock';

import Writing from '@/components/Writing';
import { example_input, regex_exp, snippet_1, snippet_2 } from './snippets';

export const metadata: Metadata = {
  title: 'Advent of Code 2024 - Day 3',
  description: "Marco Tan's Advent of Code 2024 Day 3 solution.",
  keywords: ['Advent of Code', 'Advent of Code 2024', 'C++'],
  alternates: {
    canonical: 'https://ionicargon.ca/writings/aoc-2024/day-3',
  },
};

const AoC2024Day3 = () => {
  return (
    <Writing
      writingMetadata={{
        title: 'Advent of Code 2024 - Day 3',
        shortDescription: 'Mull It Over',
        date: 'December 19th, 2024',
        tags: ['Advent of Code', 'C++'],
      }}
    >
      <p className="mb-4">
        This one is also not so bad, though that&apos;s probably because I
        somewhat know how to use regexes. I&apos;m quite certain that this
        problem could be solved without regexes, but it&apos;s probably a lot
        more work for sure.
      </p>

      <h2 className="text-2xl font-bold mt-8"># Part 1</h2>
      <p className="mb-4">
        Here&apos;s the sample input that we&apos;re provided with:
      </p>

      <CodeBlock code={example_input} language="plaintext" height="h-18" />

      <p className="mb-4">
        Within this input are valid multiplication instructions in the form of
        &ldquo;mul(X,Y)&rdquo;, where X and Y are 1-3 digit integers. We
        basically want to find all of these valid operations and compute the sum
        of products, ignoring any invalid operations. This is actually quite
        trivial to do with regexes. The following regex pattern will match such
        operations:
      </p>

      <CodeBlock code={regex_exp} language="plaintext" height="h-18" />

      <p className="mb-4">
        From there, it&apos;s as simple as using a regex iterator to find all
        matches and summing up the products. Here&apos;s the C++ code that
        accomplishes this:
      </p>

      <CodeBlock code={snippet_1} language="cpp" height="h-80" />

      <h2 className="text-2xl font-bold mt-8"># Part 2</h2>
      <p className="mb-4">
        This part is slightly more involved as there are now some new operations
        that also have to be accounted for:
      </p>
      <ul className="list-disc list-outside ml-5 mb-4">
        <li>
          do() &mdash; this enables future multiplication instructions past this
          instruction.
        </li>
        <li>
          don&apos;t() &mdash; this disables future multiplication instructions
          past this instruction.
        </li>
      </ul>

      <p className="mb-4">
        Again, this is not terribly difficult if regexes are used. We simply
        just expand our previous regex to include the other operations as
        alternative matches. We then use a regex iterator to go through the
        matches in sequential order, keeping track of when we should or
        shouldn&apos;t be multiplying, and we compute the sum of products.
        Here&apos;s the C++ code that accomplishes this:
      </p>

      <CodeBlock code={snippet_2} language="cpp" height="h-80" />

      <p className="mb-4">
        And that&apos;s basically it. It was a little trivial for me since I
        just used a regex to solve all my problems, but I do wonder what a
        non-regex-based solution might&apos;ve looked like.
      </p>
    </Writing>
  );
};

export default AoC2024Day3;
