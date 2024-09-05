import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';

export const metadata: Metadata = {
  title: 'Custom Hip Implant Design | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectDP2 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Custom Hip Implant Design',
        shortDescription:
          'Designing a custom hip implant for a patient with a unique hip anatomy.',
        titleImage: '/projects/dp2/dp2-fig1.png',
        focus: ['Biomedical Engineering', 'Design', 'CADing', '3D Printing'],
        stack: ['Autodesk Inventor', 'PrusaSlicer'],
        features: [
          'Patient-specific design',
          'Customizable dimensions',
          '3D printing',
          'Biocompatible materials',
        ],
        duration: '1 month',
      }}
    >
      <p className="mb-4">
        For this design project, we were tasked with creating a custom hip implant for 
      </p>
    </Project>
  );
};

export default ProjectDP2;
