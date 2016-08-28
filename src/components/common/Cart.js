import React from "react";
import {Link, IndexLink} from "react-router";

class Cart extends React.Component {
  render() {
    return (


        <div className="pricing-grid">
            <div className="plan plan1">

                  <h2>CART</h2>


                    <ul className="features">
                      <li>
                        Sound Equalizer
                      </li>
                    </ul>


                  <p className="price">TOTAL</p>
                    <div className="ui animated fade orange button" tabIndex="outform">
                      <div className="visible content">CHECKOUT</div>
                      <div className="hidden content">
                    <Link to="outform">21000/-</Link>
                      </div>
                    </div>

                </div>
        </div>


    );
  }
}

export default Cart;
