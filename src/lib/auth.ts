import { db } from '@/drizzle/db';
import { DEFAULT_PLAN } from '@/drizzle/schema';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';

import { env } from './env';

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: 'pg' }),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24, // cache for 1 day
    },
  },
  user: {
    additionalFields: {
      plan: {
        type: ['FREE', 'PAID'],
        input: false,
        defaultValue: DEFAULT_PLAN,
      },
    },
  },
  rateLimit: {
    enabled: true,
    max: 100,
    window: 60, // 100 requests per 60 seconds
    storage: 'memory',
  },
  plugins: [nextCookies()],
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    },
    google: {
      prompt: 'select_account',
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    },
  },
  advanced: {
    cookiePrefix: 'vouchfast',
  },
  telemetry: {
    enabled: false,
  },
});
