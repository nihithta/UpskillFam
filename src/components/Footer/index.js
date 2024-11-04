import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>UpskillFam</h2>
            <p>
              Your all-in-one platform for upskilling. From career roadmaps and industry insights to resume reviews and job listings, we provide everything you need to accelerate your professional journey.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} UpskillFam. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
