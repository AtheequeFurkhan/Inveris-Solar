import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const clerkApiKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    const clerkSecretKey = process.env.NEXT_PUBLIC_CLERK_SECRET_KEY;

    if (!clerkApiKey) {
        console.error('Clerk API Key is not defined');
        return new NextResponse('Internal Server Error - API Key', { status: 500 });
    }

    if (!clerkSecretKey) {
        console.error('Clerk Secret Key is not defined');
        return new NextResponse('Internal Server Error - Secret Key', { status: 500 });
    }

    console.log('Clerk API Key:', clerkApiKey);
    console.log('Clerk Secret Key:', clerkSecretKey);

    return NextResponse.next();
}
