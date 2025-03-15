import { type InferInsertModel } from 'drizzle-orm';
import { audienceTrackingTable } from '../../tables/audience-tracking.table';

// Type definition for inserting audience tracking data
export type AudienceTrackingInsert = InferInsertModel<
    typeof audienceTrackingTable
>;
