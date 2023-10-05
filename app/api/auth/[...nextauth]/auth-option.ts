// @ts-nocheck
import connectDB from "@/backend/lib/connectDB";
import User from "@/backend/models/users/user.schema";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

console.log("🚀 ~ file: auth-option.ts:10 ~ connecting db...");
connectDB();
console.log("🚀 ~ file: auth-option.ts:10 ~ connected db");
export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Next Auth",
      //  To make an form by next auth default style
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter your password",
        },
      },
      async authorize(credentials, req) {
        // To add some logic here to look up the user credential

        const user = await User.findOne({ email: credentials?.email });
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (user) {
          const userExist = await User.findOne({ email: user?.email });
          if (userExist) {
            return true;
          }
          const newUserByGoogle = {
            name: user.name,
            email: user.email,
            image: user.image,
            password: "DY3VMmoHh1L0XQzX",
            credential: account?.provider,
          };
          const userSaveToDb = await User.create(newUserByGoogle);

          return true;
        }
      } catch (error) {
        console.log("🚀 ~ file: auth-option.ts:49 ~ signIn ~ error:", error);
        return false;
      }
    },
    // async redirect({ url, baseUrl }) {
    //   const ifItIsSignInPage = url.includes("/auth/sign-in");
    //   // Allows relative callback URLs
    //   if (ifItIsSignInPage) return `${baseUrl}`;
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
  },
  site: process.env.NEXTAUTH_URL,
  secret: process.env.NEXTAUTH_SECRET,
};
