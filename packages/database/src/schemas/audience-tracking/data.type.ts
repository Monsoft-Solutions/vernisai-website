// Type definition for audience tracking data
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
    location_postal?: string;
    location_timezone?: string;
    location_coordinates?: string;
    location_org?: string;
    device_type?: string;
    browser?: string;
    os?: string;
    additional_data?: Record<string, unknown>;
};
