import { Component } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

const faqData = [
  {
    question: "What is your refund policy?",
    answer: "Our refund policy allows you to request a full refund within 30 days of your purchase. For more information, please contact our support team.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, we’ll send you an email with a tracking number and link to check the status of your package.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer worldwide shipping to many countries. Shipping costs and times vary depending on location.",
  },
  {
    question: "How can I contact customer support?",
    answer: "Our support team is available 24/7. You can reach us via email, phone, or live chat for any inquiries.",
  },
];

gsap.registerPlugin(ScrollTrigger);

class Home extends Component {
  state = {
    isDarkMode: false,
    activeIndex: null,
  };

  componentDidMount() {
    gsap.to(".home-container", {
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".home-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: false,
      },
    });
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  toggleFAQ = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };  

  render() {
    const { isDarkMode, activeIndex } = this.state;

    return (
      <div className="home-container">
        <video className="bg-video" src="/bgvid.mp4" loop muted autoPlay></video>
        <div className="hero-section">
          <div className="text-section">
            <div className='cover-container'>
              <h1 className='main-heading'>
                Find
                <div className='podcast-container'>
                  <video src="/podcastvid.mp4" loop muted autoPlay></video>
                </div>
                seminars<br />
                <div className='line2'>
                  trainings
                  <span className='ampersand-container'>
                    <div className='ampersand'>&</div>
                    <div className='bag-icon'><i className="fas fa-shopping-bag"></i></div>
                  </span>
                  <div>
                    trainers
                    <div className='trainer-container'>
                      <video src="/trainingvid.mp4" loop muted autoPlay></video>
                    </div>
                  </div>
                </div>
              </h1>
            </div>
            <p>
              Everything you need to succeed in any domain is all right here with our world class mentors.
            </p>
            <button className="get-started-btn">Get Started</button>
            <span className="request-demo">Who are we?</span>
          </div>
        </div>

        <p className='mentor-text'>OUR COMMUNITY MENTORS COME FROM</p>
        <div className="carousel">
          <div className="carousel-track">
            <img src="/hlogo.png" alt="Image 1" />
            <img src="/mlogo.jpg" alt="Image 2" />
            <img src="/nlogo.png" alt="Image 3" />
            <img src="/alogo.jpeg" alt="Image 4" />
            <img src="/ilogo.png" alt="Image 5" />
            <img src="/ologo.png" alt="Image 6" />
            <img src="/iglogo.jpg" alt="Image 7" />
            {/* Duplicate images for smooth looping */}
            <img src="/hlogo.png" alt="Image 1" />
            <img src="/mlogo.jpg" alt="Image 2" />
            <img src="/nlogo.png" alt="Image 3" />
            <img src="/alogo.jpeg" alt="Image 4" />
            <img src="/ilogo.png" alt="Image 5" />
            <img src="/ologo.png" alt="Image 6" />
            <img src="/iglogo.jpg" alt="Image 7" />
          </div>
        </div>
        <hr />

        <div className='overview-container'>
          <h1 className='overview-heading'>Things you can do on UpskillFam👇</h1>
          <div className='feature-box1'>
            <div className='feature-box-layout'>  
              <p className='overview-h'>Learn by doing and getting insights from industry leaders.</p>
              <p className='overview-para'>Talk about CS, Electrical, Design, Biotech, Chemical, and various other streams.</p>
              <p className='overview-para'>Take part in podcasts, webinars, workshops, live events and much more.</p>
            </div>
            <img src="/fbox1.jpg" className='feature-box-img' alt="feature-box-img1" />
          </div>
          <div className='feature-box2'>
            <div className='feature-box-layout'>  
              <p className='overview-h'>Network with like-minded individuals across the country.</p>
              <p className='overview-para'>Big things happen when people come together. It's magic!</p>
              <p className='overview-para'>Get in touch a diverse community of creative minds to network, bounce off ideas, and gain amazing insights in your work.</p>
            </div>
            <img src="/fbox2.jpg" className='feature-box-img' alt="feature-box-img1" />
          </div>
          <div className='feature-box1'>
            <div className='feature-box-layout'>  
              <p className='overview-h'>Boost your Resume with expert tips and make it super ATS-compliant.</p>
              <p className='overview-para'>Get personalized tips to make your Resume appealing to recruiters.</p>
              <p className='overview-para'>Learn form recruiters what they look for in a Resume and plan accordingly.</p>
            </div>
            <img src="/fbox3.jpg" className='feature-box-img' alt="feature-box-img1" />
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => this.toggleFAQ(index)}>
                  {faq.question}
                  <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
