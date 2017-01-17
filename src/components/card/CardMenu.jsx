import React from 'react';

const CardMenu = React.createClass({
  render () {
    return (
      <div id="menu">
        <section class="menu-sec money">
          <div class="menu-img"></div>
          <p class="title">财富币明细</p>
        </section>
        <section class="menu-sec cards">
          <div class="menu-img"></div>
          <p class="title">我的卡券</p>
        </section>
        <section class="menu-sec store">
          <div class="menu-img"></div>
          <p class="title">活动商城</p>
        </section>
      </div>
    );
  }
});
export default CardMenu;