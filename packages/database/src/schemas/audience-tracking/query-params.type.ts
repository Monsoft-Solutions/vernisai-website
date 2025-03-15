// Query parameters for filtering audience tracking data
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
