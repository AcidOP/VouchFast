import { relations } from 'drizzle-orm';
import {
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

// eslint-disable-next-line import/no-cycle
import { list } from './list.schema';

export const TESTIMONIAL_STATUSES = ['PENDING', 'APPROVED'] as const;
export type TestimonialStatus = (typeof TESTIMONIAL_STATUSES)[number];
export const testimonialStatus = pgEnum('testimonial_status', TESTIMONIAL_STATUSES);

export const testimonial = pgTable(
  'testimonial',
  {
    id: text('id').primaryKey(),

    listId: text('list_id')
      .notNull()
      .references(() => list.id, { onDelete: 'cascade' }),

    authorName: text('author_name').notNull(),
    authorTitle: text('author_title'),
    authorCompany: text('author_company'),

    rating: integer('rating'),
    content: text('content').notNull(),

    status: testimonialStatus('status').default('PENDING').notNull(),

    approvedAt: timestamp('approved_at'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  table => [
    index('testimonial_listId_createdAt_idx').on(table.listId, table.createdAt),
    index('testimonial_listId_idx').on(table.listId),
    index('testimonial_status_idx').on(table.status),
    index('testimonial_list_status_created_idx').on(
      table.listId,
      table.status,
      table.createdAt,
    ),
  ],
);

export const testimonialRelations = relations(testimonial, ({ one }) => ({
  list: one(list, {
    fields: [testimonial.listId],
    references: [list.id],
  }),
}));
