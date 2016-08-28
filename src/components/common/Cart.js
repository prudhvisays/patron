import React from "react";
import {Link, IndexLink} from "react-router";

class Cart extends React.Component {
  render() {
    return (

      <div className="ui fixed">
        <div className="pricing-grid">
            <div className="plan plan1">

                  <h2>CART</h2>


                    <ul className="features">
                      <li>Scratches everythingScratches everythingScratches everything</li>
                      <li>Easily lost for days</li>
                      <li>Kind of a bummer</li>
                      <li>Kind of a bummer</li>
                      <li>Kind of a bummer</li>
                      <li>Kind of a bummer</li>
                      <li>Kind of a bummer</li>
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
          </div>

    );
  }
}

export default Cart;
