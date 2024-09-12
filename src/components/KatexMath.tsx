'use client';

import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface KatexMathProps {
  mathExp: string;
  size?: 'sm' | 'md' | 'lg';
  inline?: boolean;
}

const KatexMath: React.FC<KatexMathProps> = ({ mathExp, size, inline }) => {
  const mathContainerRef = useRef<HTMLSpanElement>(null);
  const sizeCSS: string = (() => {
    switch (size) {
      case 'sm':
        return 'text-xl';
      case 'md':
        return 'text-2xl';
      case 'lg':
        return 'text-3xl';
      default:
        return 'text-xl';
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

  return inline ? (
    <span className="font-bold">
      <span ref={mathContainerRef}></span>
    </span>
  ) : (
    <div
      className={`${sizeCSS} font-bold flex justify-center text-center items-center mb-4`}
    >
      <span ref={mathContainerRef}></span>
    </div>
  );
};

export default KatexMath;
