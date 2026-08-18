import type { Metadata } from 'next';
import SecondarySchoolPage from './SecondarySchoolPage';

export const metadata: Metadata = {
  title: 'Straitgate Secondary School',
  description:
    'Explore Straitgate Secondary School — a Christ-centered learning community for Junior Secondary, Senior Secondary, and boarding students.',
};

export default function StraitgateSecondarySchool() {
  return <SecondarySchoolPage />;
}
