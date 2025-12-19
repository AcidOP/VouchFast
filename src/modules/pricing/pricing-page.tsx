import PricingBox from './pricing-box';
import pricingModel from './pricing-mode';

const Pricing = () => {
  return (
    <div id='pricing' className='layout mb-24 lg:my-36'>
      <h2 className='text-center text-7xl font-black md:text-9xl'>Pricing</h2>
      <p className='mt-3 text-center text-sm font-medium text-gray-400 md:text-xl'>
        Whether you are a freelancer, or an agency owner or a Founder,
        <br className='hidden sm:block' /> we have your back.
      </p>

      <section className='mt-16 flex flex-col justify-between gap-8 md:flex-row lg:gap-10 lg:px-16'>
        {pricingModel.map((pricing, index) => (
          <PricingBox key={index} {...pricing} />
        ))}
      </section>
    </div>
  );
};

export default Pricing;
