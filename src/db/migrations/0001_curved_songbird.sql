ALTER TABLE "testimonial" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "testimonial" ALTER COLUMN "status" SET DEFAULT 'PENDING'::text;--> statement-breakpoint
DROP TYPE "public"."testimonial_status";--> statement-breakpoint
CREATE TYPE "public"."testimonial_status" AS ENUM('PENDING', 'APPROVED');--> statement-breakpoint
ALTER TABLE "testimonial" ALTER COLUMN "status" SET DEFAULT 'PENDING'::"public"."testimonial_status";--> statement-breakpoint
ALTER TABLE "testimonial" ALTER COLUMN "status" SET DATA TYPE "public"."testimonial_status" USING "status"::"public"."testimonial_status";