'use client';

import InfiniteMovingCards from '@/components/ui/infinite-moving-cards';

const testimonials = [
  {
    quote:
      'This platform has made collecting and showcasing testimonials effortless. My clients love how easy it is to leave feedback, and I love how professional it makes my business look.',
    name: 'Sarah Wright',
    title: 'Freelance Graphic Designer',
  },
  {
    quote:
      'We integrated the API in minutes, and now we have a dynamic testimonial section that updates automatically. Highly recommend it to any SaaS founder looking for social proof.',
    name: 'James Thompson',
    title: 'Managing Director, Creative Solutions Agency',
  },
  {
    quote:
      'Before using this, I had testimonials scattered across emails and DMs. Now, everything is in one place, and I can embed them beautifully on my website.',
    name: 'Robert Rennie',
    title: 'Marketing Manager, Tech Innovators',
  },
  {
    quote:
      'As a solo developer, this tool has been invaluable. The ability to showcase verified client testimonials on my profile has boosted my reputation significantly.',
    name: 'Alex Murphy',
    title: 'Freelance Software Developer',
  },
  {
    quote:
      "We've seen a noticeable improvement in client trust after integrating testimonials collected through this platform into our product pages. It's a game changer!",
    name: 'Kyu Nguyen',
    title: 'Software Engineer',
  },
  {
    quote:
      'As an agency, we manage multiple clients, and this tool has been a lifesaver for organizing testimonials by project!',
    name: 'Chris Martinez',
    title: 'Head of Product, WebAppify',
  },
  {
    quote:
      "Our team uses this app to manage feedback from dozens of clients. It's easy to use and helps us maintain credibility with potential customers.",
    name: 'Robert Taylor',
    title: 'CEO, Digital Marketing Agency',
  },
  {
    quote:
      'This platform has become an essential part of our sales strategy. Testimonials collected through it have directly contributed to closing new deals.',
    name: 'Josh Harris',
    title: 'Business Development Manager, SoftLabs',
  },
];

const InfiniteMovingCardsDemo = () => {
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden rounded-md pb-16 antialiased'>
      <h2 className='font-brico px-5 py-16 text-center text-3xl font-bold md:text-4xl lg:text-6xl'>
        Trusted by people all over the world
      </h2>

      <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
      <InfiniteMovingCards items={testimonials} direction='left' speed='slow' />
    </div>
  );
};

export default InfiniteMovingCardsDemo;
