'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  FireIcon,
  GiftIcon,
  HeartIcon,
  LanguageIcon,
  MapPinIcon,
  SparklesIcon,
  StarIcon,
  SunIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import SchoolGallery from '@/components/schools/SchoolGallery';
import FacilitiesStackSection from '@/components/schools/FacilitiesStackSection';

type NurseryPageProps = {
  magodoAddress?: string;
  forthrightAddress?: string;
  magodoApplyUrl: string;
  forthrightApplyUrl: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
} as const;

const float = (delay = 0) => ({
  animate: { y: [0, -14, 0], rotate: [0, 4, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay } as const,
});

const pillars = [
  {
    title: 'Excellence',
    description: 'Consistently outstanding performance in national and international assessments.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Awards',
    description: 'Victories in spelling bees, mathematics contests, and creative writing competitions.',
    icon: TrophyIcon,
  },
  {
    title: 'Digital Learning',
    description: 'Modern digital tools including interactive boards and an LMS for blended learning.',
    icon: ComputerDesktopIcon,
  },
  {
    title: 'Christian Values',
    description: 'Faith, integrity, and compassion woven into daily school life and character formation.',
    iconImage: '/sgpics/cross-icon.png',
  },
  {
    title: 'Sports',
    description: 'Active sports and games that build teamwork, discipline, fitness, and healthy competition.',
    icon: FireIcon,
  },
  {
    title: 'Science Projects',
    description: 'Hands-on experiments and projects that spark curiosity and practical understanding.',
    icon: BeakerIcon,
  },
  {
    title: 'Bilingualism',
    description: 'Confident communication and language skills nurtured for a truly global perspective.',
    icon: LanguageIcon,
  },
  {
    title: 'Charity',
    description: 'Service and giving that grow kindness, empathy, and social responsibility in every pupil.',
    icon: GiftIcon,
  },
];

const pillarThemes = [
  { bg: 'bg-[#FFF3D6]', icon: 'bg-[#F0B429]' },
  { bg: 'bg-[#E3F5FF]', icon: 'bg-[#3AA9DB]' },
  { bg: 'bg-[#FFE7DE]', icon: 'bg-[#FF7A50]' },
  { bg: 'bg-[#E7F8E8]', icon: 'bg-[#5FC169]' },
  { bg: 'bg-[#F2EAFB]', icon: 'bg-[#A98AE0]' },
];

const facilities = [
  { title: 'Science Lab', description: 'Simple science and discovery space.', image: '/sgpics/home-stem-club.jpg' },
  { title: 'ICT Lab', description: 'Digital skills and computer learning.', image: '/sgpics/home-stem-club.jpg' },
  { title: 'Library', description: 'Reading and independent study.', image: '/sgpics/home-press-club.jpg' },
  { title: 'Playground', description: 'Active play, teamwork, and fitness.', image: '/sgpics/home-football-academy.jpg' },
  { title: 'Music Room', description: 'Music, rehearsal, and performance room.', image: '/sgpics/home-music-performing-arts.jpg' },
  { title: 'E-Classrooms', description: 'Interactive lessons and digital learning.', image: '/sgpics/home-stem-club.jpg' },
];

const galleryImages = [
  { src: '/straitgate-nursery-and-primary-school-magodo.jpg', alt: 'Magodo branch pupil life', label: 'Magodo — Focused learning' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.jpg', alt: 'Forthright branch pupil life', label: 'Forthright — Focused learning' },
  { src: '/straitgate-nursery-and-primary-school-magodo1.jpg', alt: 'Magodo branch pupil life', label: 'Magodo — Pupil community' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.1.jpg', alt: 'Forthright branch pupil life', label: 'Forthright — Pupil community' },
  { src: '/straitgate-nursery-and-primary-school-magodo4.jpg', alt: 'Magodo branch pupil life', label: 'Magodo — Pupil collaboration' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.2.jpg', alt: 'Forthright branch pupil life', label: 'Forthright — Purposeful campus' },
  { src: '/straitgate-nursery-and-primary-school-magodo9.jpg', alt: 'Magodo branch pupil life', label: 'Magodo — Active pupil life' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.3.jpg', alt: 'Forthright branch pupil life', label: 'Forthright — Guided study' },
];

export default function NurseryPage({
  magodoAddress,
  forthrightAddress,
  magodoApplyUrl,
  forthrightApplyUrl,
}: NurseryPageProps) {
  const branches = [
    {
      key: 'magodo',
      tag: 'Lagos Campus',
      name: 'Straitgate Nursery & Primary — Magodo',
      quote: 'Nurturing young minds with godly principles and a global perspective.',
      head: 'Mrs. Ugochi Madubuike',
      photo: '/straitgate-nursery-and-primary-school-magodo-head.jpg',
      address: magodoAddress || 'Plot 86 Block 122 Alh. Basheer Shittu Street, Magodo, Lagos',
      applyUrl: magodoApplyUrl,
      cardBg: 'bg-[#EAF7FF]',
      cardBorder: 'border-[#BFE7FB]',
      blob: 'bg-[#BFE7FB]',
      badge: 'bg-[#1E8FC4]',
      button: 'bg-[#1E8FC4] hover:bg-[#176E99]',
      rotate: '-rotate-2',
    },
    {
      key: 'forthright',
      tag: 'Ogun State Campus',
      name: 'Straitgate Nursery & Primary — Forthright',
      quote: 'Every child is a star waiting to shine.',
      head: 'Mrs. Gbemisola Mordi',
      photo: '/straitgate-nursery-and-primary-school-forthright-head.jpg',
      address: forthrightAddress || 'Road D, Forthright Gardens, Magboro, Ogun State',
      applyUrl: forthrightApplyUrl,
      cardBg: 'bg-[#FFF6E3]',
      cardBorder: 'border-[#F5DFA0]',
      blob: 'bg-[#F5DFA0]',
      badge: 'bg-[#D98E1B]',
      button: 'bg-[#D98E1B] hover:bg-[#B8760F]',
      rotate: 'rotate-2',
    },
  ];

  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-[#FFF6E3] via-[#EAF7FF] to-white">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent sm:h-40" aria-hidden="true" />
        <motion.div {...float(0)} className="absolute left-[6%] top-28 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
          <SunIcon className="h-8 w-8 text-[#F0B429]" />
        </motion.div>
        <motion.div {...float(0.6)} className="absolute right-[10%] top-40 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
          <StarIcon className="h-7 w-7 text-[#3AA9DB]" />
        </motion.div>
        <motion.div {...float(1.2)} className="absolute bottom-40 left-[12%] flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
          <HeartIcon className="h-7 w-7 text-primary" />
        </motion.div>
        <motion.div {...float(0.3)} className="absolute bottom-56 right-[8%] flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/5">
          <SparklesIcon className="h-8 w-8 text-[#A98AE0]" />
        </motion.div>
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#F5DFA0]/40 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#BFE7FB]/50 blur-3xl" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 pt-28 pb-24 text-center sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mt-7 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-dark sm:text-6xl lg:text-7xl"
          >
            Straitgate <span className="text-primary">Nursery</span> &amp; Primary
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl"
          >
            A colourful, caring place to take a child&apos;s very first steps in learning — where
            little hands build, little voices sing, and little hearts grow in faith, together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#branches"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Meet Our Two Branches
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-dark/10 bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-dark shadow-md transition-colors hover:border-primary hover:text-primary"
            >
              Come Visit Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="mt-14 flex flex-wrap items-center justify-center gap-3"
          >
            {['Play-based learning', 'Caring, gentle teachers', 'Safe & joyful campuses'].map((label) => (
              <span
                key={label}
                className="rounded-full bg-white/80 px-5 py-2.5 text-sm font-bold text-dark shadow-sm backdrop-blur"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        <svg viewBox="0 0 1440 110" className="absolute bottom-0 left-0 block w-full text-white" preserveAspectRatio="none" aria-hidden="true">
          <path
            fill="currentColor"
            d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,48 L1440,120 L0,120 Z"
          />
        </svg>
      </section>

      <section id="branches" className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl">
              Choose Your Branch
            </p>
            <h2 className="mt-4 text-xl font-semibold leading-8 text-dark sm:text-2xl">
              One big Straitgate family, two happy places to grow.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
            {branches.map((branch, index) => {
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`;

              return (
                <motion.article
                  key={branch.key}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-[2.5rem] border-2 ${branch.cardBorder} ${branch.cardBg} p-7 shadow-xl shadow-black/5 sm:p-9`}
                >
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${branch.blob}/60 blur-2xl`} aria-hidden="true" />

                  <span className={`relative inline-flex items-center gap-2 rounded-full ${branch.badge} px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-white`}>
                    <MapPinIcon className="h-3.5 w-3.5" />
                    {branch.tag}
                  </span>

                  <div className="relative mt-7 flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className={`relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-[1.75rem] border-4 border-white shadow-lg ${branch.rotate} sm:mx-0`}>
                      <Image src={branch.photo} alt={`Head of school for ${branch.name}`} fill sizes="160px" className="object-cover object-top" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-dark/50">Head of School</p>
                      <h3 className="mt-1 font-serif text-2xl font-bold text-dark">{branch.head}</h3>
                      <p className="mt-3 text-base italic leading-7 text-gray-600">&quot;{branch.quote}&quot;</p>
                    </div>
                  </div>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-7 flex items-start gap-2 rounded-2xl bg-white/70 p-4 text-sm font-semibold leading-6 text-dark transition-colors hover:bg-white"
                  >
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {branch.address}
                  </a>

                  <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={branch.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full ${branch.button} px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-md transition-transform hover:-translate-y-0.5`}
                    >
                      Register at {branch.tag.split(' ')[0]}
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-dark/10 bg-white px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-dark transition-colors hover:border-primary hover:text-primary"
                    >
                      Get Directions
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FBF8F2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl">
              Why Kids Love It Here
            </p>
            <h2 className="mt-4 text-xl font-semibold leading-8 text-dark sm:text-2xl">
              Faith, fun, and firm foundations — every single day.
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const theme = pillarThemes[index % pillarThemes.length];
              const Icon = pillar.icon;
              const rotation = index % 2 === 0 ? '-rotate-1' : 'rotate-1';

              return (
                <motion.div
                  key={pillar.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: (index % 4) * 0.08 }}
                  whileHover={{ y: -6, rotate: 0, scale: 1.03 }}
                  tabIndex={0}
                  className={`${theme.bg} ${rotation} flex flex-col items-center rounded-3xl p-5 text-center shadow-md shadow-black/5 outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/30 sm:p-6`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.icon} text-white shadow-md`}>
                    {pillar.iconImage ? (
                      <Image src={pillar.iconImage} alt="" width={26} height={26} className="h-6 w-6 object-contain brightness-0 invert" />
                    ) : Icon ? (
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold leading-tight text-dark">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SchoolGallery
        images={galleryImages}
        subtitle="Bright classrooms and big smiles from both our Magodo and Forthright branches."
      />

      <FacilitiesStackSection
        facilities={facilities}
        subtitle="Purpose-built spaces for play, discovery, and growth across both branches."
      />

      <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#172554] lg:block" aria-hidden="true" />
        <div className="absolute left-10 top-10 h-3 w-3 rounded-full bg-white/40" aria-hidden="true" />
        <div className="absolute left-24 top-24 h-2 w-2 rounded-full bg-white/30" aria-hidden="true" />
        <div className="absolute right-16 bottom-16 h-3 w-3 rounded-full bg-white/30" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div {...fadeUp}>
            <p className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">Admissions Now Open</p>
            <h2 className="mt-4 text-xl font-semibold leading-8 text-white/90 sm:text-2xl">
              Ready to start your child&apos;s Straitgate journey?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Pick a branch and register today. Our admissions team will guide you through
              requirements, a campus visit, and placement.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="rounded-[2rem] bg-white p-7 text-dark shadow-2xl sm:p-9">
            <UserGroupIcon className="h-9 w-9 text-primary" />
            <h3 className="mt-5 text-2xl font-bold">Register at a Branch</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Choose Magodo or Forthright and complete the application form — we&apos;ll take it
              from there.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={magodoApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center bg-primary px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-primary-dark"
              >
                Magodo
              </a>
              <a
                href={forthrightApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center bg-primary px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-primary-dark"
              >
                Forthright
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center border border-black/15 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-dark transition-colors hover:border-primary hover:text-primary"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
