import { and, eq, gte, lte, sql } from 'drizzle-orm';
import { PostgresProvider } from '../lib/pg-connection';
import {
    audienceTrackingTable,
    AudienceTrackingData,
    AudienceTrackingResult,
    AudienceTrackingQueryParams,
    AudienceTrackingStatsResult,
    AudienceTrackingSelect,
} from '../schema/audience-tracking.schema';

export class AudienceTrackingService {
    /**
     * Save audience tracking data associated with a waitlist entry
     */
    async saveTrackingData(
        data: AudienceTrackingData,
    ): Promise<AudienceTrackingResult> {
        try {
            const db = PostgresProvider.getDB();

            // Prepare the data for insertion
            const insertData = {
                waitlist_id: data.waitlist_id,
                ...(data.ip_address ? { ip_address: data.ip_address } : {}),
                ...(data.user_agent ? { user_agent: data.user_agent } : {}),
                ...(data.referrer ? { referrer: data.referrer } : {}),
                ...(data.utm_source ? { utm_source: data.utm_source } : {}),
                ...(data.utm_medium ? { utm_medium: data.utm_medium } : {}),
                ...(data.utm_campaign
                    ? { utm_campaign: data.utm_campaign }
                    : {}),
                ...(data.utm_term ? { utm_term: data.utm_term } : {}),
                ...(data.utm_content ? { utm_content: data.utm_content } : {}),
                ...(data.location_country
                    ? { location_country: data.location_country }
                    : {}),
                ...(data.location_region
                    ? { location_region: data.location_region }
                    : {}),
                ...(data.location_city
                    ? { location_city: data.location_city }
                    : {}),
                ...(data.device_type ? { device_type: data.device_type } : {}),
                ...(data.browser ? { browser: data.browser } : {}),
                ...(data.os ? { os: data.os } : {}),
                ...(data.additional_data
                    ? { additional_data: data.additional_data }
                    : {}),
            };

            const [result] = await db
                .insert(audienceTrackingTable)
                .values(insertData)
                .returning();

            return {
                success: true,
                data: result,
            };
        } catch (error) {
            console.error('Failed to save audience tracking data:', error);
            return {
                success: false,
                error: 'Failed to save audience tracking data. Please try again later.',
            };
        }
    }

    /**
     * Get tracking data for a specific waitlist entry
     */
    async getTrackingDataByWaitlistId(
        waitlistId: string,
    ): Promise<AudienceTrackingSelect | null> {
        try {
            const db = PostgresProvider.getDB();

            const result = await db
                .select()
                .from(audienceTrackingTable)
                .where(eq(audienceTrackingTable.waitlist_id, waitlistId))
                .limit(1);

            return result.length > 0 ? result[0] : null;
        } catch (error) {
            console.error('Failed to get tracking data by waitlist ID:', error);
            throw new Error('Database error when retrieving tracking data');
        }
    }

    /**
     * Query tracking data with filters
     */
    async queryTrackingData(
        params: AudienceTrackingQueryParams,
    ): Promise<AudienceTrackingSelect[]> {
        try {
            const db = PostgresProvider.getDB();
            const {
                startDate,
                endDate,
                utm_source,
                utm_medium,
                utm_campaign,
                location_country,
                limit = 100,
                offset = 0,
            } = params;

            // Build conditions array
            const conditions = [];

            if (startDate) {
                conditions.push(
                    gte(audienceTrackingTable.created_at, startDate),
                );
            }

            if (endDate) {
                conditions.push(lte(audienceTrackingTable.created_at, endDate));
            }

            if (utm_source) {
                conditions.push(
                    eq(audienceTrackingTable.utm_source, utm_source),
                );
            }

            if (utm_medium) {
                conditions.push(
                    eq(audienceTrackingTable.utm_medium, utm_medium),
                );
            }

            if (utm_campaign) {
                conditions.push(
                    eq(audienceTrackingTable.utm_campaign, utm_campaign),
                );
            }

            if (location_country) {
                conditions.push(
                    eq(
                        audienceTrackingTable.location_country,
                        location_country,
                    ),
                );
            }

            // Execute query with conditions
            const query = db
                .select()
                .from(audienceTrackingTable)
                .limit(limit)
                .offset(offset)
                .orderBy(audienceTrackingTable.created_at);

            // Add where clause if conditions exist
            if (conditions.length > 0) {
                query.where(and(...conditions));
            }

            return await query;
        } catch (error) {
            console.error('Failed to query tracking data:', error);
            throw new Error('Database error when querying tracking data');
        }
    }

