import React, {Component} from 'react';

class CardContent extends Component {
  render () {
    return (
      <div id="content">
        <section className="title">
          <p className="title-change">财富币兑换</p>
        </section>
        <div className="items">
          <div className="card">
            <p className="price">
              <span className="value">5</span>
            </p>
            <div className="detail">
              <p className="name">5元红包现金券</p>
              <p className="points">消耗财富币：<span className="count">500</span></p>
            </div>
            <div className="option">
              <div className="wrap">
                <p className="ops">立即</p>
                <p className="ops">兑换</p>
              </div>
            </div>
          </div>
          <div className="card">
            <p className="price">
              <span className="value">10</span>
            </p>
            <div className="detail">
              <p className="name">10元红包现金券</p>
              <p className="points">消耗财富币：<span className="count">5000</span></p>
            </div>
            <div className="option">
              <div className="wrap">
                <p className="ops">立即</p>
                <p className="ops">兑换</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardContent;