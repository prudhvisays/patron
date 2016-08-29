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

                <div className="ui header clearing segment">
                      <h3 className="ui right floated header">
                      1,00,000
                      </h3>
                      <h3 className="ui left floated header">
                      Sound
                      </h3>
              </div>

              <div className="ui raised segment">
              <div className="ui padded grid cotainer">
                <div className="ui row middle aligned">
                  <div className="four wide column">
                  <div className="ui small image">
                  <div className="ui top attached orange label">TOPS</div>
                  <img src="https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"/>
                  </div>
                  </div>

                  <div className="four wide column">
                            <h4 className="ui header">

                            <div className="four wide column">
                                        <h4 className="ui header">
                                                <select className="ui dropdown">
                                                  <option value="">Type</option>
                                                  <option value="1">Small</option>
                                                  <option value="0">Large</option>
                                                </select>
                                            </h4>
                            </div>
                          </h4>
                  </div>
                  <div className="four wide column">
                                        <div className="ui mini icon input buttons">
                                        <button className="mini ui left attached button"><i className="ui minus icon margin-zero"></i></button>
                      <input className="countInput" type="text" placeholder="0"/>
                      <button className="right attached mini ui button"><i className="ui plus icon margin-zero"></i></button>

                      </div>
                                  </div>
                  <div className="four wide column"><h4>Amount: <span>3,000</span></h4></div>
                </div>

                <div className="ui row middle aligned stackable">
                  <div className="four wide column">
                  <div className="ui small image">
                  <div className="ui top attached orange label">BASE</div>
                  <img src="https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"/>
                  </div>
                  </div>

                  <div className="four wide column">
                              <h4 className="ui header">
                                      <select className="ui dropdown">
                                        <option value="">Type</option>
                                        <option value="1">Small</option>
                                        <option value="0">Large</option>
                                      </select>
                                  </h4>
                  </div>
                  <div className="four wide column">
                                        <div className="ui mini icon input buttons">
                                        <button className="mini ui left attached button"><i className="minus icon margin-zero"></i></button>
                      <input className="countInput" type="text" placeholder="0"/>
                      <button className="right attached mini ui button" onClick={this.addToCart()}><i className="plus icon margin-zero"></i></button>

                      </div>
                  </div>
                  <div className="four wide column"><h4>Amount: <span>3,000</span></h4></div>
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
 export default ExclusiveBooking;
