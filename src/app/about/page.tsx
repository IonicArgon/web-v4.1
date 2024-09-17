import { Metadata } from 'next';

import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'About',
  description: 'A little bit more about Marco Tan.',
};

const About = () => {
  return (
    <main>
      <div id="about" className="text-cream font-mono">
        <h1 className="text-4xl font-bold">About</h1>
        <span className="font-bold text-xl">Last Updated: 2024-09-16</span>
        <p className="mt-4">
          Just some more information about me, links, and other miscellaneous
          things.
        </p>
        <h2 className="text-2xl font-bold mt-8">## Links</h2>
        <p className="mt-4">
          <b>Note:</b> Yes, I do have social media accounts. Yes, they&apos;re
          out on the internet. No, I won&apos;t follow you because I don&apos;t
          know you.
        </p>
        <div id="links" className="mt-4">
          <span className="mt-4 font-bold">GitHub:</span>{' '}
          <AnimatedLink href="https://github.com/IonicArgon">
            IonicArgon
          </AnimatedLink>
          <br />
          <span className="mt-4 font-bold">LinkedIn:</span>{' '}
          <AnimatedLink href="https://www.linkedin.com/in/marcotan04/">
            marcotan04
          </AnimatedLink>
        </div>
        <h2 className="text-2xl font-bold mt-8">## Resume</h2>
        <span className="mt-4 font-bold">Download:</span>{' '}
        <AnimatedLink href="/resume.pdf">resume.pdf</AnimatedLink>{' '}
        <span className="text-sm text-mountbatten-pink">
          (last updated 2024-09-16)
        </span>
        <h2 className="text-2xl font-bold mt-8">## Software</h2>
        <p className="mt-4">
          Here are some of the tools I use for development and other tasks.
        </p>
        <div id="software" className="mt-4">
          <span className="mt-4 font-bold">Operating System:</span>{' '}
          <AnimatedLink href="https://wiki.archlinux.org/title/Arch_Linux">
            Arch Linux
          </AnimatedLink>
          <br />
          <span className="mt-4 font-bold">Desktop Environment:</span>{' '}
          <AnimatedLink href="https://kde.org/">KDE Plasma</AnimatedLink>
          <br />
          <span className="mt-4 font-bold">Browser:</span>{' '}
          <AnimatedLink href="https://brave.com/">Brave</AnimatedLink>
          <br />
          <span className="mt-4 font-bold">Editors:</span>{' '}
          <AnimatedLink href="https://code.visualstudio.com/">
            Visual Studio Code
          </AnimatedLink>{' '}
          primarily, with{' '}
          <AnimatedLink href="https://neovim.io/">Neovim</AnimatedLink> for
          terminal editing (though I&apos;ve been trying to learn Vim for a
          while now).
          <br />
          <span className="mt-4 font-bold">Shell + Terminal:</span>{' '}
          <AnimatedLink href="https://www.zsh.org/">zsh</AnimatedLink> with{' '}
          <AnimatedLink href="https://sw.kovidgoyal.net/kitty/">
            kitty
          </AnimatedLink>
        </div>
        <h2 className="text-2xl font-bold mt-8">## Daily Drivers</h2>
        <h3 className="text-xl font-bold mt-4">### ia-workstation</h3>
        <p className="mt-4">
          My main desktop. It&apos;s just a decent pre-built from{' '}
          <AnimatedLink href="https://www.memoryexpress.com/">
            Memory Express
          </AnimatedLink>{' '}
          with a few upgrades. I would have built my own, but I didn&apos;t have
          the time.
        </p>
        <div id="ia-workstation" className="mt-4">
          <span className="mt-4 font-bold">Processor:</span> AMD Ryzen 7 5700X
          (8 cores, 16 threads)
          <br />
          <span className="mt-4 font-bold">GPU:</span> NVIDIA GeForce RTX 4070
          SUPER
          <br />
          <span className="mt-4 font-bold">RAM:</span> 32GB DDR4-3200
          <br />
          <span className="mt-4 font-bold">Storage:</span> 1TB NVMe SSD, 1TB
          SATA SSD
          <br />
        </div>
        <h3 className="text-xl font-bold mt-8">### ia-nomad</h3>
        <p className="mt-4">
          My laptop. It works, and that&apos;s all I need it to do.
        </p>
        <p className="mt-2 text-sm text-mountbatten-pink">
          (side note, never buy this laptop, I hate Dell so much, the fans fail
          so quickly and it overheats if you don&apos;t repaste it often and
          undervolt it, and it was so expensive at the time)
        </p>
        <div id="ia-nomad" className="mt-4">
          <span className="mt-4 font-bold">Model:</span> Dell G3 15 3579 (2018)
          <br />
          <span className="mt-4 font-bold">Processor:</span> Intel Core i7-8750H
          (6 cores, 12 threads)
          <br />
          <span className="mt-4 font-bold">GPU:</span> NVIDIA GeForce GTX 1050
          Ti
          <br />
          <span className="mt-4 font-bold">RAM:</span> 32GB DDR4-3200 (but the
          motherboard caps it at 2666MHz 😂😂😂)
          <br />
          <span className="mt-4 font-bold">Storage:</span> 512GB NVMe SSD, 256GB
          SATA SSD
        </div>
      </div>
    </main>
  );
};

export default About;
