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
            <div className="ui very padded segment heightvh">
            <h1 className="ui center aligned header orange"> PATRON HUB </h1> <br/>
            <p className="ui center aligned text">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
        </div>
        <div className="column paddingleft"><HomeSlider/></div>
      </div>
      <div className="ui two column grid margin-top heightvh">
        <div className="column paddingright"><HomeSlider1/></div>
        <div className="column paddingleft">
          <div className="ui very padded segment heightvh">
           <h3 className="ui center aligned header orange"> TEAM </h3> <br/>
          </div>
        </div>
      </div>

      </div>
      </div>




    );
  }
}

export default HomePage;
