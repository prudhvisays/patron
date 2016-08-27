import React from "react";
import Cart from "../common/Cart";
import $ from "jquery";

class ExclusiveBooking extends React.Component {
  componentDidMount() {
    $('this.refs.producttypes')
    .dropdown()
  ;

  }
  render() {
    return (
      <div className="ui grid">
      <div className="eleven wide column">
              <h3 className="ui top attached header">
                    Exclusive Booking
                  </h3>

                <div className="ui top attached header clearing segment">
                      <h3 className="ui right floated header">
                      100000
                      </h3>
                      <h3 className="ui left floated header">
                        Sound
                      </h3>
                    </div>

              <div className="ui attached segment grid cotainer">
                <div className="ui row middle aligned">
                  <div className="three wide column">
                  <div className="ui image">
                  <div className="ui top attached label">HTML</div>
                  <img src="https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"/>
                  </div>
                  </div>

                  <div className="five wide column">
                              <h4 className="ui header">
                            <i className="trophy icon"></i>
                            <div className="content">
                              Type
                              <div className="ui inline dropdown" ref="producttypes">
                                <div className="text">today</div>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                  <div className="header">Adjust time span</div>
                                  <div className="active item" data-text="today">Today</div>
                                  <div className="item" data-text="this week">This Week</div>
                                  <div className="item" data-text="this month">This Month</div>
                                </div>
                              </div>
                            </div>
                          </h4>
                  </div>
                  <div className="five wide column">
                                        <div className="ui mini icon input buttons">
                                        <button className="mini ui left attached button"><i className="minus icon"></i></button>
                      <input className="countInput" type="text" placeholder="5"/>
                      <button className="right attached mini ui button"><i className="plus icon"></i></button>

                      </div>
                                  </div>
                  <div className="three wide column centered"><h4>Amount: <span>10000</span></h4></div>
                </div>
                <div className="ui row middle aligned">
                  <div className="three wide column">
                  <div className="ui image">
                  <div className="ui top attached label">HTML</div>
                  <img src="https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"/>
                  </div>
                  </div>

                  <div className="five wide column">
                              <h4 className="ui header">
                            <i className="trophy icon"></i>
                            <div className="content">
                              Type
                              <div className="ui inline dropdown" ref="producttypes">
                                <div className="text">today</div>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                  <div className="header">Adjust time span</div>
                                  <div className="active item" data-text="today">Today</div>
                                  <div className="item" data-text="this week">This Week</div>
                                  <div className="item" data-text="this month">This Month</div>
                                </div>
                              </div>
                            </div>
                          </h4>
                  </div>
                  <div className="five wide column">
                                        <div className="ui mini icon input buttons">
                                        <button className="mini ui left attached button"><i className="minus icon"></i></button>
                      <input className="countInput" type="text" placeholder="5"/>
                      <button className="right attached mini ui button"><i className="plus icon"></i></button>

                      </div>
                                  </div>
                  <div className="three wide column centered"><h4>Amount: <span>10000</span></h4></div>
                </div>

                  </div>
      </div>
      <div className="five wide column">
        <Cart />
      </div>
      </div>
    );
  }
}
 export default ExclusiveBooking;
