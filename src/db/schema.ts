import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const appUsers = pgTable('app_users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
