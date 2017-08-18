import * as React from 'react';
import logo from 'static/images/logos/logo.svg';
import {Divider} from 'yui-md/lib/Divider';
import {Card} from 'yui-md/lib/Card';

class Flyer extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'flyer'}>
        <div className={'paper-canvas'}>
          <div className={'top-overhang-1 z-depth-1'}/>
          <div className={'top-overhang-2 z-depth-1'}/>
          <div className={'top-overhang-3 z-depth-2'}/>
          <div className={'bottom-overhang-1 z-depth-5'}/>
          <div className={'bottom-overhang-2 z-depth-5'}/>
        </div>
        <div className={'info-area'}>
          <img className={'flyer-logo'} src={logo}/>
          <h4 className={'centered'}>CSUA</h4>
          <p className={'centered header'}>EE/CS Undergraduate Mixer</p>
          <p className={'centered subheader'}>Thursday, 8/24, 11AM - 1PM</p>
          <p className={'centered subheader'}>Wozniak Lounge, Soda Hall</p>
          <Divider horizontal margin/>
          <p className={'justified title'}>Come stop by the Wozniak Lounge during lunch next Thursday
            to meet professors, advisors, researchers, and peers! Lunch and refreshments will be served.</p>
        </div>
      </div>
    );
  }
}

export default Flyer;
export {Flyer};
