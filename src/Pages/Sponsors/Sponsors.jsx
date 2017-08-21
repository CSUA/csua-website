import * as React from 'react';

import _PaperBorder from './_PaperBorder';

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
          <p className={'centered subheader'}></p>
          <br/>
        </div>
        <div className={'info-area'}>
        </div>
      </div>
    );
  }
}

Sponsors = Sponsors;

export default Sponsors;
export {Sponsors};
