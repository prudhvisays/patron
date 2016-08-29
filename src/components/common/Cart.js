import React from "react";
import {Link, IndexLink} from "react-router";

class Cart extends React.Component {

  componentWillReceiveProps(){


  }


  render() {

    function renderCartItems(cartItems){
      console.log(cartItems);
      return cartItems.forEach( item =>
          {
            <li>
            {item.title} - {item.cost} <br/>
            {item.quantity}
            </li>
          }
      );
    }

    return (
        <div className="pricing-grid">
            <div className="plan plan1">
                  <h2>CART</h2>
                    <ul className="features">
                        {
                          this.props.cartItems.map(item => {
                              <li>
                                {item.title}
                              </li>
                          })
                        }
                    </ul>
                  <p className="price">TOTAL</p>
                    <div className="ui animated fade orange button" tabIndex="outform">
                      <div className="visible content">CHECKOUT</div>
                      <div className="hidden content">
                    <Link to="outform">21,000/-</Link>
                      </div>
                    </div>

                </div>
        </div>


    );
  }
}

export default Cart;
