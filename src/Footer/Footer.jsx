import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {StickyFooter} from 'yui-md/lib/StickyFooter';

class Footer extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  className() {
    let className = 'footer';
    return className;
  }

  render() {
    return (
      <StickyFooter className={this.className()}>
        Copyright © 2017 CSUA. All rights reserved.
        Maintained by CSUA Root Staff.
        Designed by&nbsp;<a href={'https://ultraeric.github.io/'}>Eric Hou</a>.
      </StickyFooter>
    );
  }
}

Footer = Guac(Footer);

export default Footer;
export {Footer};
