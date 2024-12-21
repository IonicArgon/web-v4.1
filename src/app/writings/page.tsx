import { Metadata } from 'next';
import { WritingsArray } from '@/app/writings/writings';

import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Writings',
  description: "Some of Marco Tan's personal writings.",
  keywords: ['Writings', 'Blog', 'Personal'],
  alternates: {
    canonical: 'https://ionicargon.ca/writings',
  },
};

const Writings = async () => {
  return (
    <main>
      <div id="writings" className="text-cream font-mono">
        <h1 className="text-4xl font-bold">Writings</h1>
        <p className="mb-4">
          Here are some of my personal writings. Maybe you&apos;ll find some of
          my ramblings interesting.
        </p>
        {WritingsArray.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ).map((writing, index) => (
          <div key={index} className="mt-8">
            <div className="flex text-lg">
              <h2 className="font-light text-mountbatten-pink">
                {writing.date}:
              </h2>
              &nbsp;
              <AnimatedLink href={writing.path}>{writing.title}</AnimatedLink>
            </div>
            <p className="mt-1 text-rose-quartz">{writing.description}</p>
            <div className="mt-1 flex space-x-2">
              {writing.tags.sort().map((tag, index) => (
                <span
                  key={index}
                  className="text-sm flex items-center text-center justify-center text-dark-purple bg-rose-quartz py-1 px-2 rounded-sm leading-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Writings;
