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
        <div><img className="sliderImage" src="http://holifestival.com/files/userdata/images/holi-feast-3.jpeg" /></div>
        <div><img className="sliderImage" src="http://photovide.com/wp-content/uploads/2013/10/ADE/30.jpg" /></div>
        <div><img className="sliderImage" src="http://im.ziffdavisinternational.com/t/ign_za/articlepage/r/report-harmonix-is-developing-a-new-rock-band-game/report-harmonix-is-developing-a-new-rock-band-game_ebx2.1920.jpg" /></div>
      </Slider>
    );
  }
}

export default HomeSlider1;
