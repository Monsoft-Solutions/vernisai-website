import { eq } from 'drizzle-orm';
import { PostgresProvider } from '../lib/pg-connection';
import {
    waitlistTable,
    WaitlistFormData,
    WaitlistResult,
    WaitlistEntriesResult,
} from '../schema/waitlist.schema';

export class WaitlistService {
    /**
     * Add a new entry to the waitlist
     */
    async addToWaitlist(formData: WaitlistFormData): Promise<WaitlistResult> {
        try {
            const db = PostgresProvider.getDB();

            // Prepare the data for insertion
            const data = {
                name: formData.name,
                email: formData.email,
                ...(formData.company ? { company: formData.company } : {}),
            };

            const [result] = await db
                .insert(waitlistTable)
                .values(data)
                .returning();

            return {
                success: true,
                data: result,
            };
        } catch (error) {
            console.error('Failed to add to waitlist:', error);
            return {
                success: false,
                error: 'Failed to add to waitlist. Please try again later.',
            };
        }
    }

    /**
     * Check if email already exists in waitlist
     */
    async emailExists(email: string): Promise<boolean> {
        try {
            const db = PostgresProvider.getDB();

            const result = await db
                .select({ id: waitlistTable.id })
                .from(waitlistTable)
                .where(eq(waitlistTable.email, email))
                .limit(1);

            return result.length > 0;
        } catch (error) {
            console.error('Failed to check email existence:', error);
            throw new Error('Database error when checking email existence');
        }
    }

    /**
     * Get all waitlist entries
     */
    async getAllEntries(): Promise<WaitlistEntriesResult> {
        try {
            const db = PostgresProvider.getDB();

            const entries = await db
                .select()
                .from(waitlistTable)
                .orderBy(waitlistTable.created_at);

            return {
                entries,
                count: entries.length,
            };
        } catch (error) {
            console.error('Failed to get waitlist entries:', error);
            throw new Error('Database error when retrieving waitlist entries');
        }
    }
}
