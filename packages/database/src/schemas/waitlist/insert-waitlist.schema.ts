import { z } from 'zod';

// Create Zod schemas for validation
export const insertWaitlistSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
});

// Rename to a more descriptive name
export const waitlistInsertSchema = insertWaitlistSchema;
