import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import SecondaryHeadMessages from './SecondaryHeadMessages';
import './secondary.css';

const ICONS = '/secondary/icons/';

const programs = [
  {
    title: 'Junior Secondary',
    copy: 'A strong transition into deeper study habits, literacy, numeracy, sciences, and responsible independence.',
    image: '/straitgate-high-school1.jpg',
  },
  {
    title: 'Senior Secondary',
    copy: 'Focused academic pathways, examination preparation, mentoring, and practical learning for confident readiness.',
    image: '/straitgate-high-school6.jpg',
  },
  {
    title: 'Boarding School',
    copy: 'Comfortable boarding accommodation with supervised routines, guided prep, meals, worship, recreation, and pastoral care.',
    image: '/sgpics/college-academic-journey.jpg',
  },
];

const services = [
  {
    title: 'Visit School',
    copy: 'Families can arrange a tour of Straitgate High School or Straitgate College.',
    image: `${ICONS}visit-school-white.png`,
    href: '/contact',
  },
  {
    title: 'Student Care',
    copy: 'Pastoral care, guidance, discipline, mentoring, and daily support for every learner.',
    image: `${ICONS}student-care-white.png`,
    href: '#classes',
  },
  {
    title: 'Admissions',
    copy: 'Start the process for High School or College and our team will guide the next steps.',
    image: `${ICONS}admissions-white.png`,
    href: '#admissions',
  },
];

const classes = [
  { title: 'STEM Program', teacher: 'Science Faculty', grade: 'JSS - SS', image: '/sgpics/home-stem-club.jpg' },
  { title: 'Language & Literacy', teacher: 'English Faculty', grade: 'JSS - SS', image: '/sgpics/home-press-club.jpg' },
  { title: 'Music & Performing Arts', teacher: 'Arts Faculty', grade: 'JSS - SS', image: '/sgpics/home-music-performing-arts.jpg' },
];

const teachers = [
  { name: 'Dr. Caroline Alao', role: 'Head of High School', image: '/high-school-head.jpg', width: 655, height: 1010 },
  { name: 'Mr. Joseph Oyegbile', role: 'Head of College', image: '/schead.jpg', width: 992, height: 1077 },
];

const gallery = [
  { src: '/straitgate-high-school.jpg', alt: 'Straitgate Secondary students at school' },
  { src: '/straitgate-high-school2.jpg', alt: 'Straitgate Secondary classroom life' },
  { src: '/straitgate-high-school4.jpg', alt: 'Students learning at Straitgate Secondary School' },
  { src: '/sgpics/college-campus-drive.jpg', alt: 'Straitgate College campus life' },
  { src: '/sgpics/college-academic-journey.jpg', alt: 'Straitgate students during an academic activity' },
  { src: '/sgpics/home-stem-club.jpg', alt: 'A Straitgate student participating in STEM activities' },
];

type SectionTitleProps = {
  image: string;
  children: ReactNode;
  align?: 'left' | 'center';
};

function SectionTitle({ image, children, align = 'left' }: SectionTitleProps) {
  return (
    <div className={`sectionTitle ${align === 'center' ? 'center' : ''}`}>
      <Image src={image} alt="" width={72} height={72} />
      <h2>{children}</h2>
    </div>
  );
}

