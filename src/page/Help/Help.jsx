import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SendInquiry from "../SendInquiry/SendInquiry";

const Help = () => {
    return (
        <div>
            <div style={{marginTop: 100}}>
                <NavBar/>
                <SendInquiry/>
                <Footer/>
            </div>
        </div>
    );
};

export default Help;
