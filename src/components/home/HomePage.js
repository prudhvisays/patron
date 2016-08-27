import React from 'react';
import {Link} from 'react-router';
import Cart from "../common/Cart";
import HomeSlider from "../sliders/HomeSlider";

class HomePage extends React.Component {
  render(){
    return (
      <div className="ui grid">
      <div className="eleven wide column">
      <HomeSlider/>
      </div>
      <div className="five wide column">
        <Cart />
      </div>
      </div>




    );
  }
}

export default HomePage;
