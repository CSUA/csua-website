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
            <div className={'left-overhang z-depth-3'}>
              <div className={'left-overhang-accent z-depth-1'}/>
              <div className={'left-paper-1 z-depth-1'}/>
              <div className={'left-paper-2 z-depth-1'}/>
              <div className={'left-paper-3 z-depth-1'}/>
              <div className={'left-paper-4 z-depth-1'}/>
            </div>
            <div className={'top-overhang z-depth-2'}>
              <div className={'top-paper-1 z-depth-1'}/>
              <div className={'top-paper-2 z-depth-1'}/>
              <div className={'top-paper-3 z-depth-1'}/>
              <div className={'top-paper-4 z-depth-2'}/>
              <div className={'top-paper-5 z-depth-1'}/>
              <div className={'top-paper-6 z-depth-2'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default _PaperBorder;
export {_PaperBorder};
