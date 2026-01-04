import DashboardHeading from '../dashboard-heading';
import Container from '../layout/container';

import { PLAN_LIMITS } from '@/lib/plan-limits';

interface IProps {
  email: string;
  name: string;
  plan: 'FREE' | 'PAID';
}

const BillingInfo = ({ name, email, plan }: IProps) => {
  const tier = PLAN_LIMITS[plan];

  return (
    <Container className='flex flex-col space-y-16'>
      <DashboardHeading text='Billing Plans' />

      <section>
        <h3>Name: {name}</h3>
        <h3>Email: {email}</h3>

        <div className='mt-8'>
          <p>
            You are currently on{' '}
            <span className='text-primary font-bold'>{plan}</span> tier which
            supports up to:
          </p>

          <ul className='mt-4 list-inside list-disc space-y-2'>
            <li>{tier.listLimit} Lists</li>
            <li>{tier.testimonialLimit} Client Testimonials</li>
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default BillingInfo;
