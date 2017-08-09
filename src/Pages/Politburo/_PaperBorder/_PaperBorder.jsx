import * as React from 'react';
import './style.scss';

class _PaperBorder extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'paper-border'}>
        <div className={'paper-canvas'}>
          <div className={'main-paper z-depth-1'}>
            <div className={'top-paper-1 z-depth-1'}/>
            <div className={'top-paper-2 z-depth-1'}/>
            <div className={'top-paper-3 z-depth-1'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default _PaperBorder;
export {_PaperBorder};
