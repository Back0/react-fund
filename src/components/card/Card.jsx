import React, { Component } from 'react';
import CardHeader from 'components/card/CardHeader.jsx';
import CardMenu from 'components/card/CardMenu.jsx';
import CardContent from 'components/card/CardContent.jsx';


class Card extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id="app">
        <CardHeader/>
        <CardMenu/>
        <CardContent/>
      </div>
    );
  }
});
export default Card;
