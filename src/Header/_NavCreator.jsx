import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';

import {Tab} from 'yui-md/lib/Tab';
import {TabList} from 'yui-md/lib/TabList';
import {Menu} from 'yui-md/lib/Menu';
import {MenuItem} from 'yui-md/lib/MenuItem';
import mainNavs from 'static/structure/mainNavs.js';

/*
  Props:
  - navs: navs specified by mainNavs.js
*/
class _NavCreator extends React.Component {
  constructor(props) {
    super(props);
    this.bindAllMethods();
    let isActive = {};
    for (var i in props.navs) {
      isActive[props.navs[i].name] = false;
    }
    this.state = {
      isActive: isActive
    };
  }

  setMenuActive(menuName, active) {
    let currentlyActive = typeof(active) === 'undefined' ? !this.state.isActive[menuName] : active;
    this.state.isActive[menuName] = currentlyActive;
    this.setState({isActive: this.state.isActive});
  }

/*
  Only allows 2-deep navs
*/
  calcNavComponents(props) {
    let navs = props.navs;
    let navComponents = [];

    //Generate the tabs for the navs
    for (var i in navs) {
      let nav = navs[i];
      let menu = null;
      if (nav.subnavs) {
        let menuItems = [];

        //Generate menu items for the subnavs
        for (var i2 in nav.subnavs) {
          let subnav = nav.subnavs[i2];
          menuItems.push(<MenuItem key={i2}>{subnav.name}</MenuItem>);
        }
        //Generate menu for the subnavs
        menu = <Menu dense fastExpand
          active={this.state.isActive[nav.name]}
          setActive={(active) => this.setMenuActive(nav.name, active)}
          expand={'vertical'}
          style={{fontSize: '10px'}}>
            {menuItems}
          </Menu>;
      }
      navComponents.push(<Tab
        key={i}
        onMouseEnter={() => this.setMenuActive(nav.name, true)}
        onMouseLeave={() => this.setMenuActive(nav.name, false)}>
        {nav.name}
        {menu}
      </Tab>);
    }
    return navComponents;
  }

  render() {
    return (
      <TabList style={{margin: '10px',
                        marginBottom: '-10px',
                        boxSizing: 'border-box',
                        maxWidth: '70%',
                        float:'right'}}>
        {this.calcNavComponents(this.props)}
      </TabList>
    );
  }
}
_NavCreator.defaultProps = {
  navs: mainNavs
};

_NavCreator = Guac(_NavCreator);

export default _NavCreator;
export {_NavCreator};
