import { Metadata } from 'next';
import Image from 'next/image';
import AnimatedLink from '@/components/AnimatedLink';

import Writing from '@/components/Writing';

export const metadata: Metadata = {
  title: 'Self-Hosting an ATProto PDS w/ GCP and Twilio',
  description:
    'Small write-up on how I self-hosted my own ATProto PDS using Google Cloud Platform and Twilio.',
  keywords: ['ATProto', 'Bluesky'],
  alternates: {
    canonical: 'https://www.ionicargon.ca/writings/self-host-atproto',
  },
};

const SelfHostATProto = () => {
  return (
    <Writing
      writingMetadata={{
        title: 'Self-Hosting an ATProto PDS w/ GCP and Twilio',
        shortDescription:
          'Write-up on how I self-hosted my own ATProto PDS using Google Cloud Platform and Twilio.',
        titleImage: '/writings/self-host-atproto/title.png',
        date: 'January 4th, 2025',
        tags: ['ATProto', 'Bluesky'],
      }}
    >
      <p className="mb-4">
        This is a write-up on how I got my own ATProto personal data server
        (PDS) up and running using Google Cloud Platform (GCP) and Twilio&apos;s
        SendGrid. I&apos;ve been meaning to get this set up for a while now (not
        that it&apos;s a requirement to use Bluesky, but if I have the option,
        why not?) and I finally got around to it. I don&apos;t really know who
        else might want this information, but I figured it wouldn&apos;t hurt to
        write it down in case someone else finds it useful.
      </p>

      <h2 className="text-2xl font-bold mt-8">
        # But what is the AT Protocol?
      </h2>
      <p className="mb-4">
        The AT Protocol is an{' '}
        <AnimatedLink href="https://github.com/bluesky-social/atproto">
          open-sourced
        </AnimatedLink>
        , decentralized, social networking protocol developed by the Bluesky
        team (formerly a team at Twitter). That sounds like a jumble of words,
        but let me break it down a bit.
      </p>

      <ul className="list-disc list-outside ml-5 mb-4">
        <li>
          <strong>Open-sourced</strong>: The code is available for anyone to
          view and contribute to. Personally, I believe this is a great thing,
          because transparency is key for the next point, which is...
        </li>
        <li>
          <strong>Decentralizion</strong>: Whereas most social networks like
          Facebook and Instagram are centralized (i.e. all the data is stored on
          servers owned by said companies), the AT Protocol is designed such
          that anyone can run their own server. You can have your own PDS that
          you control or use a service that you trust to host it for you.
          Furthermore, because the data storage is decoupled from a specific
          platform, it means all data is available regardless of the platform
          you use. Think of it like how email works; you might use Gmail, but
          you can stil email someone and receive emails from someone using Yahoo
          Mail or Outlook.
        </li>
        <li>
          <strong>Social networking protocol</strong>: I mean, it&apos;s in the
          name. The AT Protocol is not a social network in and of itself, but
          rather a framework for building social networks. There might be
          Bluesky now, but there could exist other platforms that use the AT
          Protocol in the future.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8"># But how does it even work?</h2>
      <Image
        src="/writings/self-host-atproto/fig1.png"
        alt="ATProto Architecture"
        width={1000}
        height={500}
        className="rounded-md"
      />
      <p className="text-sm text-mountbatten-pink mb-4 mt-4 text-center">
        Diagram of the AT Protocol from their{' '}
        <AnimatedLink href="https://arxiv.org/abs/2402.03239">
          whitepaper
        </AnimatedLink>
        .
      </p>
      <p className="mb-4">
        In a nutshell, PDS data is aggregated via &ldquo;relays&rdquo;. These
        relays produce &ldquo;firehoses&rdquo; of data that are then consumed by
        feed generators, which skim the data and produces feeds, or through
        labelers, which label the data for consumption by some other
        application. You can actually see one of these firehoses yourself by
        visiting{' '}
        <AnimatedLink href="https://firesky.tv/">firesky.tv</AnimatedLink>,
        which is basically just a website with a websocket connection to the
        Bluesky firehose, but with a UI.
      </p>
      <p className="mb-4">
        This means that everyone can have their own PDS or use a trusted service
        to host data for them, and regardless of the platform, you can still
        interact with others on the AT Proto network. Personally, I feel like
        this is the future of social networking and I&apos;m excited to see
        where it goes.
      </p>

      <h2 className="text-2xl font-bold mt-8">
        # Why would I want to setup my own PDS?
      </h2>
      <p className="mb-4">
        There&apos;s a few reasons why you might want to setup your own PDS:
      </p>
      <ul className="list-disc list-outside ml-5 mb-4">
        <li>
          <strong>Ownership</strong>: by hosting your own PDS, you effectively
          own your own data, which is seldom a luxury you get today with most
          social networks. You can control who has access to your data and how
          it&apos;s used, as well as how long it&apos;s stored for and when
          it&apos;s deleted. This is also probably the biggest criticism I have
          against most social networks today.
        </li>
        <li>
          <strong>Privacy</strong>: because you own your own data, you can be
          confident that it&apos;s probably not being sold to advertisers or
          being used to train a certain mixture-of-experts, large language model
          that is definitely not named Grok.
        </li>
        <li>
          <strong>Interoperability</strong>: because the AT Protocol is
          decentralized, you can interact with anyone on the network regardless
          of the platform they use. This means you can use a platform that you
          like, but still interact with friends who use a different platform. A
          bit weaker of a point since you get the same thing by just using the
          Bluesky platform, but it&apos;s still a point.
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8">
        ## A sidebar about data privacy and ownership
      </h3>
      <p className="mb-4">
        I know not everyone is concerned with data privacy and ownership but I
        think it&apos;s important to at least be aware of the implications.
        It&apos;s a slippery slope when you start giving up your data and
        privacy for convenience and I think it&apos;s at minimum worth
        considering what you&apos;re giving up when you use sonme service.
        I&apos;m not saying you need to become a luddite and live in the forest
        for the rest of your life, but it&apos;s something worth thinking about,
        especially in today&apos;s world where data is being scraped constantly
        and used in ways you might not be comfortable with.
      </p>

      <p className="mb-4">
        And before you say something like &ldquo;I have nothing to hide&rdquo;
        or &ldquo;then why do you still use XYZ?&rdquo;, the point is not that
        you have something to hide, but rather that you have the right to
        privacy. The best way I could think about it is like this: would you let
        some random police officer sit in your house all day and watch you, even
        while you&apos;re on the john? Probably not. Even if you haven&apos;t
        done anything wrong, it&apos;s still intrusive and I&apos;m sure no one
        would be remotely comfortable with Constable John Smith watching them
        take a dump. The same goes for your data; you might not have anything to
        hide, but it&apos;s still your data and you should have the right to
        control who has access to it. Yes, I still use Google and Instagram and
        all those other platforms but that doesn&apos;t mean I can&apos;t be
        critical of their use of people&apos;s data and frankly if you subscribe
        to that kind of ideology, please leave.
      </p>

      <h2 className="text-2xl font-bold mt-8">
        # Okay enough chit-chat, how do?
      </h2>
      <p className='mb-4'>
        
      </p>
    </Writing>
  );
};

export default SelfHostATProto;
