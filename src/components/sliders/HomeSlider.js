import React from "react";
import {Link} from "react-router";
import Slider from "react-slick";

class HomeSlider extends React.Component{
  render() {
    const settings = {
      dots: false,
      slideToShow: 1,
      SlideToScroll: 1,
      adaptiveHeight: false,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <Slider {...settings}>
        <div><img className="sliderImage" src="https://upload.wikimedia.org/wikipedia/commons/6/67/Inside_the_Batad_rice_terraces.jpg" /></div>
        <div><img className="sliderImage" src="https://farm1.staticflickr.com/110/316612922_38fb0698f5.jpg" /></div>
        <div><img className="sliderImage" src="https://farm5.staticflickr.com/4085/5012797184_caa2c287fd.jpg" /></div>
      </Slider>
    );
  }
}

export default HomeSlider;
