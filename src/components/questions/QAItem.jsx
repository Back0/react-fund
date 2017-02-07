import React, {Component} from 'react';

class QAItem extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <dl className="qa-item">
        <dt className="qa-title">this is a question</dt>
        <dd className="qa-answer">
          这是问题的答案，这个答案可能有点长。
          这是问题的答案，这个答案可能有点长。
          这个答案可能有点长。这是问题的答案，
          这个答案可能有点长。这是问题的答案，
          这是问题的答案，这个答案可能有点长。
        </dd>
      </dl>
    )
  }
}

export default QAItem;