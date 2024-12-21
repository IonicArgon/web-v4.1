'use client';

import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <body className="min-w-[100%] min-h-[100%] bg-dark-purple">
      <div className="mx-auto max-w-prose">
        <Breadcrumbs />
        <div id="children-container" className="pt-10">
          {children}
        </div>
        <div
          id="copyright"
          className="pt-10 mb-4 font-mono font-bold text-md text-cream"
        >
          &copy; {new Date().getFullYear()} Marco Tan. All rights reserved.
        </div>
      </div>
    </body>
  );
};

export default ClientLayout;
