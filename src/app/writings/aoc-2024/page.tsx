import { Metadata } from 'next';
import AnimatedLink from '@/components/AnimatedLink';

import Writing from '@/components/Writing';

export const metadata: Metadata = {
  title: 'Advent of Code 2024',
  description: "Marco Tan's Advent of Code 2024 solutions.",
  keywords: ['Advent of Code', 'Advent of Code 2024', 'C++'],
  alternates: {
    canonical: 'https://www.ionicargon.ca/writings/aoc-2024',
  },
};

const IndexAdventOfCode2024 = () => {
  return (
    <Writing
      writingMetadata={{
        title: 'Advent of Code 2024',
        shortDescription:
          'My index of solutions and articles for Advent of Code 2024.',
        titleImage: '/writings/aoc-2024/aoc2024-fig1.png',
        date: 'December 19th, 2024',
        tags: ['Advent of Code', 'C++'],
      }}
    >
      <p className="mb-4">
        Hey look, finally, something for me to write about! I&apos;ve been
        meaning to get this section of my website up and running for a while now
        but I never really found something interesting enough to write about. It
        also just-so-happens that I&apos;ve always been meaning to try out the
        Advent of Code problems. Seems like a perfect way to kill two birds with
        one stone.
      </p>

      <p className="mb-4">
        However, it makes the most sense if I compile all of my solutions and
        articles for this into one place&mdash;wouldn&apos;t want to clog the
        article index with a bunch of AoC solutions. Hence, this index page.
        I&apos;ll be updating this page with links to all of my AoC 2024
        solutions and articles as I complete them.
      </p>

      <h2 className="text-2xl font-bold mt-8"># Solution Writings</h2>
      <ul className="list-disc list-inside mt-2">
        <li>
          <AnimatedLink href="/writings/aoc-2024/day-1">
            Day 1: Historian Hysteria
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/writings/aoc-2024/day-2">
            Day 2: Red-Nosed Reports
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/writings/aoc-2024/day-3">
            Day 3: Mull It Over
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/writings/aoc-2024/day-4">
            Day 4: Ceres Search
          </AnimatedLink>
        </li>
      </ul>
    </Writing>
  );
};

export default IndexAdventOfCode2024;
