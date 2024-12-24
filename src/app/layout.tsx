import type { Metadata } from 'next';
import './globals.css';

import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: {
    template: '%s | IonicArgon',
    default: 'IonicArgon',
  },
  description: "Homepage of Marco Tan's personal website.",
  creator: 'Marco Tan',
  category: 'portfolio',
  keywords: ['Portfolio', 'Marco', 'Tan', 'Marco Tan', 'Personal website'],
  alternates: {
    canonical: 'https://www.ionicargon.ca',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-mountbatten-pink scrollbar-thumb-rose-quartz"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
          integrity="sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+"
          crossOrigin="anonymous"
        ></link>
      </head>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
