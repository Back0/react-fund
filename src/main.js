import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Card from 'components/card/Card.jsx';
import Questions from 'components/questions/Questions.jsx';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={Card}></Route>
    <Route path="/questions" component={Questions}></Route>
  </Router>,
  document.querySelector('#app-container')
);
