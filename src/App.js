import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home/home';

import './App.css';
import Register from './page/Register/Register';
import UserHome from './page/User_Home/userHome';
import About from './page/AboutUs/About';
import Help from './page/Help/Help';
import Contact from './page/ContactUs/Contact';
import Services from './page/Services/Services';
import SignUpForm from './components/Auth/SignUpForm';
import AdminLayout from './page/Admin/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/userhome" element={<UserHome />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/help" element={<Help />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/services" element={<Services />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
