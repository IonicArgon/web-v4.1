import { Metadata } from 'next';
import AnimatedLink from '@/components/AnimatedLink';
import CodeBlock from '@/components/CodeBlock';

import Writing from '@/components/Writing';

export const metadata: Metadata = {
  title: 'Advent of Code 2024 - Day 3',
  description: "Marco Tan's Advent of Code 2024 Day 3 solution.",
  keywords: ['Advent of Code', 'Advent of Code 2024', 'C++'],
  alternates: {
    canonical: 'https://ionicargon.ca/writings/aoc-2024/day-3',
  },
};

const AoC2024Day1 = () => {
  return (
    <Writing
      writingMetadata={{
        title: 'Advent of Code 2024 - Day 3',
        shortDescription: 'test',
        date: 'December 19th, 2024',
        tags: ['Advent of Code', 'C++'],
      }}
    >
      <p className="mb-4">test</p>
    </Writing>
  );
};

export default AoC2024Day1;
