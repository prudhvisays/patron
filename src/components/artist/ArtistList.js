import React from "react";
import Slider from "react-slick";
import {Link, IndexLink} from "react-router";
import Cart from "../common/Cart";

class ArtistList extends React.Component {

  constructor(){
    super();

    this.state = { cartItems : [{ title: 'Product ', price: 3000, quantity: '1'}] };

  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 5,
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
      <div className="eleven wide column paddingright">
      <h3 className="ui top attached header">
  Artist Booking
</h3>
<div className="ui raised segment">
      <div className="ui vertical segment">
        <h3>DJ</h3>
      <Slider {...settings}>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
               DJ
            </div>
            <Link to="artistprofile">
              <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            </Link>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
               DJ
            </div>
            <Link to="artistprofile">
              <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            </Link>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
               DJ
            </div>
            <Link to="artistprofile">
              <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            </Link>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
               DJ
            </div>
            <Link to="artistprofile">
              <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            </Link>
            <div className="ui bottom attached label">CSS</div>
          </div>
      <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
               DJ
            </div>
            <Link to="artistprofile">
              <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            </Link>
            <div className="ui bottom attached label">CSS</div>
          </div>


      </Slider>
      </div>


      <div className="ui vertical segment">
        <h3>Singer</h3>
      <Slider {...settings}>
        <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
               Magician
            </div>
            <Link to="artistprofile">
              <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            </Link>
            <div className="ui bottom attached label">CSS</div>
        </div>
          <div className="ui fluid image listImage">
              <div className="ui black ribbon label">
                 Magician
              </div>
              <Link to="artistprofile">
                <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
              </Link>
              <div className="ui bottom attached label">CSS</div>
          </div>
          <div className="ui fluid image listImage">
              <div className="ui black ribbon label">
                 Magician
              </div>
              <Link to="artistprofile">
                <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
              </Link>
              <div className="ui bottom attached label">CSS</div>
          </div>
          <div className="ui fluid image listImage">
              <div className="ui black ribbon label">
                 Magician
              </div>
              <Link to="artistprofile">
                <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
              </Link>
              <div className="ui bottom attached label">CSS</div>
          </div>

        <div className="ui fluid image listImage">
            <div className="ui black ribbon label">
               Magician
            </div>
            <Link to="artistprofile">
              <img  src="https://farm1.staticflickr.com/7/5954480_34a881115f.jpg"/>
            </Link>
            <div className="ui bottom attached label">CSS</div>
        </div>


      </Slider>
      </div>



      </div>
      </div>
      <div className="five wide column paddingleft fullvh">
        <Cart cartItems={this.state.cartItems} />
      </div>
      </div>
    );
  }
}

export default ArtistList;
