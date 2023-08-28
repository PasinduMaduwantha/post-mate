import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signUpForm" element={<SignUpForm/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<UserHome/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/help" element={<SendInquiry/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/home/postalCodeLookup" element={<PostalCodeLookup/>}/>
                <Route path="/home/postalCost" element={<PostalCost/>}/>
                <Route path="/home/receivedLetterTracker" element={<RecievedLetterTracker/>}/>
                <Route path="/home/postStamp" element={<PostalStamp/>}/>
                <Route path="/home/sendInquiry" element={<SendInquiry/>}/>
                <Route path="/admin/dashboard" element={<AdminLayout/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
