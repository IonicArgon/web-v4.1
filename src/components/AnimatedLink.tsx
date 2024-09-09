import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children }) => {
  return href.startsWith('http') ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="text-thistle font-mono relative inline-block group">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-thistle transition-all duration-300 group-hover:w-full" />
        <ExternalLink className="w-4 h-4 ml-1 inline-block" />
      </span>
    </a>
  ) : (
    <Link href={href}>
      <span className="text-thistle font-mono relative inline-block group">
        {children}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-thistle transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
};

export default AnimatedLink;
