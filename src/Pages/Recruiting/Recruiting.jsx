import * as React from 'react';

import {Guac} from 'guac-hoc/lib/Guac';
import {EventCalendar} from 'widgets/EventCalendar';
import {recruiting} from 'static/data/events';

import _PaperBorder from './_PaperBorder';

class Recruiting extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
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

Recruiting = Guac(Recruiting);

export default Recruiting;
export {Recruiting};
