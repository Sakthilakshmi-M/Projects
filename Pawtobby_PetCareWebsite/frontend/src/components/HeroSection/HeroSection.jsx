import "./HeroSection.css";
import Dog from "../../assets/Home/output.png"
const HeroSection = () => {
  return ( 
    <div className="hero-div">
      <div className="content">
        <h2>PAWTOBBY</h2>
        <h3>Book Online</h3>
        <p>If you want someone to care for your
          pet when you are away, Pawtobby is a
          great choice.
        </p>
        <button>Book Now</button>
      </div>
    </div>
   );
}
 
export default HeroSection;