import React from 'react';

const CardContent = React.createClass({
  render () {
    return (
      <div id="content">
        <section class="title">
          <p class="title-change">财富币兑换</p>
        </section>
        <div class="items">
          <div class="card">
            <p class="price">
              <span class="value">5</span>
            </p>
            <div class="detail">
              <p class="name">5元红包现金券</p>
              <p class="points">消耗财富币：<span class="count">500</span></p>
            </div>
            <div class="option">
              <div class="wrap">
                <p class="ops">立即</p>
                <p class="ops">兑换</p>
              </div>
            </div>
          </div>
          <div class="card">
            <p class="price">
              <span class="value">10</span>
            </p>
            <div class="detail">
              <p class="name">10元红包现金券</p>
              <p class="points">消耗财富币：<span class="count">5000</span></p>
            </div>
            <div class="option">
              <div class="wrap">
                <p class="ops">立即</p>
                <p class="ops">兑换</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
export default CardContent;