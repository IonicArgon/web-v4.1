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
      const fetchDate = new Date().toISOString().split('T')[0];

      if (!response.err) {
        setMotd(response.motd as string);
        setDate(response.date as string);
        localStorage.setItem('motd', response.motd as string);
        localStorage.setItem('motdDate', response.date as string);
        localStorage.setItem('fetchDate', fetchDate);
      } else {
        setMotd(null);
        setDate(null);
      }
    };

    const lastFetchDate = localStorage.getItem('fetchDate');
    const today = new Date().toISOString().split('T')[0];

    if (lastFetchDate !== today) {
      callFetchMOTD();
    } else {
      const storedMotd = localStorage.getItem('motd');
      const storedMotdDate = localStorage.getItem('motdDate');

      if (storedMotd && storedMotdDate) {
        setMotd(storedMotd);
        setDate(storedMotdDate);
      } else {
        callFetchMOTD();
      }
    }
  }, [setMotd, setDate]);

  const processMotd = (motd: string, charLimit = 57) => {
    if (!motd) return null;

    let processedMotd = [];
    let currentLine = '';
    const splitMotd = motd.split(' ');

    for (let i = 0; i < splitMotd.length; ++i) {
      const word = splitMotd[i];
      if (currentLine.length + word.length + 1 > charLimit) {
        processedMotd.push(<span key={i}>&gt; {currentLine.trim()}</span>);
        currentLine = '';
      }

      currentLine += word + ' ';
    }

    if (currentLine) {
      processedMotd.push(<span key="first">&gt; {currentLine.trim()} </span>);
    }

    return processedMotd;
  };

  return (
    <div className="font-mono text-cream mt-4 flex flex-col">
      <h3 className="font-bold text-mountbatten-pink flex flex-row items-center">
        <Rss className="w-4 h-4 mr-2" /> Message of the Day
      </h3>
      <div className="flex flex-col" ref={motdRef}>
        {motd !== 'loading' && processMotd(motd as string)}
      </div>
      <div className="text-sm text-mountbatten-pink">
        {date !== 'loading' && (
          <>
            {'('}
            {date}
            {')'}
          </>
        )}
      </div>
    </div>
  );
};

export default MOTD;
