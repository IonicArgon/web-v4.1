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
        title: 'Don Quixote Discord Bot',
        shortDescription: 'silly little creature',
        titleImage: '/projects/don-quixote-discord-bot/don-fig1.png',
        focus: ['Software Development', 'Bots', 'Python', 'API'],
        stack: ['Python 3.12', 'PyCord'],
        features: [
          'Detection of Limbus Company via Discord Rich Presence',
          'Automatic connection to voice channels',
          'Multiple Identity creation with channel webhooks',
        ],
        links: [
          {
            text: 'GitHub (v1)',
            url: 'https://github.com/IonicArgon/don-quixote',
          },
          {
            text: 'GitHub (v2)',
            url: 'https://github.com/IonicArgon/don-quixote-v2',
          },
        ],
      }}
    >
      <p className="mb-4">
        This was a little Discord bot I created for fun (and to annoy friends)
        based off the character Don Quixote from the gacha game Limbus Company.
        Literally all it does is the following:
      </p>
      <ul className="list-disc list-outside ml-5 mb-4">
        <li>
          Hooks into webhooks in a specified Discord channel and creates a lot
          of them for each &quot;Identity&quot; Don Quixote has in the game.
        </li>
        <li>Uses those webhooks to post an embedded message every morning.</li>
        <li>
          Sends an embedded message every time someone starts the game Limbus
          Company (games are detected via Discord Rich Presence). *
        </li>
        <li>
          Joins voice channels and screams &quot;Limbus Company!!!&quot; when
          you start the game while in one.
        </li>
      </ul>
      <p className="text-sm text-mountbatten-pink mb-4">
        * This used to ping people when it sent the message, but it quickly got
        annoying for everyone, myself included, so I removed it.
      </p>
      <p className="mb-4">
        That&apos;s literally all it does. Silly little creature.
      </p>

      <div className="mb-4 flex content-center items-center justify-center">
        <video controls preload="auto">
          <source
            src="/projects/don-quixote-discord-bot/don-vid1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </Project>
  );
};

export default ProjectVRC22;
