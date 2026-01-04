import type { Plan } from '@/drizzle/schema';

type PlanLimits = {
  listLimit: number;
  testimonialLimit: number;
};

export const PLAN_LIMITS: Record<Plan, PlanLimits> = {
  FREE: { listLimit: 1, testimonialLimit: 3 },
  PAID: { listLimit: 15, testimonialLimit: 10_000 },
};
