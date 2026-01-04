import type { Plan } from '@/drizzle/schema';

type PlanLimits = {
  listLimit: number;
  testimonialLimit: number;
};

export const PLAN_LIMITS: Record<Plan, PlanLimits> = {
  FREE: { listLimit: 3, testimonialLimit: 30 },
  PAID: { listLimit: 100, testimonialLimit: 1000 },
};
