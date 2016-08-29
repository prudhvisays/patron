import React from 'react';
import Cart from "../common/Cart";

class ComboPage extends React.Component {

  constructor(){
    super();

    this.state = { cartItems : [{ title: 'Product ', price: 3000, quantity: '1'}] };

  }

  render() {
    return (
      <div className="ui grid">
      <div className="eleven wide column paddingright">
                      <h3 className="ui top attached header">
                  Combo Booking
                </h3>
            <div className="ui raised segment">
                  <div className="ui divided items">
                        <div className="item">
                          <div className="image">
                            <img src="thumb.jpg" />
                          </div>
                          <div className="content">
                            <a className="header">Music Concert</a>
                            <div className="meta">
                              <span className="cinema">90,000 INR</span>
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

                        <div className="item">
                          <div className="image">
                            <img src="thumb.jpg" />
                          </div>
                          <div className="content">
                            <a className="header">Wedding Combo</a>
                            <div className="meta">
                              <span className="cinema">25,000 INR</span>
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
                        <div className="item">
                          <div className="image">
                            <img src="thumb.jpg" />
                          </div>
                          <div className="content">
                            <a className="header">Music Combo</a>
                            <div className="meta">
                              <span className="cinema">45,000 INR</span>
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

      <div className="five wide column paddingleft fullvh">
        <Cart cartItems={this.state.cartItems} />
      </div>
      </div>
    );
  }
}

export default ComboPage;
