import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | IonicArgon',
  description: "Marco Tan's personal website",
};

const Projects = () => {
  return (
    <main>
      <div
        id="title"
        className="flex justify-center items-center text-7xl text-cream"
      >
        <div className="font-light">projects</div>
      </div>
    </main>
  );
};

export default Projects;
