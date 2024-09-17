import Image from 'next/image';
import Link from 'next/link';

import MOTD from '@/components/MOTD';
import AnimatedLink from '@/components/AnimatedLink';

const Home = () => {
  return (
    <main>
      <div
        id="title"
        className="flex justify-center items-center text-7xl text-cream"
      >
        <div className="font-light">Marco</div>
        <div className="font-bold">Tan</div>
      </div>

      <nav className="flex justify-center items-center space-x-4 mt-2">
        <AnimatedLink href="/about">about</AnimatedLink>
        <AnimatedLink href="/projects">projects</AnimatedLink>
        <AnimatedLink href="/writings">writings</AnimatedLink>
      </nav>

      <MOTD />

      <div id="intro" className="text-cream font-mono mt-8">
        <h1 className="text-4xl font-bold"># Hi!</h1>
        <p className="mt-4">
          I&apos;m Marco (he/they), a third-year{' '}
          <b>Mechatronics and Biomedical Engineering</b> student at McMaster
          University. This is my little corner of the internet where I share my
          thoughts, projects, and experiences. I love everything related to{' '}
          <b>computers</b> 🖥️ and <b>robotics</b> 🤖. I also enjoy{' '}
          <b>singing</b> 🎶 as a baritone in{' '}
          <AnimatedLink href="https://www.instagram.com/mcmasteracappella/">
            McMaster A Cappella
          </AnimatedLink>
          , <b>music</b> 🎵 in general, and just <b>learning</b> 🧠 new things
          every day.
        </p>
        <p className="mt-4">
          I currently work for{' '}
          <AnimatedLink href="https://www.linkedin.com/company/localstudent/">
            LocalStudent, Inc.
          </AnimatedLink>{' '}
          as their <b>Technology Consultant</b>, helping to automate and refine
          their processes with the cloud. I&apos;m also part of{' '}
          <AnimatedLink href="https://www.instagram.com/igemmcmaster/?hl=en">
            McMaster&apos;s iGEM team
          </AnimatedLink>
          , where I work on protein engineering utilising machine learning.
        </p>
        <p className="mt-4">
          Feel free to take a look around, and if you have any questions or just
          want to chat, don&apos;t hesitate to reach out! 📫
        </p>

        <h2 className="text-2xl font-bold mt-8">## Cool Buttons</h2>
        <p className="mt-4">
          Because the old web was a simpler time (gotta love all the cookie
          pop-ups and ads everywhere now 🙃).
        </p>
        <div
          id="88x31-buttons"
          className="flex justify-center items-center mt-4"
        >
          <Image
            src="/buttons/archlinux.gif"
            alt="Arch Linux"
            width={88}
            height={31}
          />
          <Image
            src="/buttons/cananow.gif"
            alt="Canada Now!"
            width={88}
            height={31}
          />
          <a
            href="https://www.homestuck.com/story"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/buttons/e-hs.gif"
              alt="Download Sburb!"
              width={88}
              height={31}
            />
          </a>
          <Image
            src="/buttons/linuxnow2.gif"
            alt="Linux Now!"
            width={88}
            height={31}
            unoptimized
          />
          <Image
            src="/buttons/sucks.gif"
            alt="Linux Now!"
            width={88}
            height={31}
          />
          <Image
            src="/buttons/nocookie.gif"
            alt="Certified cookie free!"
            width={88}
            height={31}
          />
          <Image
            src="/buttons/saul.gif"
            alt="Saul Goodman is sooo cute!"
            width={88}
            height={31}
            unoptimized
          />
        </div>
        <div
          id="88x31-buttons"
          className="flex justify-center items-center mt-4"
        >
          <Image
            src="/buttons/powered-cpp.gif"
            alt="C++"
            width={88}
            height={31}
          />
          <Image
            src="/buttons/rainbow_bev.gif"
            alt="Pride Flag"
            width={88}
            height={31}
          />
          <Image
            src="/buttons/transnow2.gif"
            alt="Trans Rights!"
            width={88}
            height={31}
          />
          <Image
            src="/buttons/norton2.gif"
            alt="protection."
            width={88}
            height={31}
          />
          <Image
            src="/buttons/paywalls.gif"
            alt="Paywalls gatekeep knowledge."
            width={88}
            height={31}
            unoptimized
          />
          <a
            href="https://www.youtube.com/watch?v=o-YBDTqX_ZU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/buttons/no.gif" alt="silly." width={88} height={31} />
          </a>
          <Image
            src="/buttons/timetravel.png"
            alt="Ban time travel now!"
            width={88}
            height={31}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
