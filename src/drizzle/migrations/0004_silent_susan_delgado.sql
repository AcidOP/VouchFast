DROP TYPE "public"."testimonial_status";--> statement-breakpoint
CREATE TYPE "public"."testimonial_status" AS ENUM('PENDING', 'APPROVED', 'REJECTED');--> statement-breakpoint
ALTER TABLE "list" ALTER COLUMN "message" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "testimonial" ALTER COLUMN "status" SET DEFAULT 'PENDING';--> statement-breakpoint
ALTER TABLE "testimonial" DROP COLUMN "author_avatar_url";