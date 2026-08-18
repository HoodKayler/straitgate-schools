'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  AcademicCapIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  LightBulbIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import './primary.css';

type PrimaryPageProps = {
  magodoAddress?: string;
  forthrightAddress?: string;
  magodoApplyUrl: string;
  forthrightApplyUrl: string;
  mission: string;
  welcomeMessages: string[];
};

const quickFeatures = [
  { icon: AcademicCapIcon, title: 'Quality education', copy: 'Purposeful teaching' },
  { icon: UserGroupIcon, title: 'Individual care', copy: 'Every pupil is known' },
  { icon: ShieldCheckIcon, title: 'Safe environment', copy: 'Warm, caring campuses' },
  { icon: LightBulbIcon, title: 'Academic growth', copy: 'Confident young learners' },
  { icon: HeartIcon, title: 'Godly character', copy: 'Faith woven into each day' },
];

const learningAreas = [
  {
    title: 'Lower Primary',
    copy: 'Strong foundations in literacy, numeracy and confident classroom learning.',
    image: '/straitgate-nursery-and-primary-school-magodo1.jpg',
    icon: BookOpenIcon,
  },
  {
    title: 'Upper Primary',
    copy: 'Independent learning, problem-solving and preparation for each pupil’s next stage.',
    image: '/straitgate-nursery-and-primary-school-magodo.jpg',
    icon: AcademicCapIcon,
  },
  {
    title: 'Christian Studies',
    copy: 'Biblical principles and Christian values are woven into our educational approach.',
    image: '/straitgate-nursery-and-primary-school-magodo4.jpg',
    icon: HeartIcon,
  },
  {
    title: 'STEM Education',
    copy: 'Purposeful STEM learning develops critical thinking and technological skills.',
    image: '/straitgate-nursery-and-primary-school-magodo3.jpg',
    icon: LightBulbIcon,
  },
];

const activities = [
  'Outdoor games and sport activities',
  'Creative arts and practical projects',
  'Collaborative classroom discovery',
  'Reading, music and purposeful play',
];

const announcements = [
  {
    title: 'Admissions are open',
    copy: 'Admissions enquiries are open for the next Primary School intake at our Magodo and Forthright campuses.',
    action: 'Start an enquiry',
  },
  {
    title: 'Plan a school visit',
    copy: 'Tour our learning spaces, meet the team and see a welcoming Straitgate school day in action.',
    action: 'Plan your visit',
  },
  {
    title: 'Choose your campus',
    copy: 'Families can choose our Magodo campus in Lagos or our Forthright campus in Magboro, Ogun State.',
    action: 'View campuses',
  },
];

