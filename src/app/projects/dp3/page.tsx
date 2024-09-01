import { Metadata } from 'next';

import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Design Project 3 | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectDP3 = () => {
  return (
    <main>
      <div id="main-content" className='text-cream font-mono'>
        <h1 className='text-4xl font-bold'>Design Project 3</h1>
        <h2 className='text-lg font-medium text-mountbatten-pink'>Powered Wheelchair Control System</h2>
        
      </div>
    </main>
  );
};

export default ProjectDP3;
