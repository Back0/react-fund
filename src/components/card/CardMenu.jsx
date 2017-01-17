import React from 'react';

const CardMenu = React.createClass({
  render () {
    return (
      <div id="menu">
        <section className="menu-sec money">
          <div className="menu-img"></div>
          <p className="title">财富币明细</p>
        </section>
        <section className="menu-sec cards">
          <div className="menu-img"></div>
          <p className="title">我的卡券</p>
        </section>
        <section className="menu-sec store">
          <div className="menu-img"></div>
          <p className="title">活动商城</p>
        </section>
      </div>
    );
  }
});
export default CardMenu;