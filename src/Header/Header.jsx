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
        aboutMenu: false
      }
    };
  }

  setMenuActive(menuName, active) {
    let currentlyActive = typeof(active) === 'undefined' ? !this.state.isActive[menuName] : active;
    let isActive = {...this.state.isActive};
    isActive[menuName] = currentlyActive;
    this.setState({isActive});
  }

  render() {
    return (
      <AppBar height={82} backgroundColor={'transparent'}>
        <h2 style={{display: 'inline-block'}}>CSUA</h2>
        <TabList style={{width: '50%', marginLeft: '150px'}}>
          <Tab onClick={() => this.setMenuActive('aboutMenu')} label='Hi'>
            <Menu dense active={this.state.isActive.aboutMenu} setActive={(active) => this.setMenuActive('aboutMenu', active)}>
              <MenuItem>
                Hi
              </MenuItem>
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
