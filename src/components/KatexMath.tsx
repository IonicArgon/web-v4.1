'use client';

import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface KatexMathProps {
  mathExp: string;
  size?: 'sm' | 'md' | 'lg';
}

const KatexMath: React.FC<KatexMathProps> = ({ mathExp, size }) => {
  const mathContainerRef = useRef<HTMLDivElement>(null);
  const sizeCSS: string = (() => {
    switch (size) {
      case 'sm':
        return 'text-2xl';
      case 'md':
        return 'text-3xl';
      case 'lg':
        return 'text-4xl';
      default:
        return 'text-2xl';
    }
  })();

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
    <div
      className={`${sizeCSS} font-bold flex justify-center text-center items-center`}
    >
      <div ref={mathContainerRef}></div>
    </div>
  );
};

export default KatexMath;
