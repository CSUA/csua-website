import * as React from 'react';

import _PaperBorder from './_PaperBorder';
import _OfficerCreator from './_OfficerCreator';

/*
  Props:
    - officers <array<object>>: see static/data/officers for structure.
*/
class Officers extends React.Component {
  constructor(props) {
    super(props);
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
          <_OfficerCreator officers={this.props.officers}/>
        </div>
      </div>
    );
  }
}

Officers = Officers;

export default Officers;
export {Officers};
