// @ts-nocheck
import connectDB from "@/backend/lib/connectDB";
import User from "@/backend/models/users/user.schema";
import { compareSync } from "bcryptjs";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, res) {
        // connection with mongodb by calling this function
        connectDB();

        // find if user exist with given email
        const checkUser = await User.findOne({ email: credentials.email });
        if (!checkUser) {
          throw new Error("No user found with this information");
        }

        // Match the passkey
        const matchPassword = compareSync(
          credentials.password,
          checkUser.password
        );

        // Incorrect password
        if (!matchPassword || credentials.email !== checkUser.email) {
          throw new Error("wrong credentials");
        }
        return checkUser;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async redirect({ url, baseUrl }) {
      const ifItIsSignInPage = url.includes("/auth/sign-in");
      // Allows relative callback URLs
      if (ifItIsSignInPage) return `${baseUrl}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  site: process.env.NEXTAUTH_URL,
  secret: process.env.NEXTAUTH_SECRET,
};
