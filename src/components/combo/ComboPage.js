import React from 'react';
import Cart from "../common/Cart";

class ComboPage extends React.Component {
  render() {
    return (
      <div className="ui grid">
      <div className="eleven wide column">
                      <h3 className="ui top attached header">
                  Combo Booking
                </h3>
            <div className="ui raised segment">
                                    <div className="ui divided items">
                        <div className="item">
                        <div className="image">
                          <img src="/images/wireframe/image.png" />
                        </div>
                        <div className="content">
                          <a className="header">My Neighbor Totoro</a>
                          <div className="meta">
                            <span className="cinema">PRICE</span>
                          </div>
                          <div className="description">
                            <p></p>
                          </div>
                          <div className="extra">
                            <div className="ui right floated orange button">
                              Add To Cart
                              <i className="right chevron icon"></i>
                            </div>
                            <div className="ui label">Limited</div>
                          </div>
                        </div>
                        </div>

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

export default ComboPage;
