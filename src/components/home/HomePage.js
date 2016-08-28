import React from 'react';
import {Link} from 'react-router';
import Cart from "../common/Cart";
import HomeSlider from "../sliders/HomeSlider";
import HomeSlider1 from "../sliders/HomeSlider1";

class HomePage extends React.Component {
  render(){
    return (
      <div className="ui grid">
      <div className="sixteen wide column paddingright">
      <div className="ui two column grid heightvh">
        <div className="column paddingright">
        <div className="ui segment heightvh">
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        </div>
        </div>
        <div className="column paddingleft"><HomeSlider/></div>
      </div>
      <div className="ui two column grid margin-top heightvh">
        <div className="column paddingright"><HomeSlider1/></div>
        <div className="column paddingleft"><div className="ui segment heightvh">About</div></div>
      </div>

      </div>
      </div>




    );
  }
}

export default HomePage;
