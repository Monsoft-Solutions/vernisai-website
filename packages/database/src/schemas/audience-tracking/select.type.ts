import { type InferSelectModel } from 'drizzle-orm';
import { audienceTrackingTable } from '../../tables/audience-tracking.table';

// Type definition for selecting audience tracking data
export type AudienceTrackingSelect = InferSelectModel<
    typeof audienceTrackingTable
>;
