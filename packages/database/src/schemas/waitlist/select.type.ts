import { type InferSelectModel } from 'drizzle-orm';
import { waitlistTable } from '../../tables/waitlist.table';

// TypeScript type using Drizzle's type inference
export type WaitlistSelect = InferSelectModel<typeof waitlistTable>;
