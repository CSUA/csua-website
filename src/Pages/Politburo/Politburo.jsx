import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Row, Col} from 'yui-md/lib';

import {IconButton} from 'yui-md/lib/Button';
import {Icon} from 'yui-md/lib/Icon';
import {Card} from 'yui-md/lib/Card';
import {Divider} from 'yui-md/lib/Divider';

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
        <div className={'info-area'}>
          <Row>
            <Col xs={12} className={'card-column'}>
              <Card className={'card-content'}>
                <img src={pbImg} style={{width: '100%'}}/>
                <div className={'card-text-area'}>
                  <p>Newly elected Politburo members in the Wozniak Lounge.</p>
                </div>
              </Card>
            </Col>
            <Col xs={12} className={'card-column'}>
              <Card>
                <Row className={'card-content'}>
                  <Col xs={12} md={7} lg={4} style={{overflow: 'hidden'}}>
                    <img src={meganImg} style={{minHeight: '100%', minWidth: '100%', alignSelf: 'center'}}/>
                  </Col>
                  <Col xs={12} md={5} lg={8} className={'card-text-area'}>
                    <p className={'header'}>President</p>
                    <p className={'name subheader'}>Megan Zhu</p>
                    <p className={'email subheader'}>president@csua.berkeley.edu</p>
                    <Divider horizontal margin/>
                    <p>The President leads meetings and represents the CSUA in its duties as the
                      undergraduate computer science students' representative body. The President
                      liaisons with the University, faculty, staff, and other student organizations.
                    </p>
                    <p>Please contact Megan for general questions or concerns about the CSUA.</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={12} className={'card-column'}>
              <Card>
                <Row className={'card-content'} reverse={'md lg'}>
                  <Col xs={12} md={6} lg={5}  style={{overflow: 'hidden'}}>
                    <img src={ericImg} style={{minHeight: '100%', minWidth: '100%', alignSelf: 'center'}}/>
                  </Col>
                  <Col xs={12} md={6} lg={7} className={'card-text-area'}>
                    <p className={'header'}>VP - Industry Relations</p>
                    <p className={'name subheader'}>Eric Hou</p>
                    <p className={'email subheader'}>indrel@csua.berkeley.edu</p>
                    <Divider horizontal margin/>
                    <p>The VP of Industry Relations is the CSUA liaison with
                      companies and alumni. The VP attains sponsors for external
                      events and generates industry interest in the CSUA. The
                      VP also coordinates speakers for events, manages info
                      sessions and the job list-serve, and assists the President.
                    </p>
                    <p>Please contact Eric for any questions regarding events,
                      info sessions, speaking events, or sponsorships. Thank you
                      for your support and interest in the CSUA.</p>
                  </Col>
                </Row>
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
