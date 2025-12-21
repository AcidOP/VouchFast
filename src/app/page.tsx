import Audience from '@/modules/audience';
import Compare from '@/modules/compare';
import CTA from '@/modules/cta';
import Faq from '@/modules/faq';
import Homepage from '@/modules/home';
import Pricing from '@/modules/pricing';
import ProductBox from '@/modules/product-desc';
import Consequences from '@/modules/purpose/problem-box';
import Testimonials from '@/modules/testimonials';

export const dynamic = 'force-static';

const Index = () => {
  return (
    <>
      <Homepage />
      <ProductBox />
      <Consequences />
      <Compare />
      <Audience />
      <Pricing />
      <Testimonials />
      <CTA />
      <Faq />
    </>
  );
};

export default Index;
