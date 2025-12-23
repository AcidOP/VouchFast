CREATE TYPE "public"."plan_enum" AS ENUM('FREE', 'PAID');--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "plan" "plan_enum" DEFAULT 'FREE' NOT NULL;