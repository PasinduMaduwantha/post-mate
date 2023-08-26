
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../../images/logo.png'
import profileIcon from '../../images/Profile-user.png'

const NavBar = () => {
    return ( 
      <div>

        <div className="navbar">
          <img 
          src={logo}
          alt=""
          style={{ width: '80px', height: 'auto', marginRight: '20px', }}  />
          
        <nav>
          <ul>
            <li><Link to="/userhome">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </nav>
          {/* <img src={profileIcon} alt="" style={{ width: '60px', height: 'auto',justifyItems:'right'}} /> */}
        </div>
        <div>
        </div>
      </div>
     );
}
 
export default NavBar;