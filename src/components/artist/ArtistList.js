import React from "react";
import Slider from "react-slick";
import Cart from "../common/Cart";

class ArtistList extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
          }
      }, {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }, {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }]
    };
    return (
      <div className="ui grid">
      <div className="eleven wide column">
      <h3 className="ui top attached header">
  Artist Booking
</h3>
<div className="ui raised segment">
      <div className="ui vertical segment">
      <Slider {...settings}>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> DJ
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> DJ
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> DJ
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> DJ
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> DJ
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>


      </Slider>
      </div>

      <div className="ui vertical segment">
      <Slider {...settings}>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Singer
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Singer
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Singer
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Singer
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Singer
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>


      </Slider>
      </div>

      <div className="ui vertical segment">
      <Slider {...settings}>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Magician
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Magician
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Magician
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Magician
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
              <i className="hotel icon"></i> Magician
            </div>
            <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            <div className="ui bottom attached label">CSS</div>
          </div>


      </Slider>
      </div>



      </div>
      </div>
      <div className="five wide column">
        <Cart />
      </div>
      </div>
    );
  }
}

export default ArtistList;
