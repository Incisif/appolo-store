import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      jwt: string; // Ajoute jwt à l'utilisateur de la session
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    jwt: string; // Ajoute jwt à l'utilisateur
  }
}
