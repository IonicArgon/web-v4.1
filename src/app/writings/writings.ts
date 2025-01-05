import type { Writings } from '@/types/WritingTypes';

const WritingsArray: Writings[] = [
  {
    date: '2024-12-19',
    title: 'Advent of Code 2024 Index',
    description: "First time trying out Advent of Code. Let's see how it goes!",
    tags: ['Advent of Code', 'C++'],
    path: '/writings/aoc-2024',
  },
  {
    date: '2025-01-04',
    title: 'Self-Hosting an ATProto PDS w/ GCP and Twilio',
    description:
      'Write-up on how I self-hosted my own ATProto PDS using Google Cloud Platform and Twilio.',
    tags: ['ATProto', 'Bluesky'],
    path: '/writings/self-host-atproto',
  },
];

export { WritingsArray };
