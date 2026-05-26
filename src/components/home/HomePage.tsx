'use client';

import { General, School, Curriculum, Testimonial, NewsPost } from '@/lib/content';
import HeroSection from './HeroSection';
import WelcomeSection from './WelcomeSection';
import MissionVisionSection from './MissionVisionSection';
import CurriculumSection from './CurriculumSection';
import AlumniSection from './AlumniSection';
import NewsSection from './NewsSection';
import TestimonialsSection from './TestimonialsSection';
import MapSection from './MapSection';

export interface HomePageData {
  general: General;
  schools: School[];
  curricula: Curriculum[];
  testimonials: Testimonial[];
  featuredPost: NewsPost | null;
  posts: NewsPost[];
}

export default function HomePage({ data }: { data: HomePageData }) {
  return (
    <>
      <HeroSection general={data.general} />
      <WelcomeSection general={data.general} />
      <MissionVisionSection general={data.general} />
      <CurriculumSection curricula={data.curricula} />
      <AlumniSection schools={data.schools} />
      <MapSection />
      <NewsSection featuredPost={data.featuredPost} posts={data.posts} schools={data.schools} />
      <TestimonialsSection testimonials={data.testimonials} />
    </>
  );
}
