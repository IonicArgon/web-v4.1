import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writings | IonicArgon',
  description: "Marco Tan's personal website",
};

const Writings = () => {
  return (
    <main>
      <div
        id="title"
        className="flex justify-center items-center text-7xl text-cream"
      >
        <div className="font-light">writings</div>
      </div>
    </main>
  );
};

export default Writings;