    /**
     * Get statistics and aggregated data for audience tracking
     */
    async getTrackingStats(
        params: AudienceTrackingQueryParams = {},
    ): Promise<AudienceTrackingStatsResult> {
        try {
            const db = PostgresProvider.getDB();
            const { startDate, endDate } = params;

            // Build conditions array for date filtering
            const conditions = [];

            if (startDate) {
                conditions.push(
                    gte(audienceTrackingTable.created_at, startDate),
                );
            }

            if (endDate) {
                conditions.push(lte(audienceTrackingTable.created_at, endDate));
            }

            // Get total count
            const totalCountQuery = db
                .select({ count: sql<number>`count(*)` })
                .from(audienceTrackingTable);

            // Add where clause if conditions exist
            if (conditions.length > 0) {
                totalCountQuery.where(and(...conditions));
            }

            const totalCountResult = await totalCountQuery;
            const totalEntries = totalCountResult[0]?.count || 0;

            // Get source breakdown
            const sourceBreakdownQuery = db
                .select({
                    source: audienceTrackingTable.utm_source,
                    count: sql<number>`count(*)`,
                })
                .from(audienceTrackingTable)
                .groupBy(audienceTrackingTable.utm_source);

            if (conditions.length > 0) {
                sourceBreakdownQuery.where(and(...conditions));
            }

            const sourceBreakdownResult = await sourceBreakdownQuery;
            const sourceBreakdown: Record<string, number> = {};
            sourceBreakdownResult.forEach((row) => {
                const source = row.source || 'unknown';
                sourceBreakdown[source] = row.count;
            });

            // Get medium breakdown
            const mediumBreakdownQuery = db
                .select({
                    medium: audienceTrackingTable.utm_medium,
                    count: sql<number>`count(*)`,
                })
                .from(audienceTrackingTable)
                .groupBy(audienceTrackingTable.utm_medium);

            if (conditions.length > 0) {
                mediumBreakdownQuery.where(and(...conditions));
            }

            const mediumBreakdownResult = await mediumBreakdownQuery;
            const mediumBreakdown: Record<string, number> = {};
            mediumBreakdownResult.forEach((row) => {
                const medium = row.medium || 'unknown';
                mediumBreakdown[medium] = row.count;
            });

            // Get campaign breakdown
            const campaignBreakdownQuery = db
                .select({
                    campaign: audienceTrackingTable.utm_campaign,
                    count: sql<number>`count(*)`,
                })
                .from(audienceTrackingTable)
                .groupBy(audienceTrackingTable.utm_campaign);

            if (conditions.length > 0) {
                campaignBreakdownQuery.where(and(...conditions));
            }

            const campaignBreakdownResult = await campaignBreakdownQuery;
            const campaignBreakdown: Record<string, number> = {};
            campaignBreakdownResult.forEach((row) => {
                const campaign = row.campaign || 'unknown';
                campaignBreakdown[campaign] = row.count;
            });

            // Get location breakdown
            const locationBreakdownQuery = db
                .select({
                    country: audienceTrackingTable.location_country,
                    count: sql<number>`count(*)`,
                })
                .from(audienceTrackingTable)
                .groupBy(audienceTrackingTable.location_country);

            if (conditions.length > 0) {
                locationBreakdownQuery.where(and(...conditions));
            }

            const locationBreakdownResult = await locationBreakdownQuery;
            const locationBreakdown: Record<string, number> = {};
            locationBreakdownResult.forEach((row) => {
                const country = row.country || 'unknown';
                locationBreakdown[country] = row.count;
            });

            // Get time series data (daily counts)
            const timeSeriesQuery = db
                .select({
                    date: sql<string>`date_trunc('day', ${audienceTrackingTable.created_at})::text`,
                    count: sql<number>`count(*)`,
                })
                .from(audienceTrackingTable)
                .groupBy(
                    sql`date_trunc('day', ${audienceTrackingTable.created_at})`,
                )
                .orderBy(
                    sql`date_trunc('day', ${audienceTrackingTable.created_at})`,
                );

            if (conditions.length > 0) {
                timeSeriesQuery.where(and(...conditions));
            }

            const timeSeriesResult = await timeSeriesQuery;
            const timeSeriesData = timeSeriesResult.map((row) => ({
                date: row.date,
                count: row.count,
            }));

            return {
                totalEntries,
                sourceBreakdown,
                mediumBreakdown,
                campaignBreakdown,
                locationBreakdown,
                timeSeriesData,
            };
        } catch (error) {
            console.error('Failed to get tracking stats:', error);
            throw new Error(
                'Database error when retrieving tracking statistics',
            );
        }
    }
}
