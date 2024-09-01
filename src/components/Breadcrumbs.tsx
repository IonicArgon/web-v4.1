'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import AnimatedLink from './AnimatedLink';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const renderBreadcrumbs = () => {
    if (pathSegments.length === 0) {
      return null;
    }

    const breadcrumbs = pathSegments.slice(0, -1).map((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      return (
        <React.Fragment key={path}>
          <span className="text-thistle">&nbsp;/&nbsp;</span>
          <AnimatedLink href={path}>{segment}</AnimatedLink>
        </React.Fragment>
      );
    });

    return (
      <>
        <span className="text-thistle">/&nbsp;</span>
        <AnimatedLink href="/">home</AnimatedLink>
        {breadcrumbs}
      </>
    );
  };

  return <nav className="pt-4">{renderBreadcrumbs()}</nav>;
};

export default Breadcrumbs;
