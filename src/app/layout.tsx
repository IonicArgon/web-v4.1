import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';

const Breadcrumbs = dynamic(() => import('../components/Breadcrumbs'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    template: '%s | IonicArgon',
    default: 'IonicArgon',
  },
  description: "Homepage of Marco Tan's personal website.",
  robots: {
    index: true,
    follow: true,
  },
  creator: 'Marco Tan',
  category: 'portfolio',
  keywords: ['Portfolio', 'Marco', 'Tan', 'Marco Tan', 'Personal website'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body className="min-w-[100%] min-h-[100%] bg-dark-purple">
        <noscript>
          <div className="font-mono text-3xl text-cream">
            JavaScript is disabled. Please enable it to view the full site.
          </div>
        </noscript>

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
