import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writings',
  description: "Some of Marco Tan's personal writings.",
};

const Writings = async () => {
  const catResponse = await fetch(
    'https://api.thecatapi.com/v1/images/search',
    {
      cache: 'no-store',
    }
  );
  const catData = await catResponse.json();
  const catUrl = await catData[0].url;

  return (
    <main>
      <div id="projects" className="text-cream font-mono">
        <h1 className="text-4xl font-bold">Writings</h1>
        <p className="mb-4">
          This is hopefully where I&apos;ll put some of my writings.
          Unfortunately, I don&apos;t have too many to share here, so have a cat
          image instead:
        </p>
        <div className="flex justify-center items-center mt-4">
          <Image src={catUrl} alt="A cat" width={400} height={400} />
        </div>
      </div>
    </main>
  );
};

export default Writings;
