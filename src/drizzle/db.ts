import * as schema from '@/drizzle/schema';
import { drizzle } from 'drizzle-orm/node-postgres';

import { env } from '@/lib/env';

const IS_DEVELOPMENT = env.NODE_ENV === 'development';

export const db = drizzle(env.DATABASE_URL, { schema, logger: IS_DEVELOPMENT });
