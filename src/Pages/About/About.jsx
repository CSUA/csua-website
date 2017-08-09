import * as React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Row, Col} from 'yui-md/lib';

import {IconButton} from 'yui-md/lib/Button';
import {Icon} from 'yui-md/lib/Icon';
import {Card} from 'yui-md/lib/Card';

import _PaperBorder from './_PaperBorder';
import officersImg from 'static/images/Officers_FA16.jpg';
import wozImg from 'static/images/Woz.jpg';

class About extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'about-page'}>
        <_PaperBorder/>
      </div>
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

About = withRouter(connect(mapStateToProps, mapDispatchToProps)(About));

export {About};
