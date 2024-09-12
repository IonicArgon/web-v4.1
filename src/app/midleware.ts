import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {
  const userAgent = req.headers.get('user-agent');
  const mobileAgents = new RegExp(
    'Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini'
  );

  const isMobile = userAgent ? () => mobileAgents.test(userAgent) : true;

  if (isMobile) {
    return NextResponse.rewrite(new URL('/mobile-message', req.url));
  }
}
