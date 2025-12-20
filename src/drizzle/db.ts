// Make sure to install the 'pg' package
import * as schema from '@/drizzle/schema';
import { drizzle } from 'drizzle-orm/node-postgres';

import { env } from '@/lib/env';

export const db = drizzle(env.DATABASE_URL, { schema });
