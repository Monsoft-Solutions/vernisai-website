import { z } from 'zod';

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

// Rename to a more descriptive name
export const audienceTrackingInsertSchema = insertAudienceTrackingSchema;
