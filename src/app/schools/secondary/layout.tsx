import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: '--font-secondary-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function SecondarySchoolLayout({ children }: { children: ReactNode }) {
  return <div className={poppins.variable}>{children}</div>;
}
