import React, { Component } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase'; // Import auth
import { signOut } from 'firebase/auth'; // Import signOut
import '@dotlottie/player-component/dist/dotlottie-player.js';
import './index.css'; 

class Header extends Component {
  state = {
    isDarkMode: false,
    user: null,
    dropdownOpen: false,
    hamburgerOpen: false, // State for mobile menu
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  toggleHamburger = () => {
    this.setState(prevState => ({
      hamburgerOpen: !prevState.hamburgerOpen,
    }));
  };

  handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { isDarkMode, user, dropdownOpen, hamburgerOpen } = this.state;
    return (
      <nav className="navbar light-mode">
        <div className="logo-container">
          <img src="/logo.png" alt="App Logo" className="small-logo" />
          <span className="logo">UpskillFam</span>
        </div>
        <div className="hamburger" onClick={this.toggleHamburger}>
          ☰
        </div>
        <ul className={`nav-list ${hamburgerOpen ? 'mobile-menu show-nav' : ''}`}>
          <li>About</li>
          <li>Blogs</li>
          <li>Podcasts</li>
          <li>Community</li>
          <li>Job Board</li>
          <li>Resume Evaluator</li>
        </ul>
        <div className="nav-right">
          {user ? (
            <div className="user-container">
              <div className="user-initial" onClick={this.toggleDropdown}>
                {user.email.charAt(0).toUpperCase()}
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={this.handleLogout} className="dropdown-item">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          )}
          <div className="mode-toggle" onClick={this.toggleDarkMode}>
            {isDarkMode ? <FiSun size={24} color="#FFD700" /> : <FiMoon size={24} color="#000080" />}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
