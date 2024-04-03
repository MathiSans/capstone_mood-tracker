import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/db/mongodb";
import dbConnect from "@/db/models/connect";
import User from "@/db/models/User";
import { CredentialsProvider } from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,

      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // this is only here in order to make it easier for people to test the application
        const testUser = await User.findOne({ email: "testuser@example.com" });

        if (
          credentials.username === "test" &&
          credentials.password === "test"
        ) {
          return testUser;
        } else {
          return null;
        }
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),

  callbacks: {
    async session({ session, user }) {
      dbConnect();
      return { ...session, user: { ...session.user, id: user.id } };
    },
  },
});
