import React, {Component} from 'react';

class CardMenu extends Component {
  constructor () {
    super();
    this.state = {
      menus: [{
        type: 'money',
        title: '财富币明细'
      }, {
        type: 'cards',
        title: '我的卡券'
      }, {
        type: 'store',
        title: '活动商城'
      }]
    };
  }
  render () {
    return (
      <div id="menu">
        {
          this.state.menus.map(item => {
            return (
              <section className={"menu-sec " + item.type}>
                <div className="menu-img"></div>
                <p className="title">{item.title}</p>
              </section>
            );
          })
        }
      </div>
    );
  }
}

export default CardMenu;