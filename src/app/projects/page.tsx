import { Metadata } from 'next';
import { ProjectsArray } from '@/app/projects/projects';

import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Projects | IonicArgon',
  description: "Marco Tan's personal website",
};

const Projects = () => {
  return (
    <main>
      <div id="projects" className="text-cream font-mono">
        <h1 className="text-4xl font-bold">Projects</h1>
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
                  className="text-sm text-dark-purple bg-rose-quartz p-0.5 rounded-sm"
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
