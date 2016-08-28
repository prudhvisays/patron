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
            <h1> PATRON HUB </h1> <br/>
            <p> TUNE UP WITH THE MOST RELIABLE PARTNER TUNE UP WITH THE MOST RELIABLE PARTNER TUNE UP WITH THE MOST RELIABLE PARTNER TUNE UP WITH THE MOST RELIABLE PARTNER TUNE UP WITH THE MOST RELIABLE PARTNER TUNE UP WITH THE MOST RELIABLE PARTNER TUNE UP WITH THE MOST RELIABLE PARTNER</p>
        </div>
        <div className="column paddingleft"><HomeSlider/></div>
      </div>
      <div className="ui two column grid margin-top heightvh">
        <div className="column paddingright"><HomeSlider1/></div>
        <div className="column paddingleft">
          <div className="ui segment heightvh">
           <h2>  TEAM   </h2>
          </div>
        </div>
      </div>

      </div>
      </div>




    );
  }
}

export default HomePage;
