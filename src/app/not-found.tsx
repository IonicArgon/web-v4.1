import Image from 'next/image';

const NotFound = async () => {
  const catResponse = await fetch(
    'https://api.thecatapi.com/v1/images/search',
    {
      cache: 'no-store',
    }
  );
  const catData = await catResponse.json();
  const catUrl = catData[0].url;

  return (
    <main>
      <div
        id="title"
        className="flex justify-center items-center space-x-5 text-7xl text-cream"
      >
        <div className="font-light">404</div>
        <div className="font-bold">Not Found</div>
      </div>

      <div id="intro" className="text-cream font-mono mt-8">
        <h1 className="text-4xl font-bold"># oops</h1>
        <p className="mt-4">
          You&apos;ve stumbled upon a page that I haven&apos;t created yet. Have
          a cat instead.
        </p>
        <div className="flex justify-center items-center mt-4">
          <Image src={catUrl} alt="A cat" width={400} height={400} />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
