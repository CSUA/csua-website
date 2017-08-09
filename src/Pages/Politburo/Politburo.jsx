import * as React from 'react';
import {connect} from 'react-redux';
import './style.scss';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Row, Col} from 'yui-md/lib';

import {IconButton} from 'yui-md/lib/Button';
import {Icon} from 'yui-md/lib/Icon';
import {Card} from 'yui-md/lib/Card';

import _PaperBorder from './_PaperBorder';

//These resolve to image strings that webpack outputs
import pbImg from 'static/images/pb/pb.jpg';
import meganImg from 'static/images/pb/Megan_Zhu.jpg';
import ericImg from 'static/images/pb/Eric_Hou.jpg';
import jonathanImg from 'static/images/pb/Jonathan_Tan.jpg';
import neilImg from 'static/images/pb/Neil_Lingarkar.jpg';
import rayImg from 'static/images/pb/Ray_Pan.jpg';
import yitzImg from 'static/images/pb/Yitz_Deng.jpg';
import emilyImg from 'static/images/pb/Emily_Gosti.jpg';

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
          <div className={'centered title'}>Politburo</div>
          <p className={'centered subtitle'}><b>po·lit·bu·ro (n):</b> <br/> The
            central leadership of the CSUA, consisting of seven elected officers
            who are devoted to serving the undergraduate community. </p>
        </div>
        <div className={'intro-area'}>
          <Row>
            <Col sm={12} className={'card-column'}>
              <Card>
                <img src={pbImg} style={{width: '100%'}}/>
                <small>Newly elected Politburo members in the Wozniak Lounge.</small>
              </Card>
            </Col>
          </Row>
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

export {Politburo};
