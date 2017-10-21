import * as React from 'react';
import LazyLoad from 'react-lazy-load';
import {Guac} from 'guac-hoc/lib/Guac';

import {Card, CardTextArea, CardImageArea} from 'yui-md/lib/Card';

import {_PolitburoCreator} from './_PolitburoCreator';
import {_PaperBorder} from './_PaperBorder';

//These resolve to image strings that webpack outputs
import pbImg from 'static/images/pb/pb.jpg';

class Politburo extends React.PureComponent {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'pb-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Politburo</h3>
          <p className={'centered header'}>Po·lit·bu·ro (n):</p>
          <p className={'centered subheader'}>The
            central leadership of the CSUA, consisting of seven elected officers
            who are devoted to serving the undergraduate community. </p>
          <br/>
        </div>
        <div className={'info-area'}>
          <Card className={'card-content'}>
            <CardImageArea>
              <LazyLoad debounce={false} throttle={50}>
                <img src={pbImg} style={{width: '100%'}}/>
              </LazyLoad>
            </CardImageArea>
            <CardTextArea>
              <p>Newly elected Politburo members in the Wozniak Lounge.</p>
            </CardTextArea>
          </Card>
          <_PolitburoCreator remote={this.props.pb}/>
        </div>
      </div>
    );
  }
}

Politburo = Guac(Politburo);

export default Politburo;
export {Politburo};
