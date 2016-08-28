import React from "react";
import Slider from "react-slick";
import Cart from "../common/Cart";
import Gallery from "../gallery/ArtistGallery"

class ArtistProfile extends React.Component {
  render() {
    return (
      <div className="ui grid">
      <div className="eleven wide column paddingright">
      <h3 className="ui top attached header">
            Artist Profile
          </h3>
          <div className="ui stackable grid container raised segment">
          <div className="row">
            <div className="six wide column">
            <div className="ui card text">
                <div className="image">
                  <img className="" src="https://farm4.staticflickr.com/3510/3780855611_dcce5cc376.jpg"/>
                </div>
                <div className="content">
                  <a className="header">Kristy</a>
                  <div className="meta">
                    <span className="date">DJ ARTIST</span>
                  </div>
                </div>
                <div className="ui extra content orange button">

                      <i className="add icon"></i>
                      Add To Cart

                </div>
              </div>
            </div>
            <div className="ten wide column">
                            <div className="ui items">
                <div className="item">
                  <div className="content">
                    <h3 className="header">Kristy Larth</h3>
                    <div className="description">
                      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,</p>

                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
          </div>
          <div className="ui segment">
              <Gallery/>
          </div>

      </div>
      <div className="five wide column paddingleft fullvh">
        <Cart />
      </div>
      </div>
    );
  }
}

export default ArtistProfile;
