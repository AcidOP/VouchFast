import { relations } from 'drizzle-orm';
import { index, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

import { user } from './auth.schema';
// eslint-disable-next-line import/no-cycle
import { testimonial } from './testimonial.schema';

import type { TestimonialStatus } from './testimonial.schema';

export const list = pgTable(
  'list',
  {
    id: text('id').primaryKey(),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),

    name: text('name').notNull(),
    message: text('message').notNull(),
    defaultTestimonialStatus: text('default_testimonial_status')
      .$type<TestimonialStatus>()
      .notNull()
      .default('APPROVED'),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  table => [
    index('list_userId_createdAt_idx').on(table.userId, table.createdAt),
    index('list_userId_idx').on(table.userId),
    index('list_createdAt_idx').on(table.createdAt),
  ],
);

export const listRelations = relations(list, ({ one, many }) => ({
  user: one(user, {
    fields: [list.userId],
    references: [user.id],
  }),
  testimonials: many(testimonial),
}));
