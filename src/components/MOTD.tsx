'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Rss } from 'lucide-react';

import fetchMOTD from '@/server/MOTDFetch';

const MOTD: React.FC = () => {
  const [motd, setMotd] = useState<string | 'loading' | null>('loading');
  const [date, setDate] = useState<string | 'loading' | null>('loading');
  const motdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callFetchMOTD = async () => {
      const response = await fetchMOTD();
      if (!response.err) {
        setMotd(response.motd as string);
        setDate(response.date as string);
      } else {
        setMotd(null);
        setDate(null);
      }
    };

    callFetchMOTD();
  }, [setMotd, setDate]);

  const processMotd = (motd: string, charLimit = 65) => {
    if (!motd) return null;

    let processedMotd = [];
    let currentLine = '';

    for (const word of motd.split(' ')) {
      if (currentLine.length + word.length + 1 > charLimit) {
        processedMotd.push(<span>&gt; {currentLine.trim()}</span>);
        currentLine = '';
      }

      currentLine += word + ' ';
    }

    if (currentLine) {
      processedMotd.push(<span>&gt; {currentLine.trim()} </span>);
    }

    return processedMotd;
  };

  return (
    <div className="font-mono text-cream mt-4 flex flex-col">
      <h3 className="font-bold text-mountbatten-pink">
        &gt; Message of the Day
      </h3>
      <div className="flex flex-col" ref={motdRef}>
        {motd !== 'loading' && processMotd(motd as string)}
      </div>
      <div className='text-sm text-mountbatten-pink'>
        {date !== 'loading' && (date)}
      </div>
    </div>
  );
};

export default MOTD;
