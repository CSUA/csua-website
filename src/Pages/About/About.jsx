import * as React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import officersImg from 'static/images/Officers_FA16.jpg';

class About extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div>
        <img src={officersImg} width='100%'/>
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
