import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";
import $ from 'jquery';

class Header extends React.Component {

    componentDidMount() {
      $(this.refs.products)
        .accordion()
        ;

    }


  render() {
    return (
      <div className="ui vertical inverted accordion menu left fixed" ref="products">
      <div className="item">
        <img className="ui huge image" src="logo.png" />
      </div>
      <Link to="/" className="item">Home</Link>
      <Link to="combo" className="item">Combo Booking</Link>
        <div className="item">
        <a className="title">
        <i className="dropdown icon"></i>
        Exclusive Booking
        </a>
      <div className="content">
        <Link to="artistprofile" className="item">Artist Profile <div className="ui label">10000</div></Link>
        <Link to="exclusivebook" className="item">Sound<div className="ui label">51</div></Link>
        <Link to="artistlist" className="item">Artist Booking <div className="ui label">51</div></Link>
        <Link to="artistlist" className="item">Artist Booking <div className="ui label">51</div></Link>
      </div>
      </div>
      <Link to="artistlist" className="item">Artist Booking</Link>
      <div className="item">
        <div className="header">Support</div>
        <div className="menu">
          <a className="item">E-mail Support</a>
          <a className="item">FAQs</a>
        </div>
        </div>
      </div>
    );
  }


}

export default Header;
