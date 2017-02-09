import React, {Component} from 'react';
import 'assets/css/questions.css';

class QAItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <dl className="qa-item">
        <dt className="qa-title">{ this.props.qa.question }</dt>
        <dd className="qa-answer">
          { this.props.qa.answer }
        </dd>
      </dl>
    );
  }
}

export default QAItem;