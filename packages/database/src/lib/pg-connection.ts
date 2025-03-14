import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { z } from 'zod';

// Database configuration schema with strong typing
export const pgConfigSchema = z.object({
    connectionString: z.string().url('Invalid database connection string'),
    ssl: z.boolean().optional().default(true),
    max: z.number().optional().default(10),
});

// Auth configuration schema (for admin endpoints)
export const authConfigSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
});

// Combined configuration schema
export const fullConfigSchema = z.object({
    database: pgConfigSchema,
    auth: authConfigSchema.optional(),
});

export type PgConfig = z.infer<typeof pgConfigSchema>;
export type AuthConfig = z.infer<typeof authConfigSchema>;
export type FullConfig = z.infer<typeof fullConfigSchema>;

// Class to manage PostgreSQL connection
export class PostgresProvider {
    private static instance: postgres.Sql | null = null;
    private static db: ReturnType<typeof drizzle> | null = null;
    private static config: PgConfig | null = null;

    // Initialize with configuration
    static initialize(config: PgConfig): void {
        try {
            // Validate config
            const validatedConfig = pgConfigSchema.parse(config);

            // Store config
            this.config = validatedConfig;

            // Create SQL connection if not exists
            if (!this.instance) {
                this.instance = postgres(validatedConfig.connectionString, {
                    ssl: validatedConfig.ssl,
                    max: validatedConfig.max,
                });

                // Create Drizzle ORM instance
                this.db = drizzle(this.instance);
            }
        } catch (error) {
            console.error('Failed to initialize PostgreSQL connection:', error);
            throw new Error('Database connection initialization failed');
        }
    }

    // Get Drizzle DB instance
    static getDB(): ReturnType<typeof drizzle> {
        if (!this.db) {
            throw new Error(
                'Database not initialized. Call initialize() first.',
            );
        }
        return this.db;
    }

    // Close connection (useful for tests and serverless)
    static async close(): Promise<void> {
        try {
            if (this.instance) {
                await this.instance.end();
                this.instance = null;
                this.db = null;
            }
        } catch (error) {
            console.error('Error closing database connection:', error);
        }
    }
}
