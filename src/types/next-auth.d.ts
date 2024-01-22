import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      LOGIN: string;
      ORGAO: string;
      PESSOA: string;
      SISTEMA: number;
      ESIC: number;
    };
  }
}
