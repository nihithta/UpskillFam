import { Component } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '@dotlottie/player-component/dist/dotlottie-player.js';
import './index.css'; 

class Header extends Component {
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
        <nav className="navbar light-mode">
          <div className="logo-container">
            <img src="/logo.png" alt="App Logo" className="small-logo" />
            <span className="logo">UpskillFam</span>
          </div>
          <ul className="nav-list">
            <li>About</li>
            <li>
              <div className="select-wrapper">
                <select>
                  <option value="blogs">Blogs</option>
                  <option value="podcast">Podcasts</option>
                  <option value="tips">Resume tips</option>
                </select>
              </div>
            </li>
            <li>Job Board</li>
            <li>Resume Evaluator</li>
          </ul>
          
          <div className="nav-right">
            <Link to="/login">  
              <button className='login-btn'>Login</button>
            </Link>
            <div className="mode-toggle" onClick={this.toggleDarkMode}>
                {isDarkMode ? <FiSun size={24} color="#FFD700" /> : <FiMoon size={24} color="#000080" />}
            </div>
          </div>

        </nav>
    );
  }
}

export default Header;
