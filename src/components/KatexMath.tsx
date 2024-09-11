'use client';

import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface KatexMathProps {
  mathExp: string;
}

const hideKatexHTML = `
  .hide-katex-html .katex-html {
    display: none;
  }
`;
const KatexMath: React.FC<KatexMathProps> = ({ mathExp }) => {
  const mathContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mathContainerRef.current) return;

    try {
      katex.render(mathExp, mathContainerRef.current);
    } catch (err) {
      console.error(
        'KatexMath component failed to render: ',
        (err as Error).message
      );
    }
  }, [mathExp, mathContainerRef]);

  return (
    <div className='text-2xl font-bold flex justify-center text-center items-center'>
      <style>{hideKatexHTML}</style>
      <div className="hide-katex-html" ref={mathContainerRef}></div>
    </div>
  );
};

export default KatexMath;
