import React from 'react';

const CardHeader = React.createClass({
  render () {
    return (
      <header id="header">
        <div class="login">
          <img src="src/assets/imgs/logo.png" alt="" class="logo"/>
          <div class="message">
            <p class="money">财富币 <span class="question">?</span></p>
            <p class="login-state">未登录</p>
          </div>
          <div class="login-btn">立即登录</div>
        </div>
        <div class="desc">100财富币价值1元</div>
      </header>
    );
  }
});
export default CardHeader;