import "./Footer.css"
import { LiaCopyrightSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {Link} from "react";
const Footer = () => {
  return ( 
    <footer>
    <div className="footer">
      <div className="col1">
        <h2>PAWTOBBY</h2>
          <p><LiaCopyrightSolid /> Copyright reserved</p>
      </div>
      <div className="col2">
        <div>
          <h4>Contact Us:</h4><br/>
          <FaLocationDot />
          <span>Location</span>
        </div>
        <div>
          <FaPhoneAlt />
          <span><a href="tel:+919360577908">9876543210</a></span>
        </div>
        <div>
          <IoMdMail />
          <span><a href="mailto:pawtobby@gmail.com">pawtobby@gmail.com</a></span>
        </div>
      </div>
      <div className="col3">
        <h4>ABOUT PAWTOBBY</h4><br/>
          <p>
Our pet care website provides trusted services for your beloved pets while you're away. From boarding to grooming and playtime, we ensure your furry friends receive love and attention in a safe environment.</p>
        <i className="fa-brands fa-facebook" id="fa"></i>
        <i className="fa-brands fa-square-instagram" id="fa"></i>
        <i className="fa-brands fa-twitter" id="fa"></i>
        <i className="fa-brands fa-linkedin"id="fa"></i>
      </div>
    </div>
  </footer>
   );
}
 
export default Footer;