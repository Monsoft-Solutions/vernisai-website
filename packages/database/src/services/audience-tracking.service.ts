import { and, eq, gte, lte, sql } from 'drizzle-orm';
import { PostgresProvider } from '../lib/pg-connection';
import { audienceTrackingTable } from '../tables/audience-tracking.table';
import {
    AudienceTrackingData,
    AudienceTrackingResult,
    AudienceTrackingQueryParams,
    AudienceTrackingStatsResult,
    AudienceTrackingSelect,
} from '../schemas/audience-tracking';

// Type for breakdown field names
type BreakdownField =
    | 'utm_source'
    | 'utm_medium'
    | 'utm_campaign'
    | 'location_country';

export class AudienceTrackingService {
    private db = PostgresProvider.getDB();

    /**
     * Save audience tracking data associated with a waitlist entry
     */
    async saveTrackingData(
        data: AudienceTrackingData,
    ): Promise<AudienceTrackingResult> {
        try {
            // Create a dynamic object with only the provided fields
            const insertData = {
                waitlist_id: data.waitlist_id,
                ...this.createOptionalFields(data, [
                    'ip_address',
                    'user_agent',
                    'referrer',
                    'page_url',
                    'utm_source',
                    'utm_medium',
                    'utm_campaign',
                    'utm_term',
                    'utm_content',
                    'location_country',
                    'location_region',
                    'location_city',
                    'location_postal',
                    'location_timezone',
                    'location_coordinates',
                    'location_org',
                    'device_type',
                    'browser',
                    'os',
                    'additional_data',
                ]),
            };

            const [result] = await this.db
                .insert(audienceTrackingTable)
                .values(insertData)
                .returning();

            return {
                success: true,
                data: result,
            };
        } catch (error) {
            return this.handleError(
                'Failed to save audience tracking data',
                error,
            );
        }
    }

    /**
     * Get tracking data for a specific waitlist entry
     */
    async getTrackingDataByWaitlistId(
        waitlistId: string,
    ): Promise<AudienceTrackingSelect | null> {
        try {
            const result = await this.db
                .select()
                .from(audienceTrackingTable)
                .where(eq(audienceTrackingTable.waitlist_id, waitlistId))
                .limit(1);

            return result.length > 0 ? result[0] : null;
        } catch (error) {
            throw this.createError(
                'Failed to get tracking data by waitlist ID',
                error,
            );
        }
    }

    /**
     * Query tracking data with filters
     */
    async queryTrackingData(
        params: AudienceTrackingQueryParams,
    ): Promise<AudienceTrackingSelect[]> {
        try {
            const { limit = 100, offset = 0 } = params;

            // Build query with conditions
            const query = this.db
                .select()
                .from(audienceTrackingTable)
                .limit(limit)
                .offset(offset)
                .orderBy(audienceTrackingTable.created_at);

            // Add conditions if they exist
            const conditions = this.buildQueryConditions(params);
            if (conditions.length > 0) {
                query.where(and(...conditions));
            }

            return await query;
        } catch (error) {
            throw this.createError('Failed to query tracking data', error);
        }
    }

    /**
     * Get statistics and aggregated data for audience tracking
     */
    async getTrackingStats(
        params: AudienceTrackingQueryParams = {},
    ): Promise<AudienceTrackingStatsResult> {
        try {
            // Build conditions array for date filtering
            const conditions = this.buildQueryConditions(params);

            // Get total count
            const totalEntries = await this.getAggregateCount(conditions);

            // Get breakdowns for different dimensions
            const sourceBreakdown = await this.getBreakdownByField(
                'utm_source',
                conditions,
            );
            const mediumBreakdown = await this.getBreakdownByField(
                'utm_medium',
                conditions,
            );
            const campaignBreakdown = await this.getBreakdownByField(
                'utm_campaign',
                conditions,
            );
            const locationBreakdown = await this.getBreakdownByField(
                'location_country',
                conditions,
            );

            // Get time series data (daily counts)
            const timeSeriesData = await this.getTimeSeriesData(conditions);

            return {
                totalEntries,
                sourceBreakdown,
                mediumBreakdown,
                campaignBreakdown,
                locationBreakdown,
                timeSeriesData,
            };
        } catch (error) {
            throw this.createError('Failed to get tracking stats', error);
        }
    }

