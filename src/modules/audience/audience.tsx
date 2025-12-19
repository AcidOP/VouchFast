import { MdAddBusiness } from 'react-icons/md';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import { SiFreelancer } from 'react-icons/si';

import type { IconType } from 'react-icons';

interface BoxProps {
  heading: string;
  description: string;
  Icon: IconType;
}

const Box = ({ heading, description, Icon }: BoxProps) => {
  return (
    <div className='bg-accent rounded-2xl p-10 transition duration-200 hover:rotate-1 lg:hover:scale-105'>
      <Icon size={50} className='text-primary' />
      <h2 className="'mt-5 lg:text-3xl' text-2xl font-black lg:mt-10">{heading}</h2>
      <p className='mt-2 text-lg font-medium text-zinc-400 lg:mt-5'>{description}</p>
    </div>
  );
};

const uses = [
  {
    heading: 'Freelancers',
    description: 'Collect more testimonials to make more money 💰',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Icon: SiFreelancer,
  },
  {
    heading: 'Agencies',
    description: 'Streamline testimonial collection and approval across teams.',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Icon: MdAddBusiness,
  },
  {
    heading: 'SaaS Founders',
    description:
      'Automate gathering customer feedback and build trust with potential users.',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Icon: RiLightbulbFlashLine,
  },
];

const Audience = () => {
  return (
    <div className='layout w-full pt-24 pb-16'>
      <h2 className='my-16 text-center text-4xl font-bold lg:text-9xl'>
        Who is VouchFast for?
      </h2>

      <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {uses.map(use => {
          return <Box key={use.heading} {...use} />;
        })}
      </section>
    </div>
  );
};

export default Audience;
