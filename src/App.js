import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const location = useLocation();
  const noHeaderRoutes = ['/login', '/register'];
  const shouldShowHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
