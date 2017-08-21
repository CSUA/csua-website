import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import LazyLoad from 'react-lazy-load';

import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import {Icon} from 'yui-md/lib/Icon';
import {Row, Col} from 'yui-md/lib';

import officersImg from 'static/images/industry/officers.jpg';
import industryEventImg from 'static/images/industry/industry_event.jpg';

import _PaperBorder from './_PaperBorder';

class Industry extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'industry-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Industry</h3>
          <p className={'centered subheader'}>The Berkeley CSUA works closely with
            companies, investors, entrepreneurs, and active members of the tech
            industry to bring mentorship and job opportunities to students.</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <Row>
            <Col xs={12} md={6}>
              <Card>
                <CardTextArea>
                  <p className={'centered title'}>Cause</p>
                  <Icon className={'centered'}>card_travel</Icon>
                  <p>The CSUA is dedicated to improving the experience of computer
                    science undergraduates at Berkeley. We host many types of events to bring
                    the best of industry together with the best in computer science
                    talent. Our sponsors fund some of the best resource on Berkeley's
                    campus, from a web server, to a high-performance computing
                    cluster, to career and technical development workshops that help teach
                    students important skills for industry.</p>
                </CardTextArea>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardImageArea>
                  <LazyLoad>
                    <img src={industryEventImg}/>
                  </LazyLoad>
                </CardImageArea>
                <CardTextArea>
                  <small>An industry panel presents their experiences.</small>
                </CardTextArea>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardTextArea>
                  <p className={'centered title'}>Students</p>
                  <Icon className={'centered'}>school</Icon>
                  <p>If you're a student looking for a job or an internship,
                    please look at our upcoming recruiting events here. If you
                    want to get exposed to skills that employers are looking for,
                    please refer to our workshops here. To be featured in our
                    resume book, stop by any one of our professional development
                    workshops and have your resume approved by a qualified CSUA
                    officer. Finally, opt-in to receive job offers from our
                    mailing list by speaking to an officer at one of our events or
                    visiting our office at 311 Soda Hall.</p>
                </CardTextArea>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardTextArea>
                  <p className={'centered title'}>Sponsors</p>
                  <Icon className={'centered'}>domain</Icon>
                  <p>If you would like to contribute to the CSUA, please email the
                    Politburo at politburo@csua.berkeley.edu. We have many different
                    sponsorship options, from hosting workshops to monetary sponsorships
                    and recruiting events. If you are an industry sponsor and are interested
                    in what the CSUA can offer your organization, please email
                    our Industry Relations department at indrel@csua.berkeley.edu.
                    Our current and former sponsors are listed here.</p>
                </CardTextArea>
              </Card>
            </Col>
            <Col xs={12}>
              <Card>
                <CardImageArea>
                  <LazyLoad>
                    <img src={officersImg}/>
                  </LazyLoad>
                </CardImageArea>
                <CardTextArea>
                  <small>Officers in front of Hearst Mining Circle.</small>
                </CardTextArea>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Industry;
export {Industry};
