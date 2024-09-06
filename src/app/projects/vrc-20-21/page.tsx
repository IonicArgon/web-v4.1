import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';
import AnimatedLink from '@/components/AnimatedLink';

export const metadata: Metadata = {
  title: 'VRC Season - Change Up | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectVRC21 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'VRC Season - Change Up',
        shortDescription:
          'Competition code for the 2020 - 2021 VRC season, "Change Up".',
        titleImage: '/projects/vrc-20-21/vrc21-fig1.png',
        focus: ['Software Development', 'Robotics', 'Control Theory', 'CADing'],
        stack: ['C++', 'PROS'],
        features: [
          'PID control of drive and mechanisms',
          'Object and colour recognition-based sorting',
          'Global position tracking with odometry',
        ],
        links: [
          {
            text: 'GitHub (Original)',
            url: 'https://github.com/Discobots-1104A/2020-2021-bionic-beaver',
          },
          {
            text: 'GitHub (Refactored)',
            url: 'https://github.com/IonicArgon/pain-peko',
          },
        ],
      }}
    >
      <p className="mb-4">
        This was team 1104A&apos;s robot for the 2020 - 2021 VEX Robotics
        Championship (VRC) season. For this robot, I wrote code for both
        automatic and manual control during specific portions of a match. The
        code includes PID capabilities for smooth navigation, global position
        tracking with odometry, and object detection and colour recognition for
        game-specific tasks.
      </p>

      <h2 className="text-2xl font-bold"># Game Information</h2>
      <p className="mb-4">
        This season&apos;s game, <b>Change Up</b>, was relatively simple. In a
        nutshell, the goal of the game is to score team-coloured balls into
        goals and to connect rows together to score points. VEX has a great
        video that explains the mechanics of this game, which I will embed
        below.
      </p>
      <div className="mb-4 flex content-center items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hxs0q9UoMDQ?si=jacULCE9wVfAd0i2"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <p className="mb-4">
        This game looked deceptively easy at the time. However, there were many
        challenges I encountered throughout that season. I&apos;ll shed some
        light on some of those, as well as some of the things I thought were
        pretty cool.
      </p>

      <h2 className="text-2xl font-bold"># Code and Features</h2>
      <p className="mb-4">
        Compared to last year&apos;s code, this year&apos;s code was a lot less
        jank and a lot more organized and robust. To keep things brief, here are
        the changes I made to the code this year based on the lessons from the
        season before:
      </p>
      <ul className="list-disc list-outside ml-5 mb-2">
        <li>
          Encapsulated and abstracted components of the robot into classes where
          it made sense.
        </li>
        <li>Documented code with easy-to-digest comments.</li>
        <li>
          Implemented PID control for movements and actions instead of using
          bang-bang control.
        </li>
        <li>
          Wrote odometry code that tracks the global position of the robot.*
        </li>
        <li>
          Utilised the VEX Vision sensor for colour and object-based detection
          and sorting of balls.
        </li>
      </ul>
      <p className="text-sm text-mountbatten-pink mb-4">
        * There were some problems with this code, but I will explain this
        later.
      </p>
      <p className="mb-4">
        We were even proud enough of the code that we tried to submit it to one
        of the additional challenges teams can apply to. Unfortunately, we
        didn&apos;t win anything from it, but nevertheless we were still pretty
        happy with the result. Below is our video submission to the challenge:
      </p>
      <div className="mb-4 flex content-center items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OS1HnUw7RkU?si=ChL4oYf5Y4jMuX7E"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <p className="mb-4">
        Of course, no code is perfect. This code was certainly not without
        it&apos;s faults. However, given how <em>questionable</em> last
        year&apos;s codebase was, I&apos;d say that this season was a decent
        success; I finished the season feeling happy with the work that
        I&apos;ve done and that trumps any sort of medal or award someone could
        get.
      </p>

      <h2 className="text-2xl font-bold"># Reliability of Hardware</h2>
      <p className="mb-4">
        As cool as the code was, the hardware was pretty awesome, too! Granted,
        I think the improved build quality of the robot was owed to us designing
        it with CAD first instead of trying to hobble aluminum bars and screws
        together, but it&apos;s still nothing to scoff at.
      </p>
      <div className="mb-4 relative w-full max-w-4xl h-[600px]">
        <Image
          src="/projects/vrc-20-21/vrc21-fig2.png"
          alt="Second iteration of the robot being constructed."
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="mb-4">
        That being said, although the quality of our build might&apos;ve
        improved, we couldn&apos;t say the same about the quality of the
        components and parts we sourced. In fact, the condition of the hardware{' '}
        <em>degraded</em> the reliability of our code, much to my dismay. Here
        are some of the issues we encountered with the parts we had to work
        with:
      </p>
      <ul className="list-disc list-outside ml-5 mb-2">
        <li>
          Allegedly, the PCB of the main controller, the{' '}
          <AnimatedLink href="https://www.vexrobotics.com/276-4810.html">
            VEX V5 Brain
          </AnimatedLink>
          , was <em>ungrounded.</em> We&apos;ve had one of these Brains die on
          us before. The ports where electronics are plugged in didn&apos;t fair
          any better, either, as some of them shorted due to static electricity
          picked up from the foam mats of the game arena.
        </li>
        <li>
          Our PID controllers didn&apos;t work as well as we wanted them to,
          only because the motors actually have their own <em>internal</em> PID
          controllers that cannot be disabled. You can somewhat bypass this by
          controlling the motors with voltage commands instead, but this leads
          into the next issue...
        </li>
        <li>
          The temperature sensors in the motors sat on the PCB instead of on the
          motor casing. By the time the temperatures were high enough to be
          registered by the sensor, the motor itself was already way too hot and
          the motor will automatically attempt to compensate by throttling the
          voltage supplied.{' '}
          <em>
            We resorted to strapping frozen ketchup packets on the motors in an
            attempt to cool them down, which was a little silly. 🫠
          </em>
        </li>
        <li>
          The sensor we used for colour recognition, the old{' '}
          <AnimatedLink href="https://kb.vex.com/hc/en-us/articles/4401967256596-Overview-of-the-VEX-V5-Sensors">
            V5 Vision
          </AnimatedLink>{' '}
          sensor, does not work unless the arena is brightly lit. During
          testing, the sorting code works well and the robot kicks out
          opposite-coloured balls well. However, in an arena where the hosts add
          dramatic lighting to hype up the crowd, the system was effectively
          dead and there was nothing we could do about it.{' '}
          <em>We found that out the hard way, unfortunately.</em>
        </li>
        <li>
          The encoders we used for position tracking had poor manufacturing
          tolerances. This made our odometry code really inaccurate, even with
          extra filtering added on top. The inaccuracy was further compounded
          because our original robot design meant that the center point the
          robot turned on was not in the exact center.
        </li>
      </ul>
      <p className="mb-4">
        The main takeaway from all these issues was that{' '}
        <b>your code is only as reliable as the hardware that runs it</b>. In
        these kinds of situations where code interfaces with physical hardware,
        ensuring the quality and reliability of both parts is <b>essential</b>.
        Obviously, in this case, things were kind of out of our control, but
        it&apos;s still a good lesson to remember for when I design my own
        electromechanical devices.
      </p>

      <h2 className="text-2xl font-bold"># The Importance of Sensors</h2>
      <p className="mb-4">
        In the next iteration of the robot, we ended up stripping a lot of the
        sensors. For manual control, this isn&apos;t the worst thing in the
        world. However, when it came to autonomous control, the robot was more
        or less completely blind. I tried my best to make do with the internal
        encoders in the motors themselves, but those encoders measured the
        rotation of the motors themselves and not whatever part it was moving.
      </p>
      <div className="mb-4 relative w-full max-w-4xl h-[600px]">
        <Image
          src="/projects/vrc-20-21/vrc21-fig3.jpg"
          alt="Second iteration of the robot being constructed."
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="mb-4">
        I&apos;ll be honest, this is what annoyed me the most during the season.
        A robot without sensors might as well just be a lump of metal. It&apos;s
        almost impossible to control the robot accurately during autonomous
        portions of the competition and the performance of any routines I wrote
        was pretty much based on random chance.{' '}
        <b>
          Sensors serve as a robot&apos;s only connection with the physical
          world
        </b>{' '}
        and without any of them, regardless of how good the code might be, the
        system will be extremely limited in capabilities.
      </p>

      <h2 className="text-2xl font-bold"># Final Takeaways</h2>
      <p className="mb-4">
        Despite the challenges involved with this year&apos;s game, this was
        still one of my most favourite experiences I&apos;ve had; I can more or
        less guarantee that this was the genesis for my love of robotics.
      </p>
    </Project>
  );
};

export default ProjectVRC21;
