import { Metadata } from 'next';
import { ProjectsArray } from '@/app/projects/projects';

import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Some of Marco Tan's projects.",
};

const Projects = () => {
  return (
    <main>
      <div id="projects" className="text-cream font-mono">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mb-4">
          Here are some of the projects I&apos;ve made (at least, the ones that
          I think are cool).
        </p>
        {ProjectsArray.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ).map((project, index) => (
          <div key={index} className="mt-8">
            <div className="flex text-lg">
              <h2 className="font-light text-mountbatten-pink">
                {project.date}:
              </h2>
              &nbsp;
              <AnimatedLink href={project.path}>{project.title}</AnimatedLink>
            </div>
            <p className="mt-1 text-rose-quartz">{project.description}</p>
            <div className="mt-1 flex space-x-2">
              {project.tags.sort().map((tag, index) => (
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

export default Projects;
