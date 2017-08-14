import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import LazyLoad from 'react-lazy-load';
import {Row, Col} from 'yui-md/lib';

import {IconButton} from 'yui-md/lib/Button';
import {Icon} from 'yui-md/lib/Icon';
import {Card, CardTextArea, CardImageArea} from 'yui-md/lib/Card';
import {Divider} from 'yui-md/lib/Divider';

import _PaperBorder from './_PaperBorder';
import _OfficerCreator from './_OfficerCreator';

class Officers extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'officers-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Officers</h3>
          <p className={'centered header'}>Tutoring&emsp;·&emsp;Advising&emsp;·&emsp;Leading</p>
          <p className={'centered subheader'}>Our officers are here to make your
            undergraduate computer science experience the best it can be. Need
            tutoring? Want help on a personal project? Looking for a job? Want
            to find your community? Come visit us in 311 Soda!</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <_OfficerCreator/>
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

Officers = withRouter(connect(mapStateToProps, mapDispatchToProps)(Officers));

export default Officers;
export {Officers};
