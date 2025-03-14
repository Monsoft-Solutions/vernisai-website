# VernisAI Database Package

A shared database package for VernisAI services using Supabase and Drizzle ORM.

## Features

- Supabase client setup with environment variable validation
- Drizzle ORM integration for type-safe database operations
- Schema definitions with Zod validation
- Reusable service patterns for database operations

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file with your Supabase credentials:

```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Usage

Import the package into your application:

```typescript
import { WaitlistService, WaitlistFormData } from '@vernisai/database';

// Create an instance of the waitlist service
const waitlistService = new WaitlistService();

// Add a user to the waitlist
const data: WaitlistFormData = {
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Example Corp',
};

const result = await waitlistService.addToWaitlist(data);
```

## Development

To build the package:

```bash
npm run build
```

For development with auto-rebuild:

```bash
npm run dev
```

## Database Schema Setup

To create the waitlist table in your Supabase project, run the following SQL:

```sql
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create an index on email for faster lookups
CREATE UNIQUE INDEX waitlist_email_idx ON waitlist (email);
```
