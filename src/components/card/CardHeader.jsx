import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class CardHeader extends Component {
  constructor () {
    super();
  }
  render () {
    return (
      <header id="header">
        <div className="login">
          <img src="src/assets/imgs/logo.png" alt="" className="logo"/>
          <div className="message">
            <p className="money">财富币 <span className="question">?</span></p>
            <p className="login-state">未登录</p>
          </div>
          <div className="login-btn">立即登录</div>
        </div>
        <div className="desc">100财富币价值1元</div>
      </header>
    );
  }
}

export default CardHeader;