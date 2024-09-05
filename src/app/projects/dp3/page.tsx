import Image from 'next/image';
import { Metadata } from 'next';

import Project from '@/components/Project';

export const metadata: Metadata = {
  title: 'Power Wheelchair Control System | IonicArgon',
  description: "Marco Tan's personal website",
};

const ProjectDP3 = () => {
  return (
    <Project
      projectMetadata={{
        title: 'BeeAble - Power Wheelchair Control System',
        shortDescription:
          'Gesture-based control system for power wheelchair users with partial paralysis.',
        titleImage: '/projects/dp3/dp3-fig1.png',
        focus: ['Software Development', 'Accessibility'],
        stack: ['Python', 'Raspberry Pi'],
        features: [
          'Sensor filtering and smoothing',
          'PID control',
          'Accessible usage and control',
          'Stepper motor control',
          'Gesture recognition',
        ],
        duration: '2 months',
        links: [
          {
            text: 'GitHub',
            url: 'https://github.com/IonicArgon/ibehs-dp3-program',
          },
        ],
      }}
    >
      <p className="mb-4">
        The <b>BeeAble</b> is a gesture-based control system designed to
        interoperate with existing power wheelchair hardware. For the project, I
        created reusable software modules for sensor filtering and smoothing,
        PID control of stepper motors, driver code for the stepper motors, and
        gesture recognition with a 3-axis accelerometer.
      </p>

      <h2 className="text-2xl font-bold"># Problem Definition</h2>
      <p className="mb-4">
        For this design project, we were tasked with creating any Raspberry
        Pi-powered device that fuses sensors and actuators to create some useful
        system. Besides that, target demographics and the problem definitoon
        were completely open-ended. Naturally, this allows for a heavy degree of
        freedom (which was the main thing I loved about this project), but it
        does mean my team and I had to spend a lot of time brainstorming and
        researching to find a project that we were all passionate about.
      </p>
      <div className="mb-4 relative w-full max-w-4xl h-[600px]">
        <Image
          src="/projects/dp3/dp3-fig2.png"
          alt="BeeAble"
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="mb-4">
        After a week or two of brainstorming, we settled on increasing the
        accessbility to mobility. We realized that although there are solutions
        that exist, they are often prohibitively expensive or cannot be used by
        patients in extenuating circumstances. Since our team believed that
        everyone should have the right to move around freely and independently,
        we wanted to create a solution that was affordable, easy to use, and
        adaptable to existing hardware and various use cases.
      </p>

      <h2 className="text-2xl font-bold"># Solution</h2>
      <p className="mb-4">
        We created the <b>BeeAble</b>, a system designed to interoperate with an
        existing joystick control system on a power wheelchair. The system uses
        an accelerometer to detect gestures made by the user, which are then
        translated into commands that move the joystick in the desired
        direction. We also added haptic feedback to provide information about
        the state of the system, choosing it over auditory or visual methods to
        accomodate users with vision, hearing, or cognitive impairments.
      </p>
      <div className="mb-4 relative w-full max-w-4xl h-[400px]">
        <Image
          src="/projects/dp3/dp3-fig3.png"
          alt="BeeAble"
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <h2 className="text-2xl font-bold"># Contributions</h2>
      <h3 className="text-xl font-bold">## Sensor Filtering and Smoothing</h3>
      <p className="mb-4">
        Because the values from the accelerometer can be noisy, I implemented
        software filtering and smoothing of the sensor data. This was achieved
        using an exponential moving average, which emphasizes the weight of the
        most recent data points. We read values with a moving window, smoothed
        them, and used the smoothed values to determine the position of the
        accelerometer and subsequently what gesture the user was making.
      </p>

      <h3 className="text-xl font-bold">## PID Control</h3>
      <p className="mb-4">
        We cannot rely on naive control systems like bang-bang control to move
        the wheelchair, lest we risk jerky and unpredictable movements. Instead,
        I implemented a simple PID control system for stepper motor control. We
        compute the error between the desired position and the current position,
        and we use this to smoothly move the wheelchair in the desired
        direction.
      </p>

      <h3 className="text-xl font-bold">## Stepper Motor Driver Code</h3>
      <p className="mb-4">
        The stepper motors we were using did not come with a library or driver
        code, but they are simple enough that we could write our own. These
        motors do not have encoders, which made it difficult to determine the
        position of the motors at times. Adapting the code to support
        microstepping helped, but I did wish we had better hardware to create a
        more robust solution.
      </p>

      <div className="mb-4 flex content-center items-center justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oMGegGtGb6E?si=6SxQsVDEoJoPMx_x"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <h3 className="text-xl font-bold">## Gesture Recognition</h3>
      <p className="mb-4">
        Honestly, gesture recognition was extremely basic due to hardware
        limitations and the scope of the project itself. We basically slapped
        the accelerometer onto a hat and used movements that were held for a
        certain amount of time to determine the direction of movement. In
        theory, the code could be adapted to recognize complex gestures with
        advanced signal processing or machine learning models. This would allow
        more nuanced control and better adaptability to the user&apos;s needs.
      </p>

      <h2 className="text-2xl font-bold"># Final Takeaways</h2>
      <p className="mb-4">
        Of every design project I&apos;ve done in my first year, this one was by
        far the most interesting and rewarding. The open-ended nature of the
        project allowed me to explore my interests without being constrained by
        a rubric or a set of requirements. I also loved working with the team I
        was assigned to; we all had different strengths and weaknesses, but we
        were able to work together to create something that we were all proud
        of.
      </p>
    </Project>
  );
};

export default ProjectDP3;
