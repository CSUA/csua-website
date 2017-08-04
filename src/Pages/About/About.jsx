import * as React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Row, Col} from 'react-flexbox-grid';

import {IconButton} from 'yui-md/lib/Button';

import _PaperBorder from './_PaperBorder';
import officersImg from 'static/images/Officers_FA16.jpg';

class About extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'about-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h1 className={'centered-title'}>CSUA</h1>
          <p className={'centered-subtitle'}>The home for all things CS.</p>
          <div className={'centered-subtitle'}>
              <IconButton large icon='keyboard_arrow_down'/>
          </div>
        </div>
        <div className={'intro-area'}>

        </div>
        <div>

        </div>

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
