import { FaAlignRight } from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useLogout} from "../../hooks/useLogout";
import {useAuthContext} from "../../hooks/useAuthContext";
import Logo from "../../assets/Home/logo.svg"
import {useState,useEffect} from "react";
import "./Navbar.css";
const Navbar = () => {
  const [mobileNav,setMobileNav] = useState(false);
  const {user} = useAuthContext();
  const {logout} = useLogout();
  const handleClick = ()=>{
    logout();
  }
  const handleNav = ()=>{
    setMobileNav(!mobileNav)
  }

  useEffect(()=>{
    const handleResize = ()=>{
      if(window.innerWidth>930)
        setMobileNav(false);
    }

    window.addEventListener('resize',handleResize);

    return ()=>window.removeEventListener('resize',handleResize)
  },[])
  return ( 
    <>
    <header>
      <img src={Logo} alt="Pawtobby Logo" />
      <nav>
        <ul>
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/about" className="link">About Us</Link></li>
        <li><Link to="/booking" className="link">Bookings</Link></li>
        <li><Link to="/booknow" className="link">Book Now</Link></li>

            {!user && (
              <>
              <li><Link to="/login" className="link link-border">Login</Link></li>
              </>
          )   
          }
          {user && 
                <li><Link onClick={handleClick} className="link">Logout</Link></li>
          }
        </ul>
        </nav>
        <FaAlignRight className="hamburger" onClick={handleNav}/>
      </header>
      {mobileNav &&  <div className = "mobile-ul">
        <ul>
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/about" className="link">About Us</Link></li>
        <li><Link to="/booking" className="link">Bookings</Link></li>
        <li><Link to="/booknow" className="link">Book Now</Link></li>

            {!user && (
              <>
              <li><Link to="/login" className="link link-border">Login</Link></li>
              </>
          )   
          }
          {user && 
                <li><Link onClick={handleClick} className="link">Logout</Link></li>
          }
        </ul>
      </div>}
    </>
   );
}
 
export default Navbar;