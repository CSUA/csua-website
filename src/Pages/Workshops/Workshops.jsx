import * as React from 'react';

import {EventCalendar} from 'widgets/EventCalendar';
import {workshops} from 'static/data/events';

import _PaperBorder from './_PaperBorder';

class Workshops extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'workshops-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Workshops</h3>
          <p className={'centered header'}>Machine Learning&emsp;·&emsp;Blockchain&emsp;·&emsp;Professional Development</p>
          <p className={'centered subheader'}>Below you will find a list of workshops this semester
            to help introduce you to a wide variety of topics in CS.</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <EventCalendar verbose events={workshops}/>
        </div>
      </div>
    );
  }
}

Workshops = Workshops;

export default Workshops;
export {Workshops};
