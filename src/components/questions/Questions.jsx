import React, {Component} from 'react';
import QAItem from 'components/questions/QAItem.jsx';

class Questions extends Component {
  constructor () {
    super();
    this.state = {
      qas: [
        {
          question: 'this is a question',
          answer: `这是问题的答案，这个答案可能有点长。
          这是问题的答案，这个答案可能有点长。
          这个答案可能有点长。这是问题的答案，
          这个答案可能有点长。这是问题的答案，
          这是问题的答案，这个答案可能有点长。`
        },
        {
          question: 'this is a question',
          answer: `这是问题的答案，这个答案可能有点长。
          这是问题的答案，这个答案可能有点长。
          这个答案可能有点长。这是问题的答案，
          这个答案可能有点长。这是问题的答案，
          这是问题的答案，这个答案可能有点长。`
        }
      ]
    };
  }

  render () {
    return (
        <div className="questions">

          <QAItem qa={ this.state.qas[0] }/>
          <QAItem qa={ this.state.qas[1] }/>

        </div>
      );
  }
};

export default Questions;