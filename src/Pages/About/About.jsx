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
import officersImg from 'static/images/Officers_FA16.jpg';
import wozImg from 'static/images/Woz.jpg';

class About extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'about-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <div className={'centered title'}>CSUA</div>
          <p className={'centered subtitle'}>The home for all things CS.</p>
          <div className={'centered subtitle'}>
              <IconButton large icon='keyboard_arrow_down'/>
          </div>
        </div>
        <div className={'intro-area'}>
          <h1 className={'centered'}>The Computer Science Undergraduate Association</h1>
          <Row>
            <Col sm={12} md={6} lg={4} className={'card-column'}>
              <Card>
                <h3 className={'centered card-title'}>Hello World!</h3>
                <Icon className={'centered'}>lightbulb_outline</Icon>
                <p className={'card-text'}>The CSUA is here to make every step of
                  your undergraduate computer science experience smoother, easier,
                  and more fun! Looking for an internship or a job? Want to learn more CS skills?
                  Need help in a class? We have it all! Come to our events or visit
                  us at 311 Soda Hall to check us out.
                </p>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className={'card-column'}>
              <Card>
                <h3 className={'centered card-title'}>Who We Are</h3>
                <Icon className={'centered'}>face</Icon>
                <p className={'card-text'}>We are a group of smart, enthusiastic,
                  and fun-loving EECS and CS students who are passionate about
                  computer science. We are researchers, TAs, GSIs, hackers, hardware
                  gurus, open-sourcers, professionals, geeks, women, men, and in between.
                  But most importantly, we're proud members of the CS community.
                </p>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className={'card-column'}>
              <Card>
                <h3 className={'centered card-title'}>Need Help?</h3>
                <Icon className={'centered'}>help_outline</Icon>
                <p className={'card-text'}>The CSUA offers tutoring services,
                major declaration panels, internship workshops, and recruiting events.
                You can find a list of available tutors and office hours here.
                For events, click here. You can also drop by the office any time,
                and an available tutor will help you.
                </p>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={8} className={'card-column'}>
              <Card>
                <img src={officersImg} style={{width: '100%'}}/>
                <small>CSUA officers at Hearst Mining Circle.</small>
              </Card>
            </Col>

            <Col sm={12} lg={4} className={'card-column'}>
              <Card>
                <h3 className={'centered card-title'}>Resources</h3>
                <Icon className={'centered'}>bookmark_border</Icon>
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

About = withRouter(connect(mapStateToProps, mapDispatchToProps)(About));

export {About};