export default function SecondarySchoolPage() {
  return (
    <main id="top" className="secondary-school">
      <section className="hero" aria-labelledby="secondary-title">
        <Image
          src="/sgpics/high-school-campus-drive.jpg"
          alt="Straitgate Secondary School campus"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroShade" aria-hidden="true" />
        <div className="heroInner">
          <h2>Straitgate</h2>
          <h1 id="secondary-title">Secondary <span>School</span></h1>
          <p>Take a tour of Straitgate and discover a secondary school community shaped by faith, academics, leadership, and care.</p>
          <a href="#tour">Take A Tour</a>
        </div>
      </section>

      <section className="programCards" id="tour" aria-label="Secondary School programmes">
        <div className="shell threeCards">
          {programs.map((program) => (
            <article key={program.title}>
              <Image src={program.image} alt={program.title} width={1080} height={720} sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <h3>{program.title}</h3>
                <p>{program.copy}</p>
                <a href="#classes">Learn More</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell aboutInner">
          <div className="aboutTitle">
            <h2>About Our School</h2>
            <div className="aboutStats" aria-label="School highlights">
              <div><strong>High School</strong><span>Junior to senior secondary learning pathway</span></div>
              <div><strong>College</strong><span>Focused preparation for examinations and life after school</span></div>
              <div><strong>Boarding</strong><span>Structured accommodation, supervision, and pastoral support</span></div>
            </div>
          </div>
          <div className="aboutText">
            <p className="large">
              Straitgate Secondary School brings High School and College into one clear journey: learners are known personally,
              challenged academically, and formed spiritually.
            </p>
            <p>
              We help students build disciplined study habits, confident communication, practical problem-solving, service,
              creativity, and leadership. Across Magodo and Magboro, the experience remains rooted in excellence, care, and
              Christ-centered character.
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="school-life">
        <div className="shell serviceGrid">
          {services.map((service) => (
            <article key={service.title}>
              <Image src={service.image} alt="" width={82} height={82} />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              {service.href.startsWith('/') ? <Link href={service.href}>Read More</Link> : <a href={service.href}>Read More</a>}
            </article>
          ))}
        </div>
      </section>

      <section className="classes" id="classes">
        <div className="shell">
          <SectionTitle image={`${ICONS}online-class-blue.png`} align="center">Our Classes</SectionTitle>
          <div className="classGrid">
            {classes.map((item) => (
              <article key={item.title}>
                <Image src={item.image} alt={item.title} width={1800} height={1200} sizes="(max-width: 900px) 100vw, 33vw" />
                <div>
                  <h3>{item.title}</h3>
                  <p>Teacher : {item.teacher}</p>
                  <p>Grade : {item.grade}</p>
                  <a href="#admissions">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="teachers" aria-labelledby="school-heads-title">
        <div className="shell">
          <SectionTitle image={`${ICONS}campus-blue.png`} align="center">
            <span id="school-heads-title">School Heads</span>
          </SectionTitle>
          <div className="teacherGrid">
            {teachers.map((teacher) => (
              <article key={teacher.name}>
                <Image src={teacher.image} alt={teacher.name} width={teacher.width} height={teacher.height} sizes="(max-width: 900px) 100vw, 370px" />
                <h3>{teacher.name}</h3>
                <p>{teacher.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial" aria-live="polite">
        <SecondaryHeadMessages />
      </section>

      <section className="imageStrip" aria-label="Straitgate Secondary School gallery">
        {gallery.map((image) => (
          <Image key={image.src} src={image.src} alt={image.alt} width={1080} height={720} sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 17vw" />
        ))}
      </section>

      <footer className="footer" id="admissions">
        <div className="shell footerGrid">
          <div>
            <div className="footerBrand">Straitgate</div>
            <p>14 Robert Street, Magodo, Lagos</p>
            <p>Road D, Forthright Gardens Estate, Magboro, Ogun State</p>
          </div>
          <div>
            <h3>Our Schools</h3>
            <Link href="/schools/nursery">Nursery</Link>
            <Link href="/schools/primary">Primary School</Link>
            <Link href="/schools/secondary">Secondary School</Link>
          </div>
          <div>
            <h3>Academics</h3>
            <p>Junior Secondary</p>
            <p>Senior Secondary</p>
            <p>STEM &amp; Arts</p>
          </div>
          <div>
            <h3>Admissions</h3>
            <a href="https://sghs.educare.school/admission-form" target="_blank" rel="noreferrer">Apply to High School</a>
            <a href="https://sgc.educare.school/admission-form" target="_blank" rel="noreferrer">Apply to College</a>
          </div>
          <div className="iconCredits">
            <h3>Icon Credits</h3>
            <a href="https://www.flaticon.com/free-icons/school" target="_blank" rel="noreferrer">School icons created by Magnific - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/health" target="_blank" rel="noreferrer">Health icons created by Magnific - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/admission" target="_blank" rel="noreferrer">Admission icons created by Three musketeers - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/online-class" target="_blank" rel="noreferrer">Online class icons created by Magnific - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/campus" target="_blank" rel="noreferrer">Campus icons created by prinda895 - Flaticon</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
