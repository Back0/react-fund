import React, {Component} from 'react';
import QAItem from 'components/questions/QAItem.jsx';

class Questions extends Component {
  constructor () {
    super();
  }

  render () {
    return (
        <div className="questions">
          <QAItem/>
        </div>
      );
  }
};

export default Questions;