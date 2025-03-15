import { pgTable, text, uuid, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm';
import { waitlistTable } from './waitlist.schema';

// Define the database schema for audience tracking
export const audienceTrackingTable = pgTable('audience_tracking', {
    id: uuid('id').primaryKey().defaultRandom(),
    waitlist_id: uuid('waitlist_id').references(() => waitlistTable.id),
    ip_address: text('ip_address'),
    user_agent: text('user_agent'),
    referrer: text('referrer'),
    utm_source: text('utm_source'),
    utm_medium: text('utm_medium'),
    utm_campaign: text('utm_campaign'),
    utm_term: text('utm_term'),
    utm_content: text('utm_content'),
    location_country: text('location_country'),
    location_region: text('location_region'),
    location_city: text('location_city'),
    device_type: text('device_type'),
    browser: text('browser'),
    os: text('os'),
    additional_data: jsonb('additional_data'),
    created_at: timestamp('created_at').defaultNow().notNull(),
});

// Create Zod schema for validation
export const insertAudienceTrackingSchema = z.object({
    waitlist_id: z.string().uuid(),
    ip_address: z.string().optional(),
    user_agent: z.string().optional(),
    referrer: z.string().optional(),
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_term: z.string().optional(),
    utm_content: z.string().optional(),
    location_country: z.string().optional(),
    location_region: z.string().optional(),
    location_city: z.string().optional(),
    device_type: z.string().optional(),
    browser: z.string().optional(),
    os: z.string().optional(),
    additional_data: z.record(z.unknown()).optional(),
});

// Type definitions
export type AudienceTrackingSelect = InferSelectModel<
    typeof audienceTrackingTable
>;
export type AudienceTrackingInsert = InferInsertModel<
    typeof audienceTrackingTable
>;

export type AudienceTrackingData = {
    waitlist_id: string;
    ip_address?: string;
    user_agent?: string;
    referrer?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    location_country?: string;
    location_region?: string;
    location_city?: string;
    device_type?: string;
    browser?: string;
    os?: string;
    additional_data?: Record<string, unknown>;
};

// Result types for our service methods
export type AudienceTrackingResult = {
    success: boolean;
    data?: AudienceTrackingSelect;
    error?: string;
};

export type AudienceTrackingQueryParams = {
    startDate?: Date;
    endDate?: Date;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    location_country?: string;
    limit?: number;
    offset?: number;
};

export type AudienceTrackingStatsResult = {
    totalEntries: number;
    sourceBreakdown: Record<string, number>;
    mediumBreakdown: Record<string, number>;
    campaignBreakdown: Record<string, number>;
    locationBreakdown: Record<string, number>;
    timeSeriesData: Array<{
        date: string;
        count: number;
    }>;
};
