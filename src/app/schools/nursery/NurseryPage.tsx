'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useRef, useState } from 'react';
import './playful.css';

type NurseryPageProps = {
  magodoAddress?: string;
  forthrightAddress?: string;
  magodoApplyUrl: string;
  forthrightApplyUrl: string;
};

const choiceItems = [
  {
    icon: '◎',
    title: 'Christ-centered care',
    copy: 'Faith, kindness and godly character are woven through every school day.',
    color: 'pink',
  },
  {
    icon: '✎',
    title: 'Extra activities',
    copy: 'Clubs, creative arts and sports make each school day richer and more joyful.',
    color: 'green',
  },
  {
    icon: '⌖',
    title: 'Complete tracking',
    copy: 'Teachers and families stay connected to every child’s progress and growth.',
    color: 'sun',
  },
  {
    icon: '▣',
    title: 'Individual care',
    copy: 'A warm community where every pupil is seen, known and encouraged to shine.',
    color: 'sky',
  },
];

const featuredCourses = [
  { icon: 'lotus', title: ['Nursery', '& Pre-K'], color: 'pink' },
  { icon: 'book', title: ['Lower', 'Primary'], color: 'pink' },
  { icon: 'school', title: ['Upper', 'Primary'], color: 'blue' },
  { icon: 'shirt', title: ['Activity', 'Clubs'], color: 'blue' },
];

const activities = ['Outdoor Games', 'Table/Floor Toys', 'Sport Activities', 'Water Games'];

const gallery = [
  { src: '/straitgate-nursery-and-primary-school-magodo.jpg', alt: 'Straitgate Magodo pupils learning together' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.jpg', alt: 'Straitgate Forthright pupils at play' },
  { src: '/straitgate-nursery-and-primary-school-magodo4.jpg', alt: 'Young Straitgate learners collaborating' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.1.jpg', alt: 'Straitgate Forthright classroom life' },
  { src: '/straitgate-nursery-and-primary-school-magodo9.jpg', alt: 'Active pupil life at Straitgate Magodo' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.2.jpg', alt: 'A colourful Straitgate learning moment' },
  { src: '/straitgate-nursery-and-primary-school-magodo11.jpg', alt: 'Reading time at Straitgate Magodo' },
  { src: '/straitgate-nursery-and-primary-school-forthright-gallery.3.jpg', alt: 'Guided study at Straitgate Forthright' },
];

const newsItems = [
  {
    src: '/nursery-playful/reference-sections/news-1.jpg',
    alt: 'A child enjoying a book outdoors',
    title: 'Make learning fun for your child',
    date: 'June 10, 2026',
    copy: 'Simple routines, joyful reading and purposeful play help children become confident lifelong learners.',
    href: 'https://www.straitgateschool.org/public/index.php/schools/straitgate-nursery-and-primary-school-forthright/news/28',
  },
  {
    src: '/nursery-playful/reference-sections/news-2.jpg',
    alt: 'Two children lying together and smiling',
    title: 'Growing confidence every day',
    date: 'May 24, 2026',
    copy: 'Classroom discovery, friendship and character-building experiences make every school week memorable.',
    href: 'https://site.straitgateschool.org/schools/straitgate-nursery-and-primary-school-forthright/news/12',
  },
];

function CourseGlyph({ type }: { type: string }) {
  if (type === 'school') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 27V13h22v14M3 27h26M8 13V9h10v4M18 9V5h7M25 5v4h-7M10 17h4v4h-4zM18 17h4v10h-4z" />
      </svg>
    );
  }

  if (type === 'book') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M4 9c5-2 9-1 12 2v16c-3-3-7-4-12-2V9Zm24 0c-5-2-9-1-12 2v16c3-3 7-4 12-2V9ZM12 7l1-3m4 3V3m4 5 2-3" />
        <path d="M10 14c2 0 4 .5 6 2m-6 3c2 0 4 .5 6 2m6-7c-2 0-4 .5-6 2m6 3c-2 0-4 .5-6 2" />
      </svg>
    );
  }

  if (type === 'lotus') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 25c-1-7 2-12 7-15 1 6-1 11-7 15Zm0 0c1-7-2-12-7-15-1 6 1 11 7 15Zm0-1c-5-2-10-1-14 3 5 3 10 2 14-2m0 0c5-2 10-1 14 3-5 3-10 2-14-2M16 7c-4 4-4 9 0 15 4-6 4-11 0-15Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m11 6-7 4 4 7 3-2v12h10V15l3 2 4-7-7-4c-1 3-3 4-5 4s-4-1-5-4Z" />
      <path d="M13 18h6m-6 4h6" />
    </svg>
  );
}

