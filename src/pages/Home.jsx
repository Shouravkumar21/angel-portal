import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const BRAND_IMAGES = {
  hero: '/assets/ascencia/hero_pro.jpg',
  tutors: '/assets/ascencia/tutors_pro.jpg',
  showcaseA: '/assets/ascencia/showcase_classroom.jpg',
  showcaseB: '/assets/ascencia/showcase_students.jpg',
  maltaVisual: '/assets/ascencia/malta_travel.jpg',
  partners: [
    '/assets/ascencia/partner_1.jpg',
    '/assets/ascencia/partner_2.jpg',
    '/assets/ascencia/partner_3.jpg',
    '/assets/ascencia/partner_4.jpg',
    '/assets/ascencia/partner_5.jpg',
    '/assets/ascencia/partner_6.jpg',
    '/assets/ascencia/partner_7.jpg',
    '/assets/ascencia/partner_8.jpg',
  ],
};

const VALUES = [
  {
    title: 'Openness to International Markets',
    body: 'Programs are designed for international students and mobility pathways, with internships, language immersion, and global partnerships at the core.',
  },
  {
    title: 'Teaching Excellence',
    body: 'Courses combine academic rigor with practical insight from experienced professionals and recognized practitioners.',
  },
  {
    title: 'Job Access',
    body: 'Each learner receives individual guidance to support career integration through applied and work-linked training.',
  },
];

const HIGHLIGHTS = [
  { stat: '2021-018', label: 'MFHEA License Number' },
  { stat: '100%', label: 'Student-centered approach' },
  { stat: 'Global', label: 'International focus' },
];

const SIGNATURE_EXPERIENCE = [
  {
    title: 'Career Pathway Design',
    body: 'Learners receive personalized guidance to align studies with professional outcomes.',
  },
  {
    title: 'Industry-Led Delivery',
    body: 'Modules blend academic depth with practical insight from active professionals.',
  },
  {
    title: 'International Environment',
    body: 'Programs and services support international students with multilingual mobility options.',
  },
];

const SHOWCASE_CARDS = [
  {
    title: 'Future-ready classrooms',
    body: 'A modern learning atmosphere designed to support creative thinking and practical skill building.',
    image: BRAND_IMAGES.showcaseA,
  },
  {
    title: 'International student experience',
    body: 'A multicultural environment that helps learners build confidence for global opportunities.',
    image: BRAND_IMAGES.showcaseB,
  },
];

const COURSE_GROUPS = [
  {
    title: 'Higher Education Programmes',
    items: [
      'Doctorate of Business Administration (DBA)',
      'MBA in Leadership Excellence',
      'MSc and MA Specializations',
      'Postgraduate Diploma Specializations',
      'Bachelor Specializations',
      'Undergraduate Diploma Specializations',
      'Award Certificates',
    ],
  },
  {
    title: 'English Language Courses',
    items: [
      'General English Course',
      'Business English Course',
      'Academic English Course',
      'ESP - English for Special Purpose',
    ],
  },
];

const QUICK_LINKS = [
  { label: 'About us' },
  { label: 'Our Team' },
  { label: 'Work with us' },
  { label: 'Study in Malta' },
  { label: 'Visa Requirements' },
  { label: 'Quality Assurance' },
];

