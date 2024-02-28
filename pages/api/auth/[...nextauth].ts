import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import connectDB from "@/database/db";

const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  KAKAO_CLIENT_ID,
  KAKAO_CLIENT_SECRET,
} = process.env;

export const authOptions = {
  /**oAuth 옵션들 */
  providers: [
    GithubProvider({
      clientId: GITHUB_CLIENT_ID || "",
      clientSecret: GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID || "",
      clientSecret: GOOGLE_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: KAKAO_CLIENT_ID || "",
      clientSecret: KAKAO_CLIENT_SECRET || "",
    }),
  ],

  /** 로그인후 리다이렉트 */
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async signIn() {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
  pages: {
    signIn: "/auth/login",
  },

  /** 유저정보 자동저장 */
  adapter: MongoDBAdapter(connectDB),
  secret: "qwer1234",
};

export default NextAuth(authOptions);
