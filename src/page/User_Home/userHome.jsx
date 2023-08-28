import React, { useState } from 'react';
import { Button } from "@mui/material";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

import PostalCodeLookup from '../PostalCodeLookup/PostalCodeLookup';
import RecievedLetterTracker from '../RecievedLetterTracker/RecievedLetterTracker';
import SendInquiry from '../SendInquiry/SendInquiry';
import PostalStamp from '../PostalStamp/PostalStamp';
import PostalCost from '../PostalCost/PostalCost';


const UserHome = () => {
  const [activeSection, setActiveSection] = useState(null);

  const goToSection = (section) => {
    setActiveSection(section);
  };


  // const gotoPostalCodeLookup = () => {
  // };

  // const gotoPostalCost = () => {

  // };

  // const gotoReceivedLetterTracker = () => {
  // };

  // const gotoPostStamp = () => {
  // };

  // const gotoSendInquiry = () => {
  // };

  return (
    <div>
      <NavBar />
      <div>
        <div style={{marginTop:'100px'}}>
          <Button onClick={() => goToSection('postalCodeLookup')}>Postal Code Lookup</Button>
          <Button onClick={() => goToSection('postalCost')}>Postal Cost</Button>
          <Button onClick={() => goToSection('receivedLetterTracker')}>Received Letter Tracker</Button>
          <Button onClick={() => goToSection('postStamp')}>Post Stamp</Button>
          <Button onClick={() => goToSection('sendInquiry')}>Send Inquiry</Button>
        </div>

        {activeSection === 'postalCodeLookup' && <PostalCodeLookup />}
        {activeSection === 'postalCost' && <PostalCost />}
        {activeSection === 'receivedLetterTracker' && <RecievedLetterTracker />}
        {activeSection === 'postStamp' && <PostalStamp />}
        {activeSection === 'sendInquiry' && <SendInquiry />}
      </div>
      {/* <Button
          href="/home/postalCodeLookup"
          onClick={gotoPostalCodeLookup}>Postal Code Lookup</Button>
        <Button href="/home/postalCost" 
          onClick={gotoPostalCost}>Postal Cost</Button>
        <Button href="/home/receivedLetterTracker" 
          onClick={gotoReceivedLetterTracker}>
          Received Letter Tracker
        </Button>
        <Button href="/home/postStamp"
          onClick={gotoPostStamp}>Post Stamp</Button>
        <Button href="/home/sendInquiry" 
          onClick={gotoSendInquiry}>Send Inquiry</Button>
      
        </div>*/}

      {activeSection !== 'postalCodeLookup'&& <PostalCodeLookup />}
      {activeSection !== 'postalCost' &&<PostalCost />}
      {activeSection !== 'receivedLetterTracker' &&<RecievedLetterTracker />}
      {activeSection !== 'postStamp' &&<PostalStamp />}
      {activeSection !== 'sendInquiry' &&<SendInquiry />}

      <Footer />
    </div>
  );
};

export default UserHome;
