'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
  height?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, height }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg mb-6">
      <div
        className={`relative overflow-auto ${height} scrollbar-thin scrollbar-track-mountbatten-pink scrollbar-thumb-rose-quartz bg-[#1d1f21]`}
      >
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          showLineNumbers
          customStyle={{
            margin: 0,
            overflow: 'unset',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
