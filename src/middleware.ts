import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('access_token');
    const isAuthPage = request.nextUrl.pathname.startsWith('/user');

    const isNotAuthPage = request.nextUrl.pathname.startsWith('/auth')

    if ((isAuthPage && !token) || (isNotAuthPage && token)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}