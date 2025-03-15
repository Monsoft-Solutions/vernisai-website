import { type InferInsertModel } from 'drizzle-orm';
import { waitlistTable } from '../../tables/waitlist.table';

// TypeScript type using Drizzle's type inference
export type WaitlistInsert = InferInsertModel<typeof waitlistTable>;
