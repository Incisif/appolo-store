import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const { email, password, rememberMe } = await req.json();

  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: email, password }),
  });

  const result = await response.json();

  if (!response.ok) {
    return NextResponse.json({ message: result.error?.message || 'Login failed' }, { status: 400 });
  }

  // Set cookie for JWT
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: rememberMe ? 30 * 24 * 60 * 60 : undefined, // 30 days for "remember me"
    path: '/',
  };

  const jwtCookie = serialize('token', result.jwt, cookieOptions);
  const responseWithCookie = NextResponse.json(result);
  responseWithCookie.headers.set('Set-Cookie', jwtCookie);

  return responseWithCookie;
}
