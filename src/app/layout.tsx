import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';

const Breadcrumbs = dynamic(() => import('../components/Breadcrumbs'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Home | IonicArgon',
  description: "Marco Tan's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-w-[100%] min-h-[100%] bg-dark-purple">
        <div className="mx-auto max-w-prose">
          <Breadcrumbs />
          <div id="children-container" className="pt-4">
            {children}
          </div>
          <div
            id="copyright"
            className="pt-10 mb-4 font-mono font-bold text-xl text-cream"
          >
            &copy; {new Date().getFullYear()} IONICARGON
          </div>
        </div>
      </body>
    </html>
  );
}
