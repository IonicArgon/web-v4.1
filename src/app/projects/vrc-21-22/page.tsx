import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'VRC Season - Tipping Point | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectVRC22 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'VRC Season - Tipping Point',
        shortDescription:
          'Competition code for the 2021 - 2022 VRC season, "Tipping Point".',
        titleImage: '/projects/vrc-21-22/vrc22-fig1.jpg',
        focus: ['Software Development', 'Robotics', 'Control Theory', 'CADing'],
        stack: ['C++', 'PROS'],
        features: [
          'Autonomous routine selector with built-in, on-hardware UI',
          'PID control of all robot subsystems',
          'Feedforward control with trapezoidal motion profiling',
        ],
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/Discobots-1104A/2021-2022-branch-sample',
          },
        ],
      }}
    >
      <p className="mb-4">
        This was team 1104A&apos;s robot for part of the 2021 - 2022 VEX
        Robotics Championship (VRC) season. For this robot, I wrote code for
        both automatic and manual control during specific portions of a match.
        The code includes PID capabilities for smooth navigation, with motion
        profiling for feedback- and feedforward-based control, and sensor
        filtering capabilities.
      </p>
      <p className="text-sm text-mountbatten-pink mb-4">
        (yes i&apos;m aware the robot says &quot;1104Z&quot; i&apos;ll get to
        it)
      </p>

      <h2 className="text-2xl font-bold"># Game Information</h2>
      <p className="mb-4">
        Compared to Change Up, this session&apos;s new game,{' '}
        <b>Tipping Point</b> was significantly more involved. In a nutshell, the
        main objective of the game is to score rings on mobile goals. This
        doesn&apos;t sound hard in theory, but the video shows how complicated
        it can get, really quickly.
      </p>
      <div className="mb-4 flex content-center items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H8XcvADUXTE?si=CU-SR8mY9m-Sfi0w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <p className="mb-4">
        As you can see, with components of the game like the rings themselves
        (whose movement is really hard to predict in code, short of simulating
        them), the mobile platforms, and the see-saw, writing code for this game
        would prove much more difficult than the previous one.
      </p>

      <h2 className="text-2xl font-bold"># Code and Features</h2>
      <p className="mb-4">
        Compared to last year&apos;s code, this year&apos;s code was slightly
        similar. I removed a few things and tried adding a few things to
        compensate for our lack of sensors (and it didn&apos;t really make much
        of a difference) but to keep it brief, here&apos;s all the features:
      </p>
      <ul className="list-disc list-outside ml-5 mb-2">
        <li>
          PID control of robot subsystems for controlled and sustained motion.
        </li>
        <li>
          Removed the odometry code from last year; we didn&apos;t have the
          sensors to try them out this year.
        </li>
        <li>
          Added more sensor filters (primarily for experimentation) for the
          smoothing of what sensors we had.
        </li>
        <li>
          Wrote motion profiling code for trapezoidal profile, feedforward
          control. *
        </li>
        <li>
          On-hardware UI selection of options using the V5 Brain touch LCD.
        </li>
      </ul>
      <p className="text-sm text-mountbatten-pink mb-4">
        * This code was mainly experimental and didn&apos;t really see any
        action outside of testing.
      </p>
      <p className="mb-4">
        In all honesty, I can&apos;t fully speak about this robot and the code
        all too much, because we had to donate the robot to another team after
        we figured out that <b>half of our team would be unavailable</b> due to
        IB exams. I see that there are hydraulics built into 1104Z&apos;s final
        robot, so I&apos;m sure they made significant changes to the codebase
        afterwards.
      </p>
      <div className="mb-4 relative w-full max-w-4xl h-[600px]">
        <Image
          src="/projects/vrc-21-22/vrc22-fig2.jpg"
          alt="Robot view 2."
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </Project>
  );
};

export default ProjectVRC22;
