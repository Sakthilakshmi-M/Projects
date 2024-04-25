import Dog from "../assets/Home/s.jpg"
import "./AboutPage.css";
const AboutUsPage = () => {
  return (
    <section class="container" id="aboutus">
    <h2 class="sub-heading">ABOUT US</h2>
    <div class="about">
      <div class="about1">
        <img src={Dog} alt=""/>
      </div>
      <div class="about2">
        
Welcome to Pawtobby, your trusted destination for premium pet care services and products. Our mission is to provide top-quality grooming, veterinary care, boarding, daycare, and pet supplies to ensure your pets live happy and healthy lives. With experienced professionals, personalized care, and a wide range of high-quality products, we are your one-stop shop for all your pet's needs. Visit us today and experience the difference at Pawtobby. Let us be your partner in providing the best care for your furry companions. Your pets deserve the best, and we are here to deliver it!
In addition to our exceptional services, we are committed to creating a welcoming and pet-friendly environment for both you and your furry friends. Our team of passionate pet enthusiasts is always ready to assist you with expert advice, tips, and recommendations to help you make informed decisions about your pet's well-being. Whether you need grooming tips, nutritional advice, or simply want to explore our range of products, Pawtobby is here to support you every step of the way. Join us in our mission to prioritize the happiness, health, and comfort of your beloved pets.
      </div>
    </div>
  </section>
  );
}
 
export default AboutUsPage;