/* eslint-disable no-process-env */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * This file:
 * - Is executed during `next build`
 * - Throws on invalid env → BUILD FAILS
 * - Is the ONLY place touching process.env
 */

export const env = createEnv({
  //   Server-only env vars: ❌ Cannot be imported in client components
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),

    DATABASE_URL: z.string().url(),
    AUTH_GITHUB_CLIENT_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    AUTH_GOOGLE_CLIENT_ID: z.string().min(1),
    AUTH_GOOGLE_SECRET: z.string().min(1),
  },

  //   Client-safe env vars: ✅ MUST start with `NEXT_PUBLIC_`
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },

  //   Explicit runtime mapping
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    AUTH_GITHUB_CLIENT_ID: process.env.AUTH_GITHUB_CLIENT_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    AUTH_GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  },

  //   Ensures empty strings fail validation
  emptyStringAsUndefined: true,
});
