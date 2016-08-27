import React, {PropTypes} from 'react';
import Header from "./common/Header";

class App extends React.Component {
   render() {
     return (
                <div className="ui grid">
                    <div className="three wide column">
                    <Header />
                    </div>
                  <div className="thirteen wide column">
                    {this.props.children}
                  </div>

                </div>


     );
   }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
