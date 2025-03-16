# Audience Tracking for Waitlist

This document describes the audience tracking functionality for the VernisAI waitlist system.

## Overview

The audience tracking system captures and stores information about users who join the waitlist, including:

- IP address (for geolocation)
- Referral source
- UTM parameters (for campaign tracking)
- Device and browser information
- Ad campaign data

This data is stored separately from the main waitlist table to maintain clean data architecture and is accessible for analysis and reporting.

## Database Schema

The audience tracking data is stored in the `audience_tracking` table with the following structure:

| Column           | Type      | Description                                  |
| ---------------- | --------- | -------------------------------------------- |
| id               | uuid      | Primary key                                  |
| waitlist_id      | uuid      | Foreign key to waitlist table                |
| ip_address       | text      | User's IP address                            |
| user_agent       | text      | User's browser user agent string             |
| referrer         | text      | Referring URL                                |
| utm_source       | text      | UTM source parameter                         |
| utm_medium       | text      | UTM medium parameter                         |
| utm_campaign     | text      | UTM campaign parameter                       |
| utm_term         | text      | UTM term parameter                           |
| utm_content      | text      | UTM content parameter                        |
| location_country | text      | User's country based on IP                   |
| location_region  | text      | User's region/state based on IP              |
| location_city    | text      | User's city based on IP                      |
| device_type      | text      | User's device type (desktop, mobile, tablet) |
| browser          | text      | User's browser name                          |
| os               | text      | User's operating system                      |
| additional_data  | jsonb     | Additional tracking data in JSON format      |
| created_at       | timestamp | Timestamp when the record was created        |

## Implementation Details

### Client-Side Tracking

The waitlist form component captures:

1. UTM parameters from the URL query string
2. Referrer information
3. Stores UTM parameters in session storage for persistence across pages

When a user submits the form, this tracking data is sent along with the form data to the server.

### Server-Side Processing

The waitlist API endpoint:

1. Extracts tracking information from the request headers and body
2. Parses the user agent to determine browser, OS, and device type
3. Determines location information from the IP address
4. Stores the tracking data in the `audience_tracking` table

### Ad Conversion Tracking

The implementation includes support for:

1. Google Ads conversion tracking
2. Meta Ads (Facebook) conversion tracking

These integrations are triggered after a successful waitlist submission.

## Usage

### Capturing UTM Parameters

UTM parameters are automatically captured from the URL. For example:

```
https://vernisai.com?utm_source=google&utm_medium=cpc&utm_campaign=spring_promo
```

### Analyzing Tracking Data

The `AudienceTrackingService` provides methods for:

1. Retrieving tracking data for a specific waitlist entry
2. Querying tracking data with filters (date range, source, etc.)
3. Getting aggregated statistics (source breakdown, campaign performance, etc.)

## Privacy Considerations

When implementing IP-based geolocation:

1. Ensure compliance with privacy regulations (GDPR, CCPA)
2. Consider anonymizing IP addresses for storage
3. Include appropriate disclosures in your privacy policy

## Extending the System

The system is designed to be extensible:

1. The `additional_data` field can store any JSON-compatible data
2. New tracking parameters can be added without schema changes
3. Additional analytics integrations can be implemented as needed
