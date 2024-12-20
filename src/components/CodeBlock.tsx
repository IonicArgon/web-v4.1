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
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div
        className={`relative overflow-auto ${height} scrollbar-thin scrollbar-track-mountbatten-pink scrollbar-thumb-rose-quartz`}
      >
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          showLineNumbers
          codeTagProps={{
            style: { padding: 0 },
          }}
          customStyle={{
            margin: 0,
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
