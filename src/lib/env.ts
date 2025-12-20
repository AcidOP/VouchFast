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
    JWT_SECRET: z.string().min(1),
  },

  //   Client-safe env vars: ✅ MUST start with `NEXT_PUBLIC_`
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
  },

  //   Explicit runtime mapping
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  },

  //   Ensures empty strings fail validation
  emptyStringAsUndefined: true,
});
