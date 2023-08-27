import { Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const UserHome = () => {
  const gotoPostalCodeLookup = () => {};

  const gotoPostalCost = () => {};

  const gotoReceivedLetterTracker = () => {};

  const gotoPostStamp = () => {};

  const gotoSendInquiry = () => {};

  return (
    <div>
      <NavBar />
      <Button onClick={gotoPostalCodeLookup}>Postal Code Lookup</Button>
      <Button onClick={gotoPostalCost}>Postal Cost</Button>
      <Button onClick={gotoReceivedLetterTracker}>
        Received Letter Tracker
      </Button>
      <Button onClick={gotoPostStamp}>Post Stamp</Button>
      <Button onClick={gotoSendInquiry}>Send Inquiry</Button>
      <Footer />
    </div>
  );
};

export default UserHome;
