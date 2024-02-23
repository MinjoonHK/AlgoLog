import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("GitHub client ID and secret must be provided!");
}

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: "qwer1234",
};

export default NextAuth(authOptions);
