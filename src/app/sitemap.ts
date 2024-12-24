import type { MetadataRoute } from 'next';

const projectPages = [
  'dataset-curation-web-app',
  'don-quixote-discord-bot',
  'dp3',
  'genetic-algorithm',
  'heartflow-pacemaker',
  'linear-systems',
  'password-manager',
  'vrc-20-21',
  'vrc-21-22',
];

const writingPages = [
  'aoc-2024',
  'aoc-2024/day-1',
  'aoc-2024/day-2',
  'aoc-2024/day-3',
  'aoc-2024/day-4',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projectPages.map((page) => ({
    url: `https://www.ionicargon.ca/projects/${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  const writingRoutes = writingPages.map((page) => ({
    url: `https://www.ionicargon.ca/writing/${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: 'https://www.ionicargon.ca',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: 'https://www.ionicargon.ca/projects',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.ionicargon.ca/writing',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...projectRoutes,
    ...writingRoutes,
  ];
}
