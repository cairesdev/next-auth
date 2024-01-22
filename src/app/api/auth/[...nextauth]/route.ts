import NextAuth, { NextAuthOptions } from "next-auth";
import api from "@/services/http/api";
import Providers from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Providers({
      name: "credentials",
      credentials: {
        login: { label: "Email", type: "text" },
        senha: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const res = await api.post(`/6cbe71077b4d0ab32f89/auth`, credentials);
        const user = res.data;

        if (res.status == 200 && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      token.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 4; // expira em 4 horas
      return token;
    },
    session: async ({ session, token }) => {
      session = token.user as any;
      session.expires = token.exp as any;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
