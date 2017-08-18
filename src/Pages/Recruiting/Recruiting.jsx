import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import {Icon} from 'yui-md/lib/Icon';
import {EventCalendar} from 'widgets/EventCalendar';
import {recruiting} from 'static/data/events';

import _PaperBorder from './_PaperBorder';

class Recruiting extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'recruiting-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Recruiting</h3>
          <p className={'centered header'}>Jobs&emsp;·&emsp;Internships&emsp;·&emsp;Research</p>
          <p className={'centered subheader'}>Below you will find a list of recruiting events this semester
            to help you find your place in the world.</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <EventCalendar verbose events={recruiting}/>
        </div>
      </div>
    );
  }
}

Recruiting = Recruiting;

export default Recruiting;
export {Recruiting};
