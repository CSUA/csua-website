import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';

import LazyLoad from 'react-lazy-load';

import {Card, CardImageArea, CardTextArea} from 'yui-md/lib/Card';
import {Icon} from 'yui-md/lib/Icon';
import {Row, Col, Divider} from 'yui-md/lib';

import _PaperBorder from './_PaperBorder';

class Join extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'join-page'}>
        <_PaperBorder/>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Join</h3>
          <p className={'centered subheader'}>Become part of the largest on-campus
            undergraduate CS community in the world!</p>
          <br/>
        </div>
        <div className={'info-area'}>
          <Row>
            <Col xs={12}>
              <Card>
                <CardTextArea>
                  <p className={'centered title'}>Member Perks</p>
                  <Icon className={'centered'}>stars</Icon>
                  <Divider horizontal margin/>
                  <p className={'centered subheader'}>Industry</p>
                  <p>The CSUA hosts many networking and recruiting events throughout
                    the year with large companies such as Facebook, Amazon,
                    Microsoft, Salesforce, and more. Get priority access to their
                    job postings and speak directly with recruiters and engineers
                    at our events.</p>
                  <Divider horizontal margin/>
                  <p className={'centered subheader'}>Professional/Academic Development</p>
                  <p>We host a large number of workshops to help you develop skills
                    that recruiters are looking for and present those skills in
                    unique and professional resumes, websites, and personal branding.
                    We also tutor many different classes and are dedicated in helping
                    you succeed in your undergraduate career here at Berkeley.</p>
                  <Divider margin/>
                  <p className={'centered subheader'}>Networking</p>
                  <p>Meet fellow researchers, professionals, hackers, and CS enthusiasts.
                    Here, you can find a co-founder for your new startup, join a
                    hackathon team, or gather project partners for a class. Our diverse
                    student body will help you connect with the people you want to meet.</p>
                </CardTextArea>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardTextArea>
                  <p className={'centered title'}>Sign Up</p>
                  <Icon className={'centered'}>assignment</Icon>
                  <p>To join the CSUA, come by any one of our events or drop by our
                    office at 311 Soda Hall and ask for an officer. Once you have
                    an account, you can opt-in to our exclusive job postings, receive
                    email notifications for events, use our computers and server,
                    and reserve time on our high-performance computing cluster.</p>
                  <p>If you have questions about what CSUA membership can offer you,
                    please contact our Outreach chair at outreach@csua.berkeley.edu.
                    If you are having issues with your CSUA account, please contact
                    our VP of Technology at vp@csua.berkeley.edu.</p>
                </CardTextArea>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardTextArea>
                  <p className={'centered title'}>Become an Officer</p>
                  <Icon className={'centered'}>perm_identity</Icon>
                  <p>Interested in becoming more involved? Officers are active
                    members of the CSUA who want to contribute more to the
                    CS undergraduate community. Officers help out with critical
                    services, such as maintaining our server and computing cluster,
                    tutoring, running events, leading workshops, liaising with
                    industry, and more. They are also entrusted with privileges such
                    as CSUA office access, officer-only events, and priority
                    access to internal services.</p>
                  <p>Come find us in 311 Soda Hall to learn more, or email the
                    Politburo at pb@csua.berkeley.edu.</p>
                </CardTextArea>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Join;
export {Join};
