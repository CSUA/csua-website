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
      <div className={'pb-page page'}>
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
                  <Col xs={12} md={6} lg={5} style={{overflow: 'hidden'}}>
                    <img src={meganImg} style={{minHeight: '100%', minWidth: '100%', alignSelf: 'center'}}/>
                  </Col>
                  <Col xs={12} md={6} lg={7} className={'card-text-area'}>
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
            <Col xs={12}className={'card-column'}>
              <Card>
                <Row className={'card-content'}>
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
            <Col className={'card-column'}>
              <Card>
                <Row className={'card-content'}>
                  <Col xs={12} md={6} lg={5}  style={{overflow: 'hidden'}}>
                    <img src={jonathanImg} style={{minHeight: '100%', minWidth: '100%', alignSelf: 'center'}}/>
                  </Col>
                  <Col xs={12} md={6} lg={7} className={'card-text-area'}>
                    <p className={'header'}>VP - Technology</p>
                    <p className={'name subheader'}>Jonathan Tan</p>
                    <p className={'email subheader'}>vp@csua.berkeley.edu</p>
                    <Divider horizontal margin/>
                    <p>The VP of Technology administers and maintains the technical
                      resources of the CSUA, such as the computer equipment,
                      servers, and list-serves. The VP is also the head of our
                      root staff and a liaison with all campus IT and technical
                      services. The VP solves or delegates the solving of any
                      technical issues.
                    </p>
                    <p>If you have any questions about your account or the CSUA
                      servers or software, please contact Jonathan.</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className={'card-column'}>
              <Card>
                <Row className={'card-content'}>
                  <Col xs={12} md={6} lg={5}  style={{overflow: 'hidden'}}>
                    <img src={yitzImg} style={{minHeight: '100%', minWidth: '100%', alignSelf: 'center'}}/>
                  </Col>
                  <Col xs={12} md={6} lg={7} className={'card-text-area'}>
                    <p className={'header'}>Secretary/Treasurer</p>
                    <p className={'name subheader'}>Yitz Deng</p>
                    <p className={'email subheader'}>treasurer@csua.berkeley.edu</p>
                    <Divider horizontal margin/>
                    <p>The Secretary/Treasurer takes minutes at meetings, maintains
                      the CSUA's monetary and physical resources (office, study
                        lounge, library, etc.), and keeps all financial and non-
                        financial records. The Secretary/Treasurer is also the
                        liaison with any University funding programs or facility
                        maintenance and the primary signatory power with the ASUC.</p>
                    <p>Please contact Yitz for questions about the CSUA's budget,
                      resources, or records.</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className={'card-column'}>
              <Card>
                <Row className={'card-content'}>
                  <Col xs={12} md={6} lg={5}  style={{overflow: 'hidden'}}>
                    <img src={rayImg} style={{minHeight: '100%', minWidth: '100%', alignSelf: 'center'}}/>
                  </Col>
                  <Col xs={12} md={6} lg={7} className={'card-text-area'}>
                    <p className={'header'}>External Events Director</p>
                    <p className={'name subheader'}>Ray Pan</p>
                    <p className={'email subheader'}>externalevents@csua.berkeley.edu</p>
                    <Divider horizontal margin/>
                    <p>The External Events Coordinator plans all external CSUA
                      events. An external event is defined as an event sponsored
                      by a company. The External Events Coordinator works closely
                      with the VP of Industrial Relations and the Internal Events
                      Coordinator.</p>
                    <p>Please contact Ray for any questions regarding upcoming
                      external events or with offers for potential future events.</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className={'card-column'}>
              <Card>
                <Row className={'card-content'}>
                  <Col xs={12} md={6} lg={5}  style={{overflow: 'hidden'}}>
                    <img src={neilImg} style={{minHeight: '100%', minWidth: '100%', alignSelf: 'center'}}/>
                  </Col>
                  <Col xs={12} md={6} lg={7} className={'card-text-area'}>
                    <p className={'header'}>Internal Events Director</p>
                    <p className={'name subheader'}>Neil Lingarker</p>
                    <p className={'email subheader'}>internalevents@csua.berkeley.edu</p>
                    <Divider horizontal margin/>
                    <p>The Internal Events Coordinator plans all internal CSUA
                      events. An internal event is defined as an event that does
                      not have a company sponsor. This includes general meetings,
                      intersocial events, and alumni events. The Internal Events
                      Coordinator works closely with the External Events Coordinator.
                    </p>
                    <p>Please direct internal events questions to Neil.</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col className={'card-column'}>
              <Card>
                <Row className={'card-content'}>
                  <Col xs={12} md={6} lg={5}  style={{overflow: 'hidden'}}>
                    <img src={emilyImg} style={{minHeight: '100%', minWidth: '100%', alignSelf: 'center'}}/>
                  </Col>
                  <Col xs={12} md={6} lg={7} className={'card-text-area'}>
                    <p className={'header'}>Outreach</p>
                    <p className={'name subheader'}>Emily Gosti</p>
                    <p className={'email subheader'}>outreach@csua.berkeley.edu</p>
                    <Divider horizontal margin/>
                    <p>The Outreach chair maintains or delegates the maintenance
                      of the website and various social media accounts. The
                      Outreach chair also publicizes all CSUA events to the
                      student body, promotes interaction between current students
                      and alumni, and welcomes new members.</p>
                    <p>If you are a student interested in joining the CSUA,
                      feel free to reach out to Emily.</p>
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
