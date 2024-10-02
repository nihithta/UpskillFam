import './index.css';

const HeroSection = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">Akademia</div>
        <nav className="navbar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#programmes">Programmes</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </nav>
        <button className="get-in-touch-btn">Get in touch</button>
      </header>
      
      <main className="main-content">
        <h1 className="main-heading">
          Find <span>seminars</span> <br />
          trainings & trainers
        </h1>
        <p className="main-subheading">
          Do you want to learn techniques that will make your day job or starting a new position easier?
        </p>
        <div className="email-subscription">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="send-btn">Send</button>
        </div>
        <div className="image-section">
          <img src="image-url" alt="Seminar Trainers" className="main-image" />
          <button className="management-btn">Management</button>
        </div>
      </main>
      
      <footer className="footer">
        <div className="footer-section">
          <span className="footer-title">Akademia</span>
          <ul>
            <li>Implementation guarantee</li>
            <li>Hygiene concept</li>
          </ul>
        </div>
        <div className="footer-seal">
          <img src="seal-image-url" alt="Seal" />
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;
