import React from "react";
import {Link} from "react-router";
import Slider from "react-slick";

class HomeSlider1 extends React.Component{
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
        <div><img className="sliderImage" src="slider2.jpg" /></div>
        <div><img className="sliderImage" src="slider3.jpg" /></div>
        <div><img className="sliderImage" src="slider1.jpg" /></div>
      </Slider>
    );
  }
}

export default HomeSlider1;
