import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';

// Define the database schema
export const waitlistTable = pgTable('waitlist', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    company: text('company'),
    created_at: timestamp('created_at').defaultNow().notNull(),
});
