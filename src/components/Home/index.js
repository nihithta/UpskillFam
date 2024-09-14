import { Component } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import '@dotlottie/player-component/dist/dotlottie-player.js';
import './index.css'; 

class Home extends Component {
  state = {
      isDarkMode: true,
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;
    return (
      <div className={`home-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'navbar-light'}`}>
          <div className="logo-container">
            <img src="/logo.png" alt="App Logo" className="small-logo" />
            <span className="logo">UpskillFam</span>
          </div>
          <ul className="nav-list">
            <li>Home</li>
            <li>Resources</li>
            <li>Podcasts</li>
            <li>Job Board</li>
            <li>Resume Evaluator</li>
          </ul>
          
          <div className="nav-right">
            <button className='login-btn'>Login</button>
            <div className="mode-toggle" onClick={this.toggleDarkMode}>
                {isDarkMode ? <FiSun size={24} color="#FFD700" /> : <FiMoon size={24} color="#000080" />}
            </div>
          </div>

        </nav>

        <div className="hero-section">
          <div>
            <div className="text-section">
                <h1>Grow with the right Community</h1>
                <p>
                Everything you need to succeed in any domain is all right here with our world class mentors.
                </p>
                <button className="get-started-btn">Get Started</button>
                <span className="request-demo">Who are we?</span>
            </div>

            <div className="stats-section">
                <div>
                    <h3>1M+</h3>
                    <p>active users</p>
                </div>
                <div>
                    <h3>100+</h3>
                    <p>top Mentors</p>
                </div>
                <div>
                    <h3>500+</h3>
                    <p>podcasts and tips</p>
                </div>
            </div>
          </div>

          <div className="image-section">
            <dotlottie-player
                src="https://lottie.host/a852365c-741a-4e31-83a7-d537884934b4/BBRvjmHPyx.json"
                background="transparent"
                speed="1"
                style={{ width: '500px', height: '500px' }}
                loop
                autoplay
                ></dotlottie-player>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
