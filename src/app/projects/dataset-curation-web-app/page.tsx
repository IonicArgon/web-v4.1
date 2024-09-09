import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'Dataset Curation Web App for Machine Learning | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'Dataset Curation Web App for Machine Learning',
        shortDescription:
          'Web app made for LocalStudent, Inc. for curating dispute model training data.',
        focus: ['Machine Learning', 'Data Analysis', 'Web Development'],
        stack: ['TypeScript', 'Node.js', 'NextJS', 'Firebase'],
        features: [
          'On-the-fly image compression via Cloud Functions.',
          'Easy-to-use interactive web app hosted on Firebase.',
          'Storage of training data on Firestore and Firebase Storage.',
          'Built-in analytics of labeller performance.',
          'Automatic calculation of global dataset statistics.',
        ],
      }}
    >
      <p className="mb-4">test,</p>
    </Project>
  );
};

export default ProjectVRC22;
