import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: credentials.email,
            password: credentials.password,
          }),
        });

        const user = await res.json();
        if (res.ok && user) {
          return {
            id: user.user.id,
            name: user.user.username,
            email: user.user.email,
            jwt: user.jwt, 
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt; 
      }
      return token;
    },
    async session({ session, token }) {
      session.user.jwt = token.jwt as string; 
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
