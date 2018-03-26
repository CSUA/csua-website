import * as React from 'react';

import _PaperBorder from './_PaperBorder';
import Sp18 from './Sp18';

class ComputingResources extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div classname={'computing-resources'}>
        <_PaperBorder/>
        <Sp18/>
      </div>
    );
  }
}

export default ComputingResources;
export {ComputingResources};
