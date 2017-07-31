import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import './style.scss';

import {AppBar} from 'yui-md/lib/AppBar';
import {Tab} from 'yui-md/lib/Tab';
import {TabList} from 'yui-md/lib/TabList';
import logo from 'static/images/logos/logo.svg';

class Header extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <AppBar height={82} backgroundColor={'transparent'}>
        <h2 style={{display: 'inline-block'}}>CSUA</h2>
        <TabList>

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

Header = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

export {Header};
