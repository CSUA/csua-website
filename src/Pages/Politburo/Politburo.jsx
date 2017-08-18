import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import LazyLoad from 'react-lazy-load';
import {Row, Col} from 'yui-md/lib';

import {IconButton} from 'yui-md/lib/Button';
import {Icon} from 'yui-md/lib/Icon';
import {Card, CardTextArea, CardImageArea} from 'yui-md/lib/Card';
import {Divider} from 'yui-md/lib/Divider';

import {_PolitburoCreator} from './_PolitburoCreator';
import {_PaperBorder} from './_PaperBorder';

import meganImg from 'static/images/pb/Megan_Zhu.jpg';
import ericImg from 'static/images/pb/Eric_Hou.jpg';
import jonathanImg from 'static/images/pb/Jonathan_Tan.jpg';
import jasonImg from 'static/images/pb/Jason_Ji.jpg';
import rayImg from 'static/images/pb/Ray_Pan.jpg';
import yitzImg from 'static/images/pb/Yitz_Deng.jpg';
import emilyImg from 'static/images/pb/Emily_Gosti.jpg';

//These resolve to image strings that webpack outputs
import pbImg from 'static/images/pb/pb.jpg';

class Politburo extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
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
          <_PolitburoCreator/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {

  };
}

Politburo = withRouter(connect(mapStateToProps, mapDispatchToProps)(Politburo));

export default Politburo;
export {Politburo};
