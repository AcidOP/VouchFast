import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Highlight = ({ children }: IProps) => {
  return (
    <span className='bg-[linear-gradient(transparent_70%,rgba(0,188,125,0.6)_0)]'>
      {children}
    </span>
  );
};
Highlight.displayName = 'Highlight';

export default Highlight;
