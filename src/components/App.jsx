import React, {Component} from 'react';
import { Link } from 'react-router';

class App extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="app-wrap">
        <h1>App</h1>
        <ul>
          <li><Link to="/card">Card</Link></li>
          <li><Link to="/questions">QA</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;