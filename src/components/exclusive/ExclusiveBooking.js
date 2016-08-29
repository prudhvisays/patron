import React from "react";
import Cart from "../common/Cart";
import $ from "jquery";

class ExclusiveBooking extends React.Component {

  constructor(){
    super();

    this.state = { cartItems : [{ title: 'Product ', price: 3000, quantity: '1'}] };

  }

  componentDidMount() {
    $(this.refs.producttypes).dropdown();

    this.addToCart = this.addToCart.bind(this);

  }

  addToCart(){
    let item = { title: 'Product ' + (this.state.cartItems.length + 1), price: 3000, quantity: '1'};
    this.state.cartItems.push(item);
  }


  render() {
    return (
      <div className="ui grid">
      <div className="eleven wide column paddingright">
                <h3 className="ui top attached header">
                    Exclusive Booking
                </h3>

                <div className="ui top attached header clearing segment">
                      <h3 className="ui right floated header">
                      1,00,000
                      </h3>
                      <h3 className="ui left floated header">
                      Sound
                      </h3>
              </div>

              <div className="ui attached segment grid cotainer">
                <div className="ui row middle aligned">
                  <div className="three wide column">
                  <div className="ui image">
                  <div className="ui top attached label">HTML</div>
                  <img src="https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"/>
                  </div>
                  </div>

                  <div className="five wide column">
                            <h4 className="ui header">

                            <div className="content">
                              Type
                              <div className="ui inline dropdown" ref="producttypes">

                                <i className="dropdown icon"></i>
                                  <div className="menu">
                                    <div className="header">Adjust time span</div>
                                    <div className="active item" data-text="Small">Small</div>
                                    <div className="item" data-text="Medium">Medium</div>
                                    <div className="item" data-text="Large">Large</div>
                                  </div>
                              </div>
                            </div>
                          </h4>
                  </div>
                  <div className="five wide column">
                                        <div className="ui mini icon input buttons">
                                        <button className="mini ui left attached orange button"><i className="ui inverted minus icon"></i></button>
                      <input className="countInput" type="text" placeholder="5"/>
                      <button className="right attached mini ui orange button"><i className="ui inverted plus icon"></i></button>

                      </div>
                                  </div>
                  <div className="three wide column centered"><h4>Amount: <span>3,000</span></h4></div>
                </div>
                <div className="ui row middle aligned stackable">
                  <div className="three wide column">
                  <div className="ui image">
                  <div className="ui top attached label">HTML</div>
                  <img src="https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"/>
                  </div>
                  </div>

                  <div className="five wide column paddingleft">
                              <h4 className="ui header">

                            <div className="content">
                              Type
                              <div className="ui inline dropdown" ref="producttypes">

                                <i className="dropdown icon"></i>
                                <div className="menu">
                                  <div className="header">Adjust time span</div>
                                  <div className="active item" data-text="Small">Today</div>
                                  <div className="item" data-text="Medium">This Week</div>
                                  <div className="item" data-text="Large">This Month</div>
                                </div>
                              </div>
                            </div>
                          </h4>
                  </div>
                  <div className="five wide column paddingleft">
                                        <div className="ui mini icon input buttons">
                                        <button className="mini ui left attached button"><i className="minus icon"></i></button>
                      <input className="countInput" type="text" placeholder="5"/>
                      <button className="right attached mini ui button" onClick={this.addToCart()}><i className="plus icon"></i></button>

                      </div>
                  </div>
                  <div className="three wide column centered"><h4>Amount: <span>3,000</span></h4></div>
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
 export default ExclusiveBooking;
