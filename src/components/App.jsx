import React, {Component} from 'react';

class App extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="app-wrap">
        {this.props.children}
      </div>
    );
  }
}

export default App;