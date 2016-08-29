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
            <p className="ui center aligned text">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
            </div>
        </div>
        <div className="column paddingleft"><HomeSlider/></div>
      </div>
      <div className="ui two column grid margin-top heightvh">
        <div className="column paddingright"><HomeSlider1/></div>
        <div className="column paddingleft heightvh">
        <div className="ui cards heightvh">

                <div className="card margin-right paddingleft marginleft border-radius vhtwentyfive margin-bottom">
                  <div className="ui image">
                    <div className="vhtwentyfive paddedcenter">
                    <h3 className="ui orange header">TEAM</h3></div>

                  </div>
                </div>
                <div className="card margin-right margin-left border-radius  vhtwentyfive margin-bottom">
                <div className="ui fade reveal image">
                  <img className="vhtwentyfive ui visible content" src="karthik.jpg"/>
                  <div className="vhtwentyfive ui hidden content paddedcenter">
                  <h3 className="ui orange header">FOUNDER</h3></div>

                </div>
                </div>
                <div className="card margin-right paddingleft marginleft border-radius vhtwentyfive margintop">
                <div className="ui fade reveal image">
                  <img className="vhtwentyfive ui visible content" src="divya.jpg"/>
                  <div className="vhtwentyfive ui hidden content paddedcenter">
                  <h3 className="ui orange header">CO-FOUNDER</h3></div>

                </div>
                </div>
                <div className="card margin-right margin-left border-radius vhtwentyfive margintop">
                <div className="ui fade reveal image">
                  <img className="vhtwentyfive ui visible content" src="deepak.jpg"/>
                  <div className="vhtwentyfive ui hidden content  paddedcenter">
                  <h3 className="ui orange header">CO-FOUNDER</h3></div>

                </div>
                </div>

      </div>

      </div>
      </div>
      </div>
      </div>






    );
  }
}

export default HomePage;