export default function Home() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal-on-scroll'));

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="future-home">
      <section className="future-hero">
        <div className="future-overlay" />
        <div className="container future-hero-grid">
          <div className="future-hero-copy reveal-on-scroll">
            <span className="hero-kicker">Ascencia Malta</span>
            <h1>We are eager to give you the best education.</h1>
            <p>
              Ascencia&apos;s ambition is to realize your potential of ascension.
              Through individualized follow-up, teams support your future plans
              and help you turn projects into real outcomes.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="hero-btn hero-btn-primary">
                I get in touch
              </Link>
              <a href="https://www.ascencia-business-school.mt/" target="_blank" rel="noreferrer" className="hero-btn hero-btn-ghost">
                Visit official website
              </a>
            </div>
            <div className="hero-stats">
              <article>
                <h3>Student-Centered</h3>
                <p>Critical thinking, creativity, and lifelong learning.</p>
              </article>
              <article>
                <h3>Career-Driven</h3>
                <p>Academic quality connected to real-world outcomes.</p>
              </article>
            </div>
            <div className="hero-highlights">
              {HIGHLIGHTS.map((item, index) => (
                <article key={item.stat} className="stagger-item" style={{ '--delay': `${0.1 + index * 0.08}s` }}>
                  <strong>{item.stat}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="hero-image-wrap reveal-on-scroll">
            <img src={BRAND_IMAGES.hero} alt="Ascencia students learning together" />
            <div className="hero-glow-card">
              <span className="glow-dot" />
              <div>
                <strong>Innovative pedagogy</strong>
                <p>Built on collaboration and practical learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="future-signature reveal-on-scroll">
        <div className="container">
          <header className="section-head">
            <span>Signature experience</span>
            <h2>A polished academic journey from admission to career launch</h2>
          </header>
          <div className="signature-grid">
            {SIGNATURE_EXPERIENCE.map((item, index) => (
              <article
                key={item.title}
                className="signature-card stagger-item"
                style={{ '--delay': `${0.08 + index * 0.08}s` }}
              >
                <span className="signature-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="future-showcase reveal-on-scroll">
        <div className="container">
          <header className="section-head">
            <span>Campus vibe</span>
            <h2>Attractive, immersive and future-focused learning spaces</h2>
          </header>
          <div className="showcase-grid">
            {SHOWCASE_CARDS.map((item, index) => (
              <article
                key={item.title}
                className="showcase-card stagger-item"
                style={{ '--delay': `${0.08 + index * 0.09}s` }}
              >
                <div className="showcase-image-wrap">
                  <img src={item.image} alt={item.title} />
                  <span className="showcase-badge">Sci-Fi UI Mood</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="future-about reveal-on-scroll">
        <div className="container about-grid">
          <article className="content-card">
            <span>About</span>
            <h2>A participative and innovative pedagogy</h2>
            <p>
              Training is based on constant exchange between learners and
              experienced professionals. Corporate realities stay at the center
              of personalized learning methods to identify potential and develop
              future managers and business leaders.
            </p>
          </article>
          <article className="content-card">
            <span>Mission</span>
            <h2>Empowering socially responsible leaders</h2>
            <p>
              Ascencia Malta promotes high-quality education and prepares
              graduates for a dynamic world. Together with stakeholders, the
              school supports diversity, inclusion, and equity while building
              meaningful impact in a global community.
            </p>
          </article>
        </div>
      </section>

      <section id="programmes" className="future-values reveal-on-scroll">
        <div className="container">
          <header className="section-head">
            <span>Our values</span>
            <h2>Excellence, a priority for Ascencia</h2>
          </header>
          <div className="values-grid">
            {VALUES.map((value, index) => (
              <article
                key={value.title}
                className="value-card stagger-item"
                style={{ '--delay': `${0.08 + index * 0.08}s` }}
              >
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="future-programmes reveal-on-scroll">
        <div className="container">
          <header className="section-head">
            <span>Programmes</span>
            <h2>Academic tracks and language pathways</h2>
          </header>
          <div className="programmes-grid">
            {COURSE_GROUPS.map((group, index) => (
              <article
                key={group.title}
                className="programme-card stagger-item"
                style={{ '--delay': `${0.08 + index * 0.08}s` }}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="programmes-banner">
            <img src={BRAND_IMAGES.maltaVisual} alt="Study and living experience in Malta" />
            <div className="programmes-banner-content">
              <span>Living in Malta</span>
              <h3>An international study destination with career opportunities</h3>
              <button type="button">
                Explore student life
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="future-tutors reveal-on-scroll">
        <div className="container tutors-grid">
          <div className="tutor-image">
            <img src={BRAND_IMAGES.tutors} alt="Teacher mentoring a student" />
          </div>
          <div className="tutor-copy">
            <span>Our tutors</span>
            <h2>Some special teachers from the Industry!</h2>
            <p>
              At Ascencia Malta, students learn in a welcoming environment where
              lecturers bring practical entrepreneurial insight into each module.
            </p>
            <p>
              Mentors guide learners through real-world projects to strengthen
              technical and professional confidence for their chosen career path.
            </p>
          </div>
        </div>
      </section>

      <section className="future-partners reveal-on-scroll">
        <div className="container">
          <header className="section-head">
            <span>Partner institutions</span>
            <h2>We are proudly partnered with leading institutions</h2>
          </header>
          <div className="partners-marquee">
            <div className="partners-track">
              {[...BRAND_IMAGES.partners, ...BRAND_IMAGES.partners].map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="partner-card stagger-item"
                  style={{ '--delay': `${0.03 + (index % 8) * 0.05}s` }}
                >
                  <img src={partner} alt={`Ascencia partner ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="future-cta reveal-on-scroll">
        <div className="container">
          <div className="future-cta-card">
            <div>
              <h2>Join us!</h2>
              <p>
                The registration and admission procedure is simple and free. The
                team is ready to answer your questions and guide your next step.
              </p>
            </div>
            <div>
              <Link to="/contact" className="hero-btn hero-btn-primary cta-btn">
                Contact us now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
