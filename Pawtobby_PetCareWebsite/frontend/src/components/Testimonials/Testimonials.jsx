import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./Images";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};

function App()
{
  return (
    <>
      <div className="testimonial">
        <h1 className="header">Car Gallery</h1>
        <div className="container">
          <Slider {...settings}>
            {Images.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} className="img" />
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
  
}
export default App;