import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { Outlet } from "react-router";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

import PostalCodeLookup from "../PostalCodeLookup/PostalCodeLookup";
import RecievedLetterTracker from "../RecievedLetterTracker/RecievedLetterTracker";
import SendInquiry from "../SendInquiry/SendInquiry";
import PostalStamp from "../PostalStamp/PostalStamp";
import PostalCost from "../PostalCost/PostalCost";
import NumbersIcon from "@mui/icons-material/Numbers";
import SavingsIcon from "@mui/icons-material/Savings";
import EmailIcon from "@mui/icons-material/Email";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SendIcon from "@mui/icons-material/Send";

const UserHome = () => {
  const [activeSection, setActiveSection] = useState("postalCodeLookup");

  const goToSection = (section) => {
    setActiveSection(section);
  };

  //   const gotoPostalCodeLookup = (section) => {
  //     setActiveSection(section);
  //   };

  //   const gotoPostalCost = (section) => {
  //     setActiveSection(section);
  //   };

  //   const gotoReceivedLetterTracker = (section) => {
  //     setActiveSection(section);
  //   };

  //   const gotoPostStamp = (section) => {
  //     setActiveSection(section);
  //   };

  //   const gotoSendInquiry = (section) => {
  //     setActiveSection(section);
  //   };

  return (
    <div>
      <NavBar />
      <div>
        <div style={{ marginTop: "100px" }}>
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={2}
            marginBottom={2}
          >
            <Button
              variant='contained'
              color={
                activeSection === "postalCodeLookup" ? "primary" : "secondary"
              }
              startIcon={<NumbersIcon />}
              onClick={() => goToSection("postalCodeLookup")}
            >
              Postal Code Lookup
            </Button>
            <Button
              variant='contained'
              color={activeSection === "postalCost" ? "primary" : "secondary"}
              startIcon={<SavingsIcon />}
              onClick={() => goToSection("postalCost")}
            >
              Postal Cost
            </Button>
            <Button
              variant='contained'
              color={
                activeSection === "receivedLetterTracker"
                  ? "primary"
                  : "secondary"
              }
              startIcon={<EmailIcon />}
              onClick={() => goToSection("receivedLetterTracker")}
            >
              Received Letter Tracker
            </Button>
            <Button
              variant='contained'
              color={activeSection === "postStamp" ? "primary" : "secondary"}
              startIcon={<ConfirmationNumberIcon />}
              onClick={() => goToSection("postStamp")}
            >
              Post Stamp
            </Button>
            <Button
              variant='contained'
              color={activeSection === "sendInquiry" ? "primary" : "secondary"}
              startIcon={<SendIcon />}
              onClick={() => goToSection("sendInquiry")}
            >
              Send Inquiry
            </Button>
          </Stack>
        </div>

        {activeSection === "postalCodeLookup" && <PostalCodeLookup />}
        {activeSection === "postalCost" && <PostalCost />}
        {activeSection === "receivedLetterTracker" && <RecievedLetterTracker />}
        {activeSection === "postStamp" && <PostalStamp />}
        {activeSection === "sendInquiry" && <SendInquiry />}
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

      {/* {activeSection !== "postalCodeLookup" && <PostalCodeLookup />}
      {activeSection !== "postalCost" && <PostalCost />}
      {activeSection !== "receivedLetterTracker" && <RecievedLetterTracker />}
      {activeSection !== "postStamp" && <PostalStamp />}
      {activeSection !== "sendInquiry" && <SendInquiry />} */}

      <Footer />
    </div>
  );
};

export default UserHome;
