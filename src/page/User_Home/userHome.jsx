import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

import PostalCodeLookup from '../PostalCodeLookup/PostalCodeLookup';
import RecievedLetterTracker from '../RecievedLetterTracker/RecievedLetterTracker';
import SendInquiry from '../SendInquiry/SendInquiry';
import PostalStamp from '../PostalStamp/PostalStamp';
import PostalCost from '../PostalCost/PostalCost';


const UserHome = () => {
  const gotoPostalCodeLookup = () => {
  };

  const gotoPostalCost = () => {};

  const gotoReceivedLetterTracker = () => {
  };

  const gotoPostStamp = () => {
  };

  const gotoSendInquiry = () => {
  };

  return (
    <div>
      <NavBar />
      <Button href="/home/postalCodeLookup"
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
      
      {/* <PostalCodeLookup />
      <PostalCost />  
      <RecievedLetterTracker />
      <PostalStamp />
      <SendInquiry /> */}

      <Footer />
    </div>
  );
};

export default UserHome;
