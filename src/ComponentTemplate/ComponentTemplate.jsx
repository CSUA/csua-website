import * as React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

class ComponentTemplate extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div>
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

ComponentTemplate = withRouter(connect(mapStateToProps, mapDispatchToProps)(ComponentTemplate));

export {ComponentTemplate};
