import React from "react";
import {Link} from "react-router";
import Slider from "react-slick";

class HomeSlider extends React.Component{
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slideToShow: 1,
      SlideToScroll: 1,
      adaptiveHeight: false,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <Slider {...settings}>
        <div><img src="http://placekitten.com/g/400/200" /></div>
        <div><img src="http://placekitten.com/g/400/200" /></div>
        <div><img src="http://placekitten.com/g/400/200" /></div>
      </Slider>
    );
  }
}

export default HomeSlider;
