import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { db } from './db';

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  basePath: '/api/auth',
  secret: process.env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      redirectURI: 'http://localhost:3000/api/auth/callback/google',
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      redirectURI: 'http://localhost:3000/api/auth/callback/github',
    },
  },
});
