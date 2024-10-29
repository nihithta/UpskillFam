import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, firestore } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './index.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [major, setMajor] = useState('');
  const [skills, setSkills] = useState('');

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(firestore, "users", user.uid), {
        name: name,
        email: email,
        phone: phone,
        age: age,
        major: major,
        skills: skills,
      });

      alert("User registered successfully and details saved!");
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
            <h1>Join Us!</h1>
          </div>
        </div>
        
        <div className="right">
          <Link to="/">  
            <img src="/logo.png" className='login-logo' alt="Logo" />
          </Link>
          <h5>Welcome! Let’s get started</h5>
          <p>Already have an account? <Link to="/login">Login here</Link></p>
          
          <div className="inputs">
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
            <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
            <input type="text" placeholder="Major" onChange={(e) => setMajor(e.target.value)} />
            <input type="text" placeholder="Skills" onChange={(e) => setSkills(e.target.value)} />
          </div>

          <button onClick={handleRegister} className="signin-btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
