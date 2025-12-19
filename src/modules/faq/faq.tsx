import { siteConfig as config } from '@/config/config';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import type { ReactNode } from 'react';

const faqs = [
  {
    header: 'What is this platform used for?',
    content:
      'Our platform helps freelancers, agencies, and SaaS creators collect, manage, and showcase testimonials from their clients. You can easily gather feedback, approve testimonials, and embed them on your website.',
  },
  {
    header: 'How do I collect testimonials?',
    content:
      'You can share a unique link to your clients where they can submit their testimonials.',
  },
  {
    header: 'Is there an API to fetch testimonials?',
    content:
      'Yes, we provide a developer-friendly API that allows you to programmatically fetch testimonials and integrate them into your website or app.',
  },
  {
    header: 'Can I export my testimonials?',
    content:
      'Yes, you can export your testimonials in CSV or JSON format for backup or use in other applications.',
  },
];

const Link = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a
      href={href}
      className='text-primary underline'
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
};

const Faq = () => {
  return (
    <div id='faq' className='layout mt-28 flex flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2'>
        <h1 className='text-4xl font-black'>Frequently Asked Questions</h1>

        <p className='mt-3'>
          Have another question? Contact me on{' '}
          <Link href={config.twitter}>Twitter</Link> or by{' '}
          <Link href={`mailto:${config.email}`}>email</Link>.
        </p>
      </div>

      <Accordion type='single' collapsible className='mt-10 w-full lg:mt-0 lg:w-1/2'>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.header}</AccordionTrigger>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
