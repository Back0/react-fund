import React from 'react';
import CardHeader from 'components/card/CardHeader.jsx';
import CardMenu from 'components/card/CardMenu.jsx';
import CardContent from 'components/card/CardContent.jsx';


const Card = React.createClass({
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
