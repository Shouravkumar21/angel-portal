import { Link } from 'react-router-dom';
import './Footer.css';

const LOGO_URL = '/assets/ascencia/Ascencia-Malta-Logo.svg';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={LOGO_URL} alt="Ascencia Business School Malta" />
            </div>
            <h3>Ascencia Malta Ltd</h3>
            <p className="footer-tagline">We are eager to give you the best education.</p>
            <address className="footer-address">
              23, Vincenzo Dimech Street, Floriana, Malta<br />
              Tel.: +356 2034 1784
            </address>
            <div className="footer-cta-wrapper">
              <Link to="/contact" className="btn btn-outline">Contact us</Link>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Courses</h4>
            <ul>
              <li><span>Doctorate of Business Administration (DBA)</span></li>
              <li><span>Master of Business Administration (MBA)</span></li>
              <li><span>Bachelor of Business Administration (BBA)</span></li>
              <li><span>Undergraduate Diploma Specialization</span></li>
              <li><span>Award certificates</span></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>English language courses</h4>
            <ul>
              <li><span>General English Course</span></li>
              <li><span>Business English Course</span></li>
              <li><span>Academic English Course</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-grid">
          <div className="footer-social-column">
            <h3>Follow Ascencia Malta</h3>
            <div className="social-links">
              <span className="social-icon"><i className="fa-brands fa-facebook-f"></i></span>
              <span className="social-icon"><i className="fa-brands fa-instagram"></i></span>
              <span className="social-icon"><i className="fa-brands fa-linkedin-in"></i></span>
              <span className="social-icon"><i className="fa-brands fa-tiktok"></i></span>
              <span className="social-icon"><i className="fa-brands fa-youtube"></i></span>
            </div>
          </div>
          
          <div className="footer-info-column">
            <div className="footer-copyright-row">
              <p>&copy; {new Date().getFullYear()} Ascencia Malta | <span>Terms & Conditions</span> | <span>Privacy Policy</span></p>
            </div>
            <div className="footer-license-row">
              <p>Licensed by: The Malta Further and Higher Education Authority (MFHEA)</p>
              <p>License number: 2021-018</p>
              <p>Category: Higher Education Institution</p>
            </div>
            <div className="footer-membership">
              <div className="membership-logo">
                <i className="fa-solid fa-graduation-cap"></i> 
                <span>COLLEGE DE PARIS</span>
              </div>
              <p>Member of College de Paris</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
