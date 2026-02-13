import { useEffect, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const revealElements = Array.from(document.querySelectorAll('.reveal-on-scroll'));
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request Received. Our luxury concierge team will contact you shortly.');
  };

  const CONTACT_INFO = [
    {
      title: 'Global Campus',
      icon: '🏛️',
      details: ['23, Vincenzo Dimech Street', 'Floriana, Malta'],
    },
    {
      title: 'Priority Support',
      icon: '✨',
      details: ['info@ascencia-business-school.mt', '+356 2034 1784'],
    },
    {
      title: 'International Bureau',
      icon: '🌍',
      details: ['mobility@ascencia-business-school.mt'],
    },
  ];

  return (
    <main className="page-contact">
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <h1>Experience<br />Excellence</h1>
          <p>Begin your journey with Ascencia Malta. Our experts are ready to guide your professional ascension.</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="reveal-on-scroll">Let&apos;s Design Your Future</h2>
            <p className="reveal-on-scroll">
              Tailored academic pathways for high-achieving professionals. 
              Connect with our admissions office for a personalized consultation.
            </p>
            
            <div className="info-cards-stack">
              {CONTACT_INFO.map((info, idx) => (
                <div 
                  key={info.title} 
                  className="info-block reveal-on-scroll" 
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    {info.details.map((detail, dIdx) => (
                      <p key={dIdx}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap reveal-on-scroll">
            <div className="form-header">
              <h3>Direct Inquiry</h3>
              <p>Confidential and expedited response guaranteed.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" id="firstName" required 
                    placeholder=" " value={formData.firstName} onChange={handleChange} 
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="form-group">
                  <input 
                    type="text" id="lastName" required 
                    placeholder=" " value={formData.lastName} onChange={handleChange} 
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>

              <div className="form-group">
                <input 
                  type="email" id="email" required 
                  placeholder=" " value={formData.email} onChange={handleChange} 
                />
                <label htmlFor="email">Work Email Address</label>
              </div>

              <div className="form-group">
                <input 
                  type="tel" id="phone" 
                  placeholder=" " value={formData.phone} onChange={handleChange} 
                />
                <label htmlFor="phone">Phone Number (Optional)</label>
              </div>

              <div className="form-group">
                <textarea 
                  id="message" required rows="4" 
                  placeholder=" " value={formData.message} onChange={handleChange} 
                ></textarea>
                <label htmlFor="message">How can we support your goals?</label>
              </div>

              <button type="submit" className="hero-btn hero-btn-primary submit-btn">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map reveal-on-scroll">
        <div className="map-container">
          <iframe 
            title="Ascencia Malta Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.0974865768854!2d14.50221151526315!3d35.891316980145625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e451b6a7827e7%3A0xc3f7a468d4ea57a!2s23%20Vincenzo%20Dimech%20St%2C%20Floriana%2C%20Malta!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
