import * as React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import {About} from './About';

class Pages extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div>
        <About/>
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

Pages = withRouter(connect(mapStateToProps, mapDispatchToProps)(Pages));

export {Pages};
