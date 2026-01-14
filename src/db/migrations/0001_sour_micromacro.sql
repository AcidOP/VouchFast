CREATE TYPE "public"."testimonial_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TABLE "list" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonial" (
	"id" text PRIMARY KEY NOT NULL,
	"list_id" text NOT NULL,
	"author_name" text NOT NULL,
	"author_title" text,
	"author_company" text,
	"author_avatar_url" text,
	"rating" integer,
	"content" text NOT NULL,
	"status" "testimonial_status" DEFAULT 'pending' NOT NULL,
	"approved_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "list" ADD CONSTRAINT "list_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "testimonial" ADD CONSTRAINT "testimonial_list_id_list_id_fk" FOREIGN KEY ("list_id") REFERENCES "public"."list"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "list_userId_idx" ON "list" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "list_createdAt_idx" ON "list" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "testimonial_listId_idx" ON "testimonial" USING btree ("list_id");--> statement-breakpoint
CREATE INDEX "testimonial_status_idx" ON "testimonial" USING btree ("status");--> statement-breakpoint
CREATE INDEX "testimonial_list_status_created_idx" ON "testimonial" USING btree ("list_id","status","created_at");