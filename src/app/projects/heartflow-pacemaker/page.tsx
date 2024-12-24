import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';

export const metadata: Metadata = {
  title: 'HeartFlow Pacemaker System',
  description: "Marco Tan's post about the HeartFlow pacemaker system.",
  keywords: [
    'Electron',
    'Biomedical Engineering',
    'iBioMed',
    'Safety Engineering',
    'Python',
    'Simulink',
  ],
  alternates: {
    canonical: 'https://www.ionicargon.ca/projects/heartflow-pacemaker',
  },
};

const HeartFlowPacemaker = () => {
  return (
    <Project
      projectMetadata={{
        title: 'HeartFlow Pacemaker System',
        shortDescription:
          'Pacemaker firmware designed in Simulink. Programmer built with Electron. Application of safety-critical engineering principles.',
        titleImage: '/projects/heartflow-pacemaker/hf-fig1.png',
        focus: ['Biomedical Engineering', 'Safety Engineering'],
        stack: ['Electron', 'React', 'Simulink', 'Python'],
        features: [
          'Programming of pacemakers with a variety of operating modes and conditions',
          'Intuitive user interface for programming pacemakers',
          'Robust UART serial communication protocol for safe and reliable programming',
          'Safety-critical engineering principles applied throughout the project',
        ],
        duration: '3 months',
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/andrewderango/HeartFlow',
          },
        ],
      }}
    >
      <p className="mb-4">
        The <b>HeartFlow</b> pacemaker system is a project I worked on with my
        friends in my Mechatronics + iBioMed stream. Our goal was to design
        both:
      </p>
      <ul className="list-disc list-outside ml-5 mb-4">
        <li>
          Pacemaker firmware for a mock pacemaker (an FRDM-K64F microcontroller)
          using Simulink.
        </li>
        <li>
          A &ldquo;device controller-monitor&rdquo; (DCM) application for
          programming the pacemaker. The stack we opted for was Electron, React,
          and Python.
        </li>
      </ul>

      <p className="mb-4">
        Admittedly, I&apos;m still thinking of what thoughts I want to write
        here because{' '}
        <b>
          this has been the biggest project I&apos;ve worked on since I&apos;ve
          started proramming
        </b>{' '}
        (which is saying a lot since I started programming on Roblox when I was
        like, 11). I&apos;ll update this post soon with more details. In the
        meantime, Andrew&apos;s GitHub repo has a decent chunk of documentation,
        as well as some tidbits about the project&mdash;check it out!
      </p>
    </Project>
  );
};

export default HeartFlowPacemaker;
