import Image from 'next/image';

import productImage from '@/assets/product.jpg';

const VideoBox = () => {
  return (
    <div className='layout my-16'>
      <div className='to-primary rounded-[8px] bg-linear-to-br from-cyan-500 via-violet-600 p-1 lg:p-16'>
        <Image src={productImage} alt='Product' className='rounded-2xl p-2' />
      </div>
    </div>
  );
};

export default VideoBox;
