import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import dns from "node:dns/promises"
dns.setServers(["8.8.8.8", "4.4.8.8"])
const client = new MongoClient(process.env.MONGODB_URI!);

export const auth = betterAuth({
  database: mongodbAdapter(client.db("bookdb")),
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