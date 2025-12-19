import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: 'variable',
});

const grotesque = Bricolage_Grotesque({
  variable: '--font-brico',
  subsets: ['latin'],
  weight: 'variable',
});

export { jakarta, grotesque };
