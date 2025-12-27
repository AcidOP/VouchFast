import { PLANS } from '@/drizzle/schema';

export const PLAN_LIMITS = {
  [PLANS.FREE]: {
    maxLists: 1,
    maxTestimonials: 3,
  },

  [PLANS.PAID]: {
    maxLists: 10,
    maxTestimonials: Infinity,
  },
} as const;

export type PlanKey = keyof typeof PLAN_LIMITS;
