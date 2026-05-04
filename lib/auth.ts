import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export const auth = betterAuth({
  database: {
    provider: "mongodb",
    db: client.db("bookdb"),
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});