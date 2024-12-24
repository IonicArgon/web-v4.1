'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

import fetchBSkyRecentPost from '@/server/FetchBSkyFeed';

const BSkyIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <title>Bluesky</title>
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
    </svg>
  );
};

const BSkyFeed: React.FC = () => {
  const [text, setText] = useState<string | 'loading' | null>('loading');
  const [date, setDate] = useState<string | 'loading' | null>('loading');
  const [postHref, setPostHref] = useState<string>(
    'https://bsky.app/profile/ionicargon.ca'
  );

  useEffect(() => {
    const callFetchBSkyRecentPost = async () => {
      const response = await fetchBSkyRecentPost();

      if (!response.err) {
        setText(response.text as string);
        const formattedDate = new Date(response.date as string);
        setDate(
          `${formattedDate.toLocaleDateString()} ${formattedDate.toLocaleTimeString()}`
        );
        const postHref = `https://bsky.app/profile/ionicargon.ca/post/${response.cursor}`;
        setPostHref(postHref);
      } else {
        setText(null);
        setDate(null);
      }
    };

    callFetchBSkyRecentPost();
  }, [setText, setDate]);

  const processText = (text: string, charLimit = 57) => {
    if (!text) return null;

    let processedText = [];
    let currentLine = '';
    const splitText = text.split(' ');

    for (let i = 0; i < splitText.length; ++i) {
      const word = splitText[i];
      if (currentLine.length + word.length + 1 > charLimit) {
        processedText.push(<span key={i}>&gt; {currentLine.trim()}</span>);
        currentLine = '';
      }

      currentLine += `${word} `;
    }

    processedText.push(
      <span key={splitText.length}>&gt; {currentLine.trim()}</span>
    );

    return processedText;
  };

  return (
    <a href={postHref} target="_blank" rel="noopener noreferrer">
      <div className="relative font-mono p-2 rounded-lg border-2 border-dark-purple outline outline-2 outline-rose-quartz bg-cream text-dark-purple mt-4 flex flex-col hover:outline-mountbatten-pink hover:outline-8 hover:animate-rainbow-outline hover:shadow-lg transition-all duration-100">
        <h3 className="font-bold text-mountbatten-pink flex flex-row items-center">
          <BSkyIcon className="w-4 h-4 mr-2 text-mountbatten-pink" /> Bluesky
          Feed
        </h3>
        <div className="flex flex-col">
          {text !== 'loading' && processText(text as string)}
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
        <ExternalLink className="absolute right-2 bottom-2 w-4 h-4 mt-2" />
      </div>
    </a>
  );
};

export default BSkyFeed;
