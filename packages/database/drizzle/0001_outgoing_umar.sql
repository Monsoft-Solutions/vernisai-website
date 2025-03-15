CREATE TABLE "audience_tracking" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"waitlist_id" uuid,
	"ip_address" text,
	"user_agent" text,
	"referrer" text,
	"utm_source" text,
	"utm_medium" text,
	"utm_campaign" text,
	"utm_term" text,
	"utm_content" text,
	"location_country" text,
	"location_region" text,
	"location_city" text,
	"device_type" text,
	"browser" text,
	"os" text,
	"additional_data" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "audience_tracking" ADD CONSTRAINT "audience_tracking_waitlist_id_waitlist_id_fk" FOREIGN KEY ("waitlist_id") REFERENCES "public"."waitlist"("id") ON DELETE no action ON UPDATE no action;