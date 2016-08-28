import React, {PropTypes} from 'react';
import Header from "./common/Header";

class App extends React.Component {
   render() {
     return (
                <div className="ui grid">
                    <div className="widthchange">
                    <Header />
                    </div>

                  <div className="thirteen wide column article">
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
