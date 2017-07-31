import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import './style.scss';

import {AppBar} from 'yui-md/lib/AppBar';
import {Tab} from 'yui-md/lib/Tab';
import {TabList} from 'yui-md/lib/TabList';
import {Menu} from 'yui-md/lib/Menu';
import {MenuItem} from 'yui-md/lib/MenuItem';
import logo from 'static/images/logos/logo.svg';

class Header extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
    this.state = {
      isActive: {
        aboutMenu: false,
        eventsMenu: false
      }
    };
  }

  setMenuActive(menuName, active) {
    let currentlyActive = typeof(active) === 'undefined' ? !this.state.isActive[menuName] : active;
    this.state.isActive[menuName] = currentlyActive;
    this.setState({isActive: this.state.isActive});
  }

  render() {
    return (
      <AppBar height={82} backgroundColor={'transparent'}>
        <h2 style={{display: 'inline-block'}}>CSUA</h2>
        <TabList style={{width: '50%', marginLeft: '150px'}}>
          <Tab onMouseEnter={() => this.setMenuActive('aboutMenu', true)}
            onMouseLeave={() => this.setMenuActive('aboutMenu', false)}
            label='About'>
            <Menu dense fastExpand
              active={this.state.isActive.aboutMenu}
              setActive={(active) => this.setMenuActive('aboutMenu', active)}
              expand={'vertical'}
              style={{minWidth: '100%',
                      fontSize: '10px'}}>
              <MenuItem>Politburo</MenuItem>
              <MenuItem>Officers</MenuItem>
              <MenuItem>Constitution</MenuItem>
            </Menu>
          </Tab>
          <Tab onMouseEnter={() => this.setMenuActive('eventsMenu', true)}
            onMouseLeave={() => this.setMenuActive('eventsMenu', false)}
            label='Events'>
            <Menu dense fastExpand
              active={this.state.isActive.eventsMenu}
              setActive={(active) => this.setMenuActive('eventsMenu', active)}
              expand={'vertical'}
              style={{minWidth: '100%',
                      fontSize: '10px'}}>
              <MenuItem>Workshops</MenuItem>
              <MenuItem>asdf</MenuItem>
              <MenuItem>asdf</MenuItem>
            </Menu>
          </Tab>
          <Tab>Hi2</Tab>
        </TabList>
      </AppBar>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {

  };
}

Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Guac(Header)));

export {Header};
