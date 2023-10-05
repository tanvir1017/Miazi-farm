// @ts-nocheck
import connectDB from "@/backend/lib/connectDB";
import User from "@/backend/models/users/user.schema";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: AuthOptions = {
  providers: [
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
        connectDB();
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
