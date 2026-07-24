import type { Metadata } from 'next';
import { getGeneral, getSchools } from '@/lib/content';
import NurseryPage from './NurseryPage';

export const metadata: Metadata = {
  title: 'Straitgate Nursery & Primary School',
  description:
    'Meet Straitgate Nursery & Primary — two joyful, Christ-centered campuses in Magodo, Lagos and Forthright Gardens, Magboro, Ogun State, where every little learner is nurtured to shine.',
};

export default function StraitgateNursery() {
  const schools = getSchools();
  const general = getGeneral();

  const magodo = schools.find((school) => school.initial === 'snps-magodo');
  const forthright = schools.find((school) => school.initial === 'snps-magboro');
  const magodoAdmission = general.admission_links?.find((link) => link.name.toLowerCase().includes('magodo'));
  const forthrightAdmission = general.admission_links?.find((link) => link.name.toLowerCase().includes('forthright'));

  return (
    <NurseryPage
      magodoAddress={magodo?.address}
      forthrightAddress={forthright?.address}
      magodoApplyUrl={magodoAdmission?.url ?? 'https://straitgatemagodo.educare.school/admission-form'}
      forthrightApplyUrl={forthrightAdmission?.url ?? 'https://sgf.educare.school/admission-form'}
    />
  );
}
