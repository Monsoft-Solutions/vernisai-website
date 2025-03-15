// Result type for audience tracking statistics
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