export default function NurseryPage({
  magodoAddress,
  forthrightAddress,
  magodoApplyUrl,
  forthrightApplyUrl,
}: NurseryPageProps) {
  const [formMessage, setFormMessage] = useState('');
  const galleryTrackRef = useRef<HTMLDivElement>(null);

  const magodo = magodoAddress || 'Plot 86 Block 122 Alh. Basheer Shittu Street, Magodo, Lagos';
  const forthright = forthrightAddress || 'Road D, Forthright Gardens, Magboro, Ogun State';
  const magodoMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(magodo)}`;
  const forthrightMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(forthright)}`;

  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const stage = String(form.get('stage') || '').trim();
    const campus = String(form.get('campus') || '').trim();
    const subject = encodeURIComponent(`Straitgate admission enquiry — ${stage} (${campus})`);
    const body = encodeURIComponent(
      `Hello Straitgate,\n\nMy name is ${name}.\nEmail: ${email}\nPhone: ${phone}\nCampus of interest: ${campus}\nStage of interest: ${stage}\n\nPlease contact me about the next admission intake.`,
    );

    setFormMessage('Your email app is opening with your enquiry prepared.');
    window.location.href = `mailto:info@straitgateschool.org?subject=${subject}&body=${body}`;
  }

  return (
    <div className="np">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-word hero-word-top" aria-hidden="true">
          LEARN
        </div>
        <div className="hero-word hero-word-bottom" aria-hidden="true">
          SHINE
        </div>
        <div className="hero-doodle hero-doodle-one" aria-hidden="true">
          ✦
        </div>
        <div className="hero-doodle hero-doodle-two" aria-hidden="true">
          +
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" />
              Magodo, Lagos · Forthright, Magboro
            </p>
            <h1 id="hero-title">
              Bright minds.
              <span>Godly hearts.</span>
              Bold futures.
            </h1>
            <p className="hero-intro">
              A joyful Nursery &amp; Primary School across two campuses, where excellent learning, strong character and
              every child&apos;s unique gifts grow together.
            </p>
            <div className="hero-actions">
              <a className="button button-sun" href="#contact">
                Enquire about admission <span aria-hidden="true">↗</span>
              </a>
              <Link className="text-link text-link-light" href="/contact">
                Talk to us <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-proof">
              <div className="proof-faces" aria-hidden="true">
                <span>S</span>
                <span>G</span>
                <span>S</span>
              </div>
              <p>
                <strong>Christ-centered care</strong>
                <br />
                raising confident learners
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="A smiling Straitgate pupil">
            <div className="rainbow-orbit rainbow-orbit-back" aria-hidden="true" />
            <Image
              className="hero-pupil"
              src="/nursery-playful/hero-pupil-cutout.png"
              alt="A smiling Straitgate pupil at Bible Character Day"
              width={1024}
              height={1536}
              sizes="(max-width: 620px) 84vw, (max-width: 900px) 520px, 620px"
              priority
              unoptimized
            />
            <div className="rainbow-orbit rainbow-orbit-front" aria-hidden="true" />
            <div className="hero-badge hero-badge-quality">
              <strong>Quality</strong>
              <span>Education</span>
            </div>
            <div className="hero-badge hero-badge-values">
              <strong>Faith &amp;</strong>
              <span>Character</span>
            </div>
            <div className="hero-badge hero-badge-tech">
              <strong>Smart</strong>
              <span>Technology</span>
            </div>
            <div className="sunburst" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <svg className="cloud-edge" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M0 92C28 55 63 54 92 77C110 34 154 13 199 36C230-8 312-5 345 47C367 40 392 50 401 72C438 43 492 48 516 79C553 51 614 56 638 93C675 61 731 68 748 102C786 73 842 74 865 106C895 55 976 48 1009 91C1052 22 1143 25 1175 92C1209 70 1260 76 1281 110C1310 82 1364 80 1440 113V170H0Z" />
        </svg>
      </section>

      <section id="main-content" className="clone-announcement" aria-labelledby="announcement-title">
        <div className="clone-shell announcement-grid">
          <div className="announcement-art" aria-hidden="true">
            <Image src="/nursery-playful/reference-sections/announcement-girl.jpg" alt="" width={240} height={390} unoptimized />
          </div>
          <div className="announcement-title">
            <p className="clone-kicker">From the school desk</p>
            <h2 id="announcement-title">Announcement</h2>
            <div className="clone-controls" aria-hidden="true">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
          <div className="announcement-copy">
            <p>
              Admissions enquiries are open for the next Nursery and Primary intake at our Magodo (Lagos) and Forthright
              (Magboro) campuses. Tour our learning spaces, meet the team and discover a community where every child is
              known.
            </p>
            <a className="clone-pill" href="#contact">
              Enquire now
            </a>
          </div>
        </div>
        <span className="clone-star announcement-star-one" aria-hidden="true">
          ✦
        </span>
        <span className="clone-star announcement-star-two" aria-hidden="true">
          +
        </span>
      </section>

      <section id="about" className="clone-choice" aria-labelledby="choice-title">
        <div className="clone-shell choice-grid">
          <div className="choice-copy">
            <p className="clone-kicker">A joyful place to grow</p>
            <h2 id="choice-title">Why choose Straitgate</h2>
            <div className="choice-list">
              {choiceItems.map((item) => (
                <article className="choice-item" key={item.title}>
                  <span className={`choice-icon choice-icon-${item.color}`} aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <a className="clone-pill" href="#why">
              Discover more
            </a>
          </div>
          <div className="choice-photo">
            <Image
              src="/nursery-playful/reference-sections/why-reading.jpg"
              alt="Children reading colourful books together"
              fill
              sizes="(max-width: 800px) 92vw, 42vw"
              unoptimized
            />
          </div>
        </div>
        <div className="choice-saturn" aria-hidden="true">
          <span />
        </div>
        <div className="jump-figure" aria-hidden="true">
          <div className="jump-ring" />
          <Image
            src="/nursery-playful/reference-sections/jumping-boy.png"
            alt=""
            width={980}
            height={1605}
            sizes="(max-width: 700px) 86vw, 610px"
            unoptimized
          />
        </div>
      </section>

      <section id="programs" className="clone-courses" aria-labelledby="courses-title">
        <div className="clone-shell courses-layout">
          <div className="courses-spacer" aria-hidden="true" />
          <div className="courses-copy">
            <h2 id="courses-title">Our programmes</h2>
            <div className="course-grid">
              {featuredCourses.map((course) => (
                <article className="course-item" key={course.title.join(' ')}>
                  <span className={`course-icon course-icon-${course.color}`} aria-hidden="true">
                    <CourseGlyph type={course.icon} />
                  </span>
                  <h3>
                    {course.title.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </h3>
                </article>
              ))}
            </div>
            <a className="clone-pill clone-pill-light" href="#contact">
              View All
            </a>
          </div>
        </div>
        <svg className="course-flask" viewBox="0 0 116 150" aria-hidden="true">
          <path className="course-flask-glass" d="M37 8h42v13H73v34l32 58c7 13-2 29-17 29H28c-15 0-24-16-17-29l32-58V21h-6V8Z" />
          <path className="course-flask-liquid" d="M26 97c20 8 41-10 65-2l14 25c5 10-2 22-14 22H25c-12 0-19-12-14-22l15-23Z" />
          <circle cx="44" cy="112" r="6" />
          <circle cx="75" cy="124" r="8" />
          <circle cx="84" cy="104" r="4" />
        </svg>
      </section>

      <section id="why" className="clone-activities" aria-labelledby="activities-title">
        <svg className="course-palette" viewBox="0 0 120 120" aria-hidden="true">
          <path d="M62 8c29 0 52 21 52 48 0 18-11 26-24 25-10-1-16 3-14 13 2 12-5 18-17 18C30 112 7 91 7 62 7 32 31 8 62 8Z" />
          <circle cx="39" cy="35" r="8" />
          <circle cx="67" cy="27" r="8" />
          <circle cx="91" cy="43" r="8" />
          <circle cx="92" cy="69" r="8" />
          <path className="course-palette-brush" d="m31 102 13-65 12 2-9 66Z" />
        </svg>
        <div className="science-blob" aria-hidden="true">
          <svg className="science-blob-shape" viewBox="0 0 920 560" preserveAspectRatio="none">
            <path d="M85 0H920c-67 42-77 91-10 128 42 23 36 63-10 88-58 31-52 79 9 109 54 26 47 76-14 106-58 28-58 75-8 129-67-40-117-6-183-22-66-16-120 20-184 4-68-17-126 16-190 0-49-14-85-4-112 18-96 0-128-40-82-82 45-41 27-77-53-96-76-19-77-67-5-103 73-37 70-81-7-105C-8 149-4 96 78 69 133 51 136 27 85 0Z" />
          </svg>
          <svg className="science-flask" viewBox="0 0 126 154">
            <path className="science-flask-glass" d="M40 5h46v14h-7v37l34 62c7 14-3 30-18 30H31c-16 0-25-16-18-30l34-62V19h-7V5Z" />
            <path className="science-flask-liquid" d="M25 103c24-8 48 12 77 1l12 23c5 10-3 21-15 21H28c-12 0-20-11-15-21l12-24Z" />
            <circle cx="44" cy="125" r="7" />
            <circle cx="75" cy="132" r="9" />
          </svg>
          <span className="science-planet" />
          <span className="science-star science-star-one">✦</span>
          <span className="science-star science-star-two">+</span>
        </div>
        <div className="clone-shell activities-layout">
          <div className="activities-copy">
            <h2 id="activities-title">
              We Provide the
              <br />
              Main Kids Activities
            </h2>
            <p>
              Purposeful play gives pupils room to imagine, collaborate and practise new skills. Our programme balances
              active discovery with caring guidance.
            </p>
            <p>
              Music, movement, creative projects and games help every learner find new strengths and lasting friendships.
            </p>
            <ul className="activity-list">
              {activities.map((activity) => (
                <li key={activity}>
                  <span className="activity-pencil" aria-hidden="true" />
                  {activity}
                </li>
              ))}
            </ul>
            <a className="clone-pill" href="#gallery">
              View All
            </a>
          </div>
        </div>
        <Image
          className="painting-child"
          src="/nursery-playful/reference-sections/painting-child.png"
          alt=""
          width={922}
          height={1706}
          sizes="(max-width: 700px) 58vw, 430px"
          unoptimized
        />
      </section>

      <section className="clone-enrol-band" aria-label="Admissions call to action">
        <div className="clone-shell enrol-band-inner">
          <strong>Make your child&apos;s school years special at Straitgate.</strong>
          <a className="clone-pill" href={magodoApplyUrl} target="_blank" rel="noreferrer">
            Register — Magodo
          </a>
          <a className="clone-pill" href={forthrightApplyUrl} target="_blank" rel="noreferrer">
            Register — Forthright
          </a>
          <small>Two campuses · Lagos &amp; Ogun State</small>
        </div>
      </section>

      <section id="gallery" className="clone-gallery" aria-labelledby="gallery-title">
        <div className="clone-gallery-dots" aria-hidden="true" />
        <span className="clone-gallery-candy" aria-hidden="true">
          ✦
        </span>
        <div className="clone-shell">
          <div className="clone-center-heading">
            <p className="clone-kicker">Everyday joy at Straitgate</p>
            <h2 id="gallery-title">Our gallery</h2>
          </div>
          <div className="gallery-showcase">
            <button
              className="gallery-arrow gallery-arrow-left"
              type="button"
              aria-label="Scroll gallery left"
              onClick={() => galleryTrackRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
            >
              ‹
            </button>
            <div ref={galleryTrackRef} className="clone-gallery-track">
              {gallery.map((item) => (
                <figure className="clone-gallery-item" key={item.src}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 62vw, 250px" unoptimized />
                </figure>
              ))}
            </div>
            <button
              className="gallery-arrow gallery-arrow-right"
              type="button"
              aria-label="Scroll gallery right"
              onClick={() => galleryTrackRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
            >
              ›
            </button>
          </div>
          <a
            className="clone-pill gallery-button"
            href="https://www.instagram.com/straitgateschools/"
            target="_blank"
            rel="noreferrer"
          >
            View school life
          </a>
        </div>
      </section>

      <section className="clone-testimonial" aria-labelledby="testimonial-title">
        <Image
          className="testimonial-woman"
          src="/nursery-playful/reference-sections/testimonial-woman.png"
          alt=""
          width={1023}
          height={1537}
          sizes="(max-width: 700px) 62vw, 430px"
          unoptimized
        />
        <div className="clone-shell testimonial-layout">
          <div className="testimonial-spacer" aria-hidden="true" />
          <div className="testimonial-title">
            <p className="clone-kicker clone-kicker-light">What families say</p>
            <h2 id="testimonial-title">Parents&apos; testimonials</h2>
            <div className="clone-controls clone-controls-light" aria-hidden="true">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
          <div className="testimonial-quote">
            <span className="testimonial-quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              Straitgate has been an incredible blessing for our family. The academic standards are high, and our children
              have grown not just intellectually but in character and faith.
            </blockquote>
            <cite>
              <strong>Mrs. Adebayo</strong>
              <span>Straitgate parent</span>
            </cite>
          </div>
        </div>
        <div className="testimonial-notebook" aria-hidden="true">
          <span />
        </div>
      </section>

      <section className="clone-news" aria-labelledby="news-title">
        <div className="clone-shell">
          <div className="clone-center-heading">
            <p className="clone-kicker">Stories from our community</p>
            <h2 id="news-title">Latest news</h2>
          </div>
          <div className="news-row">
            <span className="news-arrow news-arrow-left" aria-hidden="true">
              ‹
            </span>
            {newsItems.map((item) => (
              <article className="news-card" key={item.title}>
                <div className="news-photo">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 42vw, 230px" unoptimized />
                </div>
                <div className="news-copy">
                  <h3>{item.title}</h3>
                  <p className="news-date">
                    <span aria-hidden="true">▣</span>
                    {item.date}
                  </p>
                  <p>{item.copy}</p>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    Read more
                  </a>
                </div>
              </article>
            ))}
            <span className="news-arrow news-arrow-right" aria-hidden="true">
              ›
            </span>
          </div>
          <a className="clone-pill news-button" href="#contact">
            Visit or enquire
          </a>
        </div>
        <span className="news-cloud" aria-hidden="true">
          ☁
        </span>
        <span className="news-globe" aria-hidden="true">
          🌍
        </span>
      </section>

      <section id="contact" className="clone-contact" aria-labelledby="contact-title">
        <div className="clone-shell contact-stage">
          <Image
            className="megaphone-child"
            src="/nursery-playful/reference-sections/megaphone-child.png"
            alt=""
            width={1096}
            height={1435}
            sizes="(max-width: 700px) 72vw, 560px"
            unoptimized
          />
          <span className="contact-globe" aria-hidden="true">
            🌍
          </span>
          <span className="contact-balloon" aria-hidden="true">
            <i />
          </span>
          <form className="contact-blob" onSubmit={handleEnquiry}>
            <p className="clone-kicker">Admission enquiries</p>
            <h2 id="contact-title">Ask about your child</h2>
            <div className="contact-line">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="contact-line">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="contact-line">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" required />
            </div>
            <div className="contact-line">
              <label htmlFor="campus">Campus of interest</label>
              <select id="campus" name="campus" defaultValue="" required>
                <option value="" disabled>
                  Choose a campus
                </option>
                <option>Magodo (Lagos)</option>
                <option>Forthright (Magboro)</option>
              </select>
            </div>
            <div className="contact-line">
              <label htmlFor="stage">Stage of interest</label>
              <select id="stage" name="stage" defaultValue="" required>
                <option value="" disabled>
                  Choose a stage
                </option>
                <option>Nursery</option>
                <option>Lower Primary</option>
                <option>Upper Primary</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <button className="clone-pill contact-submit" type="submit">
              Prepare enquiry
            </button>
            <p className="contact-form-note">
              Magodo: <a href={magodoMap} target="_blank" rel="noreferrer">{magodo}</a>
              <br />
              Forthright: <a href={forthrightMap} target="_blank" rel="noreferrer">{forthright}</a>
            </p>
            <p className="form-status" aria-live="polite">
              {formMessage}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
