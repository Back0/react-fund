import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from 'components/App';
import Index from 'components/common/Index';
import Card from 'components/card/Card';
import Questions from 'components/questions/Questions';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={Card} />

      <Route path="/card" component={Card}></Route>
      <Route path="/questions" component={Questions}></Route>
    </Route>
  </Router>,
  document.querySelector('#app-container')
);
