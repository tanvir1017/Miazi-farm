// @ts-nocheck
import dbConnect from "@/backend/lib/db.connector";
import User from "@/backend/models/users/user.schema";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, res) {
        // connection with mongodb by calling this function
        await dbConnect();

        // find if user exist with given email
        const checkUser = await User.findOne({ email: credentials.email });
        if (!checkUser) {
          throw new Error("No user found with this information");
        }

        // Match the passkey
        const matchPassword = await compare(
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
  ],
});

export { handler as GET, handler as POST };
