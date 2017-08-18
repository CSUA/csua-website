import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import {Icon} from 'yui-md/lib/Icon';
import {EventCalendar} from 'widgets/EventCalendar';

import _PaperBorder from './_PaperBorder';

class Events extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'events-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Events</h3>
          <p className={'centered header'}>Workshops&emsp;·&emsp;Career Fairs&emsp;·&emsp;Hackathons</p>
          <p className={'centered subheader'}>The CSUA hosts a large number of events on a weekly basis to
          expose different areas of CS, help you find your place in industry, and show off your
          skills. We also host fun events with other student organizations to help you release
          stress and enjoy your time at Cal!</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <EventCalendar verbose/>
        </div>
      </div>
    );
  }
}

export default Events;
export {Events};
