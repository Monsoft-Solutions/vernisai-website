import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';

// Define the database schema
export const waitlistTable = pgTable('waitlist', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    company: text('company'),
    created_at: timestamp('created_at').defaultNow().notNull(),
});

// Create Zod schemas for validation
export const insertWaitlistSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
});

// TypeScript types using Drizzle's type inference
export type WaitlistSelect = InferSelectModel<typeof waitlistTable>;
export type WaitlistInsert = InferInsertModel<typeof waitlistTable>;
export type WaitlistFormData = {
    name: string;
    email: string;
    company?: string;
};

// Result types for our service methods
export type WaitlistResult = {
    success: boolean;
    data?: WaitlistSelect;
    error?: string;
};

export type WaitlistEntriesResult = {
    entries: WaitlistSelect[];
    count: number;
};
