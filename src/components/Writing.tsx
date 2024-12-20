'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import AnimatedLink from '@/components/AnimatedLink';
import type { WritingMetadata } from '@/types/WritingTypes';

const Writing: React.FC<{
  writingMetadata: WritingMetadata;
  children: React.ReactNode;
}> = ({ writingMetadata, children }) => {
  return (
    <main>
      <div id="main-content" className="text-cream font-mono">
        <h1 className="text-4xl font-bold">{writingMetadata.title}</h1>
        <h2 className="text-lg font-medium text-mountbatten-pink">
          {writingMetadata.shortDescription}
        </h2>
        {writingMetadata.date && (
          <h3 className="text-sm font-light text-rose-quartz">
            {writingMetadata.date}
          </h3>
        )}
        {writingMetadata.tags && (
          <div id="writing-metadata" className="flex flex-col space-y-2 mt-2">
            <div className="flex flex-row flex-wrap space-x-2">
              <span className="font-bold">Tags:</span>
              {writingMetadata.tags.sort().map((tag, index) => (
                <span
                  key={index}
                  className="text-sm flex items-center text-center justify-center text-dark-purple bg-rose-quartz py-1 px-2 rounded-sm leading-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        {writingMetadata.titleImage && (
          <div className="flex flex-row justify-center mt-8">
            <div
              className="relative w-full max-w-4xl"
              style={{ padding: '25%' }}
            >
              <Image
                src={writingMetadata.titleImage}
                alt={writingMetadata.title}
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
};

export default Writing;
