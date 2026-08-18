'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import { usePathname } from 'next/navigation';
import { General, School } from '@/lib/content';

interface LayoutShellProps {
  children: React.ReactNode;
  general: General;
  schools: School[];
}

export default function LayoutShell({ children, general, schools }: LayoutShellProps) {
  const pathname = usePathname();
  const hasRouteSpecificFooter = pathname === '/schools/secondary' || pathname === '/schools/secondary/';

  return (
    <>
      <Navbar schools={schools} admissionLinks={general.admission_links ?? []} />
      <main className="flex-1">{children}</main>
      {hasRouteSpecificFooter ? null : <Footer general={general} schools={schools} />}
      <ChatWidget general={general} schools={schools} />
    </>
  );
}
