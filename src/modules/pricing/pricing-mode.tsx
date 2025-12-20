export type PricingBoxProps = {
  heading: string;
  price: string | number;
  originalPrice?: string | number;
  description: string;
  features: string[];
  subheading: string;
  active?: boolean;
  link: string;
};

const pricingModel: PricingBoxProps[] = [
  {
    heading: 'Free',
    price: '$0',
    description:
      'Get unlimited access to VouchFast for free and collect upto 3 testimonials.',
    features: [
      '3 free testimonials',
      'Invite upto 3 clients',
      'Limited Dashboard access',
      'Lifetime access',
      'Dedicated Landing Page',
    ],
    subheading: 'No credit card required.',
    link: '/auth',
  },
  {
    heading: 'Lifetime',
    price: '$9.99',
    originalPrice: '$29.99',
    description:
      'Everything from Free plan and more. Get unlimited access to VouchFast for lifetime and collect unlimited testimonials.',
    features: [
      'Unlimited Testimonials',
      'Unlimited clients',
      'Full Dashboard access',
      'API access',
      'Priority Customer Support',
      'Discord Community Access',
    ],
    subheading: 'Pay once. Use forever.',
    active: true,
    link: '/get-vouchfast',
  },
];

export default pricingModel;
