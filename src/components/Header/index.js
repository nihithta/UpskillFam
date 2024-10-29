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
    user: null, // Initialize user state
    dropdownOpen: false, // State for dropdown visibility
  };

  componentDidMount() {
    // Subscribe to auth state changes
    this.unsubscribe = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    // Clean up the subscription
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

  handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { isDarkMode, user, dropdownOpen } = this.state;
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
          {user ? (
            <div className="user-container">
              <div className="user-initial" onClick={this.toggleDropdown}>
                {user.email.charAt(0).toUpperCase()} {/* Display the first letter of the email */}
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={this.handleLogout} className="dropdown-item">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">  
              <button className='login-btn'>Login</button>
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