const gallery = [
  { src: '/straitgate-nursery-and-primary-school-magodo3.jpg', alt: 'A Straitgate Primary pupil exploring virtual reality' },
  { src: '/straitgate-nursery-and-primary-school-magodo5.jpg', alt: 'Straitgate Primary pupils performing music together' },
  { src: '/straitgate-nursery-and-primary-school-magodo4.jpg', alt: 'Primary pupils praying together at Straitgate' },
  { src: '/straitgate-nursery-and-primary-school-magodo8.jpg', alt: 'A Primary School graduation celebration at Straitgate' },
  { src: '/straitgate-nursery-and-primary-school-magodo6.jpg', alt: 'Primary pupils performing music together at Straitgate' },
  { src: '/straitgate-nursery-and-primary-school-magodo10.jpg', alt: 'Primary pupils celebrating a school milestone' },
  { src: '/straitgate-nursery-and-primary-school-magodo11.jpg', alt: 'Straitgate Primary pupils gathered for a school presentation' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.1.jpg', alt: 'Guided Primary School learning at Forthright' },
];

const testimonials = [
  {
    quote:
      'Straitgate has been an incredible blessing for our family. The academic standards are high, and our children have grown not just intellectually but in character and faith.',
    name: 'Mrs. Adebayo',
    role: 'Straitgate parent',
  },
  {
    quote:
      'Our daughter looks forward to school every morning. Her confidence, curiosity and kindness have grown beautifully because her teachers truly know and encourage her.',
    name: 'Mrs. Okafor',
    role: 'Primary School parent',
  },
  {
    quote:
      'The warm environment and strong partnership with parents give us real peace of mind. We see thoughtful learning and excellent values reflected at home every day.',
    name: 'Mr. Williams',
    role: 'Primary School parent',
  },
];

const newsItems = [
  {
    src: '/straitgate-nursery-and-primary-school-magodo1.jpg',
    alt: 'Primary pupils reading together at Straitgate',
    title: 'Make learning fun for your child',
    copy: 'Simple routines, joyful reading and purposeful activities help children become confident lifelong learners.',
    href: 'https://www.straitgateschool.org/public/index.php/schools/straitgate-nursery-and-primary-school-forthright/news/28',
  },
  {
    src: '/straitgate-nursery-and-primary-school-magodo10.jpg',
    alt: 'Straitgate Primary pupils celebrating together',
    title: 'Growing confidence every day',
    copy: 'Classroom discovery, friendship and character-building experiences make every school week memorable.',
    href: 'https://site.straitgateschool.org/schools/straitgate-nursery-and-primary-school-forthright/news/12',
  },
];

export default function PrimaryPage({
  magodoAddress,
  forthrightAddress,
  magodoApplyUrl,
  forthrightApplyUrl,
  mission,
  welcomeMessages,
}: PrimaryPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formMessage, setFormMessage] = useState('');

  const magodo = magodoAddress || '69 Alh. Bashiru Shittu, Magodo, Lagos';
  const forthright = forthrightAddress || 'Road D, Forthright Gardens Estate, Magboro, Ogun State';
  const activeTestimonial = testimonials[testimonialIndex];

  useEffect(() => {
    const page = pageRef.current;
    if (!page || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const targets = Array.from(page.querySelectorAll<HTMLElement>('.ps-reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function changeTestimonial(direction: -1 | 1) {
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  }

  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const campus = String(form.get('campus') || '').trim();
    const level = String(form.get('level') || '').trim();
    const subject = encodeURIComponent(`Straitgate Primary School admission enquiry — ${level} (${campus})`);
    const body = encodeURIComponent(
      `Hello Straitgate,\n\nMy name is ${name}.\nEmail: ${email}\nPhone: ${phone}\nCampus of interest: ${campus}\nPrimary level of interest: ${level}\n\nPlease contact me about the next Primary School admission intake.`,
    );

    setFormMessage('Your email app is opening with your enquiry prepared.');
    window.location.href = `mailto:info@straitgateschool.org?subject=${subject}&body=${body}`;
  }

  return (
    <div ref={pageRef} className="primary-school">
      <section className="ps-hero" aria-labelledby="primary-hero-title">
        <div className="ps-hero-pattern" aria-hidden="true" />
        <div className="ps-container ps-hero-grid">
          <div className="ps-hero-copy ps-reveal is-visible">
            <p className="ps-eyebrow"><span /> Straitgate Primary School</p>
            <h1 id="primary-hero-title">
              Building bright minds with <em>godly character.</em>
            </h1>
            <p className="ps-hero-lead">
              Excellent learning, strong values and individual care help every Primary pupil grow with confidence and purpose.
            </p>
            <div className="ps-actions">
              <a className="ps-button ps-button-primary" href="#contact">
                Enquire about admission <ArrowRightIcon aria-hidden="true" />
              </a>
              <a className="ps-button ps-button-secondary" href="#programmes">
                Explore our programmes
              </a>
            </div>
            <div className="ps-hero-note">
              <CheckCircleIcon aria-hidden="true" />
              <span>Christ-centered education across Magodo and Forthright</span>
            </div>
          </div>

          <div className="ps-hero-visual ps-reveal is-visible">
            <div className="ps-hero-orbit" aria-hidden="true" />
            <div className="ps-hero-image">
              <Image
                src="/straitgate-nursery-and-primary-school-magodo2.jpg"
                alt="Straitgate Primary School pupils learning with tablets"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 46vw"
              />
            </div>
            <div className="ps-floating-card ps-floating-card-top">
              <SparklesIcon aria-hidden="true" />
              <span><strong>Purposeful</strong> learning</span>
            </div>
            <div className="ps-floating-card ps-floating-card-bottom">
              <ShieldCheckIcon aria-hidden="true" />
              <span><strong>Safe, caring</strong> community</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-feature-strip" aria-label="Primary School strengths">
        <div className="ps-container ps-feature-grid">
          {quickFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title}>
                <span className="ps-feature-icon"><Icon aria-hidden="true" /></span>
                <div><h2>{feature.title}</h2><p>{feature.copy}</p></div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="ps-section ps-about">
        <div className="ps-container ps-about-grid ps-reveal">
          <div className="ps-collage">
            <div className="ps-collage-main">
              <Image
                src="/straitgate-nursery-and-primary-school-magodo.jpg"
                alt="Straitgate Primary pupils reading together"
                fill
                sizes="(max-width: 900px) 90vw, 44vw"
              />
            </div>
            <div className="ps-collage-small">
              <Image
                src="/straitgate-nursery-and-primary-school-forthright-gallery.jpg"
                alt="Primary pupils learning at the Forthright campus"
                fill
                sizes="(max-width: 600px) 46vw, 18vw"
              />
            </div>
            <div className="ps-collage-badge"><HeartIcon aria-hidden="true" /><span>Known.<br />Guided.<br />Encouraged.</span></div>
          </div>

          <div className="ps-about-copy">
            <p className="ps-kicker">Get to know our Primary School</p>
            <h2>A strong foundation for learning and life</h2>
            <p className="ps-lead">{mission}</p>
            <div className="ps-check-list">
              {welcomeMessages.map((message) => (
                <p key={message}><CheckCircleIcon aria-hidden="true" /><span>{message}</span></p>
              ))}
            </div>
            <a className="ps-text-link" href="#programmes">Discover the learning journey <ArrowRightIcon aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="programmes" className="ps-section ps-programmes" aria-labelledby="programmes-title">
        <div className="ps-container">
          <div className="ps-section-heading ps-reveal">
            <p className="ps-kicker">Primary learning journey</p>
            <h2 id="programmes-title">Programmes that help pupils thrive</h2>
            <p>Academic foundations, faith and practical discovery come together in a well-rounded Primary School experience.</p>
          </div>
          <div className="ps-programme-grid ps-reveal">
            {learningAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article className="ps-programme-card" key={area.title}>
                  <div className="ps-programme-image">
                    <Image src={area.image} alt={`Straitgate ${area.title}`} fill sizes="(max-width: 700px) 92vw, (max-width: 1080px) 46vw, 24vw" />
                    <span><Icon aria-hidden="true" /></span>
                  </div>
                  <div className="ps-programme-copy"><h3>{area.title}</h3><p>{area.copy}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ps-section ps-activities">
        <div className="ps-container ps-activities-grid ps-reveal">
          <div className="ps-activities-copy">
            <p className="ps-kicker ps-kicker-light">Beyond the classroom</p>
            <h2>Learning grows through active discovery</h2>
            <p>Primary pupils have room to imagine, collaborate, practise new skills and build lasting friendships.</p>
            <ul>
              {activities.map((activity) => <li key={activity}><CheckCircleIcon aria-hidden="true" />{activity}</li>)}
            </ul>
            <a className="ps-button ps-button-light" href="#gallery">See school life</a>
          </div>
          <div className="ps-activities-image">
            <Image
              src="/straitgate-nursery-and-primary-school-magodo5.jpg"
              alt="Straitgate Primary pupils performing music together"
              fill
              sizes="(max-width: 900px) 92vw, 43vw"
            />
          </div>
        </div>
      </section>

      <section className="ps-section ps-updates" aria-labelledby="updates-title">
        <div className="ps-container">
          <div className="ps-section-heading ps-reveal">
            <p className="ps-kicker">From the school desk</p>
            <h2 id="updates-title">Your next step with Straitgate</h2>
          </div>
          <div className="ps-update-grid ps-reveal">
            {announcements.map((item, index) => (
              <article key={item.title}>
                <span className="ps-update-number">0{index + 1}</span>
                <h3>{item.title}</h3><p>{item.copy}</p>
                <a href={index === 2 ? '#campuses' : '#contact'}>{item.action} <ArrowRightIcon aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="campuses" className="ps-campus-band" aria-labelledby="campus-title">
        <div className="ps-container ps-campus-inner ps-reveal">
          <div>
            <p className="ps-kicker ps-kicker-light">Ready to apply?</p>
            <h2 id="campus-title">Choose the campus that works for your family.</h2>
          </div>
          <div className="ps-campus-links">
            <a href={magodoApplyUrl} target="_blank" rel="noreferrer"><MapPinIcon aria-hidden="true" /><span><strong>Magodo campus</strong><small>Lagos · Open application form</small></span><ArrowRightIcon aria-hidden="true" /></a>
            <a href={forthrightApplyUrl} target="_blank" rel="noreferrer"><MapPinIcon aria-hidden="true" /><span><strong>Forthright campus</strong><small>Magboro · Open application form</small></span><ArrowRightIcon aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="gallery" className="ps-section ps-gallery" aria-labelledby="gallery-title">
        <div className="ps-container">
          <div className="ps-gallery-heading ps-reveal">
            <div><p className="ps-kicker">Everyday joy at Straitgate</p><h2 id="gallery-title">Primary School life</h2></div>
            <div className="ps-gallery-controls">
              <button type="button" aria-label="Scroll gallery left" onClick={() => galleryRef.current?.scrollBy({ left: -380, behavior: 'smooth' })}><ChevronLeftIcon /></button>
              <button type="button" aria-label="Scroll gallery right" onClick={() => galleryRef.current?.scrollBy({ left: 380, behavior: 'smooth' })}><ChevronRightIcon /></button>
            </div>
          </div>
          <div ref={galleryRef} className="ps-gallery-track ps-reveal">
            {gallery.map((image, index) => (
              <figure key={image.src} className={index % 3 === 1 ? 'ps-gallery-tall' : ''}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 78vw, 30vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="ps-testimonial" aria-labelledby="testimonial-title">
        <div className="ps-container ps-testimonial-grid ps-reveal">
          <div className="ps-testimonial-image">
            <Image src="/straitgate-nursery-and-primary-school-magodo10.jpg" alt="Straitgate Primary pupils celebrating together" fill sizes="(max-width: 800px) 92vw, 42vw" />
          </div>
          <div className="ps-testimonial-copy">
            <p className="ps-kicker ps-kicker-light">What families say</p>
            <h2 id="testimonial-title">A community parents trust</h2>
            <span className="ps-quote-mark" aria-hidden="true">“</span>
            <blockquote key={testimonialIndex}>{activeTestimonial.quote}</blockquote>
            <p className="ps-cite"><strong>{activeTestimonial.name}</strong><span>{activeTestimonial.role}</span></p>
            <div className="ps-testimonial-controls">
              <button type="button" aria-label="Previous testimonial" onClick={() => changeTestimonial(-1)}><ChevronLeftIcon /></button>
              <span>{String(testimonialIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
              <button type="button" aria-label="Next testimonial" onClick={() => changeTestimonial(1)}><ChevronRightIcon /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="ps-section ps-news" aria-labelledby="news-title">
        <div className="ps-container">
          <div className="ps-section-heading ps-reveal"><p className="ps-kicker">Stories from our community</p><h2 id="news-title">Latest from Straitgate</h2></div>
          <div className="ps-news-grid ps-reveal">
            {newsItems.map((item) => (
              <article key={item.title}>
                <div className="ps-news-image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 92vw, 45vw" /></div>
                <div className="ps-news-copy"><span>School life</span><h3>{item.title}</h3><p>{item.copy}</p><a href={item.href} target="_blank" rel="noreferrer">Read more <ArrowRightIcon aria-hidden="true" /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="ps-section ps-contact" aria-labelledby="contact-title">
        <div className="ps-container ps-contact-grid ps-reveal">
          <div className="ps-contact-copy">
            <p className="ps-kicker">Admission enquiries</p>
            <h2 id="contact-title">Let&apos;s talk about your child&apos;s Primary journey.</h2>
            <p>Share a few details and your email app will open with a prepared message for the Straitgate admissions team.</p>
            <div className="ps-addresses">
              <p><MapPinIcon aria-hidden="true" /><span><strong>Magodo campus</strong>{magodo}</span></p>
              <p><MapPinIcon aria-hidden="true" /><span><strong>Forthright campus</strong>{forthright}</span></p>
            </div>
          </div>
          <form onSubmit={handleEnquiry}>
            <div className="ps-field-row">
              <label>Your name<input name="name" type="text" autoComplete="name" required /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
            </div>
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
            <div className="ps-field-row">
              <label>Campus<select name="campus" defaultValue="" required><option value="" disabled>Choose a campus</option><option>Magodo (Lagos)</option><option>Forthright (Magboro)</option></select></label>
              <label>Primary level<select name="level" defaultValue="" required><option value="" disabled>Choose a level</option><option>Lower Primary</option><option>Upper Primary</option><option>Not sure yet</option></select></label>
            </div>
            <button className="ps-button ps-button-primary" type="submit">Prepare enquiry <ArrowRightIcon aria-hidden="true" /></button>
            <p className="ps-form-status" aria-live="polite">{formMessage}</p>
          </form>
        </div>
      </section>

      <div className="ps-final-link"><Link href="/contact">Prefer to contact the main school office? <span>Talk to us →</span></Link></div>
    </div>
  );
}
