import { pgTable, text, uuid, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { waitlistTable } from './waitlist.table';

// Define the database schema for audience tracking
export const audienceTrackingTable = pgTable('audience_tracking', {
    id: uuid('id').primaryKey().defaultRandom(),
    waitlist_id: uuid('waitlist_id').references(() => waitlistTable.id),
    ip_address: text('ip_address'),
    user_agent: text('user_agent'),
    referrer: text('referrer'),
    page_url: text('page_url'),
    utm_source: text('utm_source'),
    utm_medium: text('utm_medium'),
    utm_campaign: text('utm_campaign'),
    utm_term: text('utm_term'),
    utm_content: text('utm_content'),
    location_country: text('location_country'),
    location_region: text('location_region'),
    location_city: text('location_city'),
    location_postal: text('location_postal'),
    location_timezone: text('location_timezone'),
    location_coordinates: text('location_coordinates'),
    location_org: text('location_org'),
    device_type: text('device_type'),
    browser: text('browser'),
    os: text('os'),
    additional_data: jsonb('additional_data'),
    created_at: timestamp('created_at').defaultNow().notNull(),
});
