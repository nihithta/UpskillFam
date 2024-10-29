import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, firestore } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

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
    <div>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Major" onChange={(e) => setMajor(e.target.value)} />
      <input type="text" placeholder="Skills" onChange={(e) => setSkills(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
