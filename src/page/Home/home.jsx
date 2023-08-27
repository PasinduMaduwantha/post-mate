import AuthForm from "../../components/Auth/AuthForm";
import LoginForm from "../../components/Auth/LoginForm";
import SignUpForm from "../../components/Auth/SignUpForm";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import PostalCodeLookup from "../PostalCodeLookup/PostalCodeLookup";
import PostalCost from "../PostalCost/PostalCost";
import RecievedLetterTracker from "../RecievedLetterTracker/RecievedLetterTracker";
import SendInquiry from "../SendInquiry/SendInquiry";
import UserHome from "../User_Home/userHome";
import "./home.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className='home-background'>
        <div className='home-background-wrap'>
          <AuthForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
