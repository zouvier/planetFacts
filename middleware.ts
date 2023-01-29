import { NextRequest, NextResponse } from 'next/server'


export function middleware(request: NextRequest) {

  if (request.nextUrl.pathname == '/') {
    return NextResponse.rewrite(new URL('/?planet=mercury&number=0', request.url))
  }
 
}


