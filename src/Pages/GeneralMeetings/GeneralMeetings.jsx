import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import {Icon} from 'yui-md/lib/Icon';
import {EventCalendar} from 'widgets/EventCalendar';

import _PaperBorder from './_PaperBorder';
import {generalMeetings} from 'static/data/events';

class GeneralMeetings extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'general-meetings-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>General Meetings</h3>
          <p className={'centered subheader'}>Each semester the CSUA
            holds three general meetings to introduce our organization,
            help you network, and help guide our efforts.</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <EventCalendar verbose events={generalMeetings}/>
        </div>
      </div>
    );
  }
}

export default GeneralMeetings;
export {GeneralMeetings};
