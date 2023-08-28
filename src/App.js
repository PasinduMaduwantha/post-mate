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
import SignUp from './components/Auth/AuthForm'
import Login from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import PostalCodeLookup from './page/PostalCodeLookup/PostalCodeLookup';
import RecievedLetterTracker from './page/RecievedLetterTracker/RecievedLetterTracker';
import SendInquiry from './page/SendInquiry/SendInquiry';
import PostalStamp from './page/PostalStamp/PostalStamp';
import PostalCost from './page/PostalCost/PostalCost';
import AdminLayout from './page/Admin/AdminLayout';
import  { useState } from 'react';
import UserContext from './userContext';

function App() {
  const [userData, setUserData] = useState(null)
  
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
    <Router>
      <Routes>
      <Route path="/signUp" element={<SignUp />}>
      </Route>
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="/signUpForm" element={<SignUpForm />}>
      </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/home" element={<UserHome />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/help" element={<SendInquiry />}>
        </Route>
        <Route path="/contact" element={<Contact />}>
        </Route>
        <Route path="/services" element={<Services />}>
        </Route>
        {/* <Route path="/home/postalCodeLookup" element={<PostalCodeLookup/>}></Route>
        <Route path="/home/postalCost" element={<PostalCost/>}></Route>
        <Route path="/home/receivedLetterTracker" element={<RecievedLetterTracker/>}></Route>
        <Route path="/home/postStamp" element={<PostalStamp/>}></Route>
        <Route path="/home/sendInquiry" element={<SendInquiry/>}></Route> */}
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
