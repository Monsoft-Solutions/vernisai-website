# PostgreSQL Database Setup

This document outlines how to set up PostgreSQL for the VernisAI website. We use Supabase as a managed PostgreSQL service.

## Supabase Project Setup

1. Create a new project on [Supabase](https://supabase.io)

2. After project creation, find your PostgreSQL connection details:

    - Go to Project Settings > Database
    - Get the PostgreSQL connection string

3. Add the following environment variables:
    - For local development: Create a `.env` file in the root directory
    - For production: Add to Vercel environment variables

```
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
API_USERNAME=admin  # For protected API endpoints
API_PASSWORD=your-secure-password  # For protected API endpoints
```

## How It Works

1. The database package is built with strong typing using Drizzle ORM:

    - All database operations are strongly typed
    - API endpoints pass configuration to the database provider
    - Connection pooling is managed properly for serverless environments

2. API endpoints are responsible for:

    - Reading environment variables
    - Initializing the database connection
    - Properly closing connections after use (important in serverless)

3. This architecture provides:
    - Type safety throughout the database layer
    - Clear separation of concerns
    - Better testability
    - Environment-agnostic database package

## Database Schema Setup

Run the following SQL in the Supabase SQL Editor to create the waitlist table with the exact structure expected by Drizzle ORM:

```sql
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create a unique index on email to prevent duplicates
CREATE UNIQUE INDEX waitlist_email_idx ON waitlist (email);
```

This schema matches our Drizzle ORM configuration defined in `schema/waitlist.schema.ts`:

```typescript
// Define the database schema
export const waitlistTable = pgTable('waitlist', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    company: text('company'),
    created_at: timestamp('created_at').defaultNow().notNull(),
});
```

## Security Best Practices

1. **Row Level Security (RLS)**

    Enable RLS on your tables to control access:

    ```sql
    ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
    ```

    Create a policy that only allows authenticated API requests to insert:

    ```sql
    CREATE POLICY "Allow authenticated service to insert waitlist entries"
    ON waitlist FOR INSERT TO authenticated
    USING (true);
    ```

2. **API Protection**

    - The admin endpoint `/api/waitlist-entries` is protected with basic authentication
    - Use strong, unique passwords for API_USERNAME and API_PASSWORD
    - Consider implementing rate limiting to prevent abuse

## Local Development

To run the Supabase client locally:

1. Install the Supabase CLI
2. Start a local Supabase instance:
    ```
    supabase start
    ```
3. Get your local URL and key:
    ```
    supabase status
    ```
4. Update your `.env` file with these local credentials

## Troubleshooting

If you encounter database connection issues:

1. Check that your environment variables are correctly set
2. Verify network access to Supabase
3. Check Supabase service status
4. Review database logs in the Supabase dashboard
