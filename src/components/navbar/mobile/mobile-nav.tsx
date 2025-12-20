'use client';

import { useEffect, useState } from 'react';

import { Menu, X } from 'lucide-react';

const Nav = () => {
  return <p>Hello</p>;
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const Icon = isOpen ? X : Menu;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className='lg:hidden'>
      <Icon onClick={toggle} size={35} />
      {isOpen && <Nav />}
    </div>
  );
};

export default MobileNav;
