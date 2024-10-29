import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '../../firebase';
import { Link } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='super-container'>
      <video className="background-video" autoPlay loop muted>
        <source src="/loginvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Hello!</h1>
          </div>
        </div>
        
        <div className="right">
          <Link to="/">  
            <img src="/logo.png" className='login-logo' />
          </Link>
          <h5>Welcome back!</h5>
          <p>Don't have an account? <Link to="/register">Create Your Account</Link> it takes less than a minute</p>
          <div className="inputs">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <div className="remember-me--forget-password">
              <p>Forget password?</p>
            </div>
          </div>

          <button onClick={handleLogin} className="signin-btn">Log In</button>
          <button onClick={handleGoogleSignIn} className="google-btn">
            <i className="fa-brands fa-google" aria-hidden="true"></i> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
