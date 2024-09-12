import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'rPassMan',
  description: "Marco Tan's post about the password manager in Rust he made.",
  keywords: ['Rust', 'Password manager', 'Project'],
};

const rPassMan = () => {
  return (
    <Project
      projectMetadata={{
        title: 'rPassMan',
        shortDescription: 'A CLI-based password manager written in Rust.',
        titleImage: '/projects/rpassman/rpm-fig1.png',
        focus: ['Software Development', 'Security'],
        stack: ['Rust'],
        features: [
          'Encryption with argon2',
          'Easy-to-use interactive CLI',
          'Shielding of in-memory data.',
        ],
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/IonicArgon/rust-PasswordManager',
          },
        ],
      }}
    >
      <p className="mb-4">
        This was my first attempt at creating an actual project with Rust. It&apos;s a simple password manager that allows you to perform CRUD operations on an arbitrary number of entries with an arbitrary number of fields. Passwords are encrypted with argon2 and the encryption key is derived from the master password with a different salt. I attempted to shield data stored in memory, as well.
      </p>
    </Project>
  );
};

export default rPassMan;
