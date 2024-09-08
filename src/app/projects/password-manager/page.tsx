import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'rPassMan | IonicArgon',
  description: "Marco Tan's personal website",
}

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'rPassMan',
        shortDescription: 'A CLI-based password manager written in Rust.',
        focus: ['Software Development', 'Security'],
        stack: ['Rust'],
        features: ['Encryption with argon2', 'Easy-to-use interactive CLI', 'Shielding of in-memory data.'],
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/IonicArgon/rust-PasswordManager'
          }
        ]
      }}
    >
      <p className='mb-4'>
        test,
      </p>
    </Project>
  );
}

export default ProjectVRC22;
