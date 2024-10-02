import { Component } from 'react';
import './index.css'; 

class Home extends Component {
  state = {
    isDarkMode: false,
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };
  render() {
    const { isDarkMode } = this.state;
    return (
      <div className="home-container">
        <div className="hero-section">
          <div>
            <video className="bg-video" src="/bgvid.mp4" loop muted autoPlay></video>
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
        </div>
      </div>
    );
  }
}

export default Home;