    /**
     * Helper method to build query conditions from params
     */
    private buildQueryConditions(params: AudienceTrackingQueryParams) {
        const conditions = [];
        const {
            startDate,
            endDate,
            utm_source,
            utm_medium,
            utm_campaign,
            location_country,
        } = params;

        if (startDate) {
            conditions.push(gte(audienceTrackingTable.created_at, startDate));
        }

        if (endDate) {
            conditions.push(lte(audienceTrackingTable.created_at, endDate));
        }

        if (utm_source) {
            conditions.push(eq(audienceTrackingTable.utm_source, utm_source));
        }

        if (utm_medium) {
            conditions.push(eq(audienceTrackingTable.utm_medium, utm_medium));
        }

        if (utm_campaign) {
            conditions.push(
                eq(audienceTrackingTable.utm_campaign, utm_campaign),
            );
        }

        if (location_country) {
            conditions.push(
                eq(audienceTrackingTable.location_country, location_country),
            );
        }

        return conditions;
    }

    /**
     * Helper method to get aggregate count with conditions
     */
    private async getAggregateCount(conditions: any[] = []) {
        const query = this.db
            .select({ count: sql<number>`count(*)` })
            .from(audienceTrackingTable);

        if (conditions.length > 0) {
            query.where(and(...conditions));
        }

        const result = await query;
        return result[0]?.count || 0;
    }

    /**
     * Helper method to get breakdown by a specific field
     */
    private async getBreakdownByField(
        fieldName: BreakdownField,
        conditions: any[] = [],
    ) {
        // Map the field name to the actual table column
        let columnName: string;
        let column: any;

        switch (fieldName) {
            case 'utm_source':
                column = audienceTrackingTable.utm_source;
                columnName = 'utm_source';
                break;
            case 'utm_medium':
                column = audienceTrackingTable.utm_medium;
                columnName = 'utm_medium';
                break;
            case 'utm_campaign':
                column = audienceTrackingTable.utm_campaign;
                columnName = 'utm_campaign';
                break;
            case 'location_country':
                column = audienceTrackingTable.location_country;
                columnName = 'location_country';
                break;
            default:
                throw new Error(`Unknown field name: ${fieldName}`);
        }

        const query = this.db
            .select({
                value: column,
                count: sql<number>`count(*)`,
            })
            .from(audienceTrackingTable)
            .groupBy(column);

        if (conditions.length > 0) {
            query.where(and(...conditions));
        }

        const result = await query;
        const breakdown: Record<string, number> = {};

        result.forEach((row) => {
            const value = row.value || 'unknown';
            breakdown[value] = row.count;
        });

        return breakdown;
    }

    /**
     * Helper method to get time series data
     */
    private async getTimeSeriesData(conditions: any[] = []) {
        const query = this.db
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
            query.where(and(...conditions));
        }

        const result = await query;
        return result.map((row) => ({
            date: row.date,
            count: row.count,
        }));
    }

    /**
     * Helper method to create optional fields object
     */
    private createOptionalFields(data: Record<string, any>, fields: string[]) {
        return fields.reduce(
            (acc, field) => {
                if (data[field] !== undefined) {
                    acc[field] = data[field];
                }
                return acc;
            },
            {} as Record<string, any>,
        );
    }

    /**
     * Helper method to handle errors consistently
     */
    private handleError(
        message: string,
        error: unknown,
    ): AudienceTrackingResult {
        console.error(`${message}:`, error);
        return {
            success: false,
            error: `${message}. Please try again later.`,
        };
    }

    /**
     * Helper method to create error objects consistently
     */
    private createError(message: string, error: unknown): Error {
        console.error(`${message}:`, error);
        return new Error(`Database error when ${message.toLowerCase()}`);
    }
}
