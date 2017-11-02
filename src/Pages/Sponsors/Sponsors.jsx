import * as React from 'react';
import {Guac} from 'guac-hoc/lib/Guac';

import _PaperBorder from './_PaperBorder';
import _SponsorCreator from './_SponsorCreator';

class Sponsors extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'sponsors-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Sponsors</h3>
          <p className={'centered header'}></p>
          <p className={'centered subheader'}>Thanks to all of our sponsors for
            making our hackathons, workshops, socials, and professional/technical
            services available for all UC Berkeley undergraduates.</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <_SponsorCreator sponsors={this.props.sponsors}/>
        </div>
      </div>
    );
  }
}

Sponsors = Guac(Sponsors);

export default Sponsors;
export {Sponsors};
