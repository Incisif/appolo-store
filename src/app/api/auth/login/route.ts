import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const { email, password, rememberMe } = await req.json();

  // Effectuer la requête vers Strapi pour l'authentification
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: email, password }),
  });

  const result = await response.json();

  // Si l'authentification échoue, renvoyer une erreur
  if (!response.ok) {
    return NextResponse.json({ message: result.error?.message || 'Login failed' }, { status: 400 });
  }

  // Options de cookie pour JWT sécurisé
  const cookieOptions = {
    httpOnly: true,  
    secure: process.env.NODE_ENV === 'production',  
    maxAge: rememberMe ? 30 * 24 * 60 * 60 : undefined, 
    path: '/',
    sameSite: 'strict' as const,  // Protège contre les attaques CSRF
  };

  // Stocker le JWT dans un cookie HTTP-Only
  const jwtCookie = serialize('token', result.jwt, cookieOptions);

  
  const responseWithCookie = NextResponse.json({ message: 'Login successful' });
  responseWithCookie.headers.set('Set-Cookie', jwtCookie);

  return responseWithCookie;
}
