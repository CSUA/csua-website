import * as React from 'react';

import _PaperBorder from './_PaperBorder';
import Sp18 from './Sp18';

class Hackathon extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'hackathon-page'}>
        <_PaperBorder/>
        <Sp18/>
      </div>
    );
  }
}

export default Hackathon;
export {Hackathon};
