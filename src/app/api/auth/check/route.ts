import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Récupérer le token à partir des cookies HTTP-Only
  const token = req.cookies.get('token')?.value;

  // Vérification de la présence du token
  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  // Valider le token en interrogeant l'API Strapi pour vérifier si le token est valide
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`, // Ajouter le token à la requête
    },
  });

  const result = await response.json();

  // Si la réponse de Strapi n'est pas correcte (token invalide, expiré, etc.)
  if (!response.ok) {
    return NextResponse.json({ message: "Token invalid or expired" }, { status: 401 });
  }

  // Si tout est valide, renvoyer les informations de l'utilisateur
  return NextResponse.json({ user: result });
}
