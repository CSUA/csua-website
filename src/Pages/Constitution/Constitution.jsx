import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import {Card, CardTextArea} from 'yui-md/lib/Card';
import {Divider} from 'yui-md/lib/Divider';

import {_PaperBorder} from './_PaperBorder';

class Constitution extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'constitution-page'}>
        <_PaperBorder/>
        <h3 className={'centered page-title'}>Constitution</h3>
        <br/>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article I.</p>
            <p className={'centered subheader'}>Name</p>
            <Divider horizontal margin/>
            <p className={'centered'}>This organization shall be hereinafter
              referred to as the Computer Science Undergraduate Association,
              also known as the CSUA.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article II.</p>
            <p className={'centered subheader'}>Purpose</p>
            <Divider horizontal margin/>
            <p className={'centered'}>The purposes of this organization
              are: to represent the undergraduate computer science student body
              in dealings with the University of California at Berkeley, its
              representatives, and any other appropriate organization; to provide
              a forum for the personal interaction of persons involved in the computer
              sciences; to promote knowledge of and interest in the computer
              sciences; and to raise funds to accomplish these goals.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article III.</p>
            <p className={'centered subheader'}>Membership</p>
            <Divider horizontal margin/>
            <p className={'centered subheader'}>Section A. Active Membership</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Any currently registered
              undergraduate student of the University of California at Berkeley
              is eligible for active membership in the CSUA.</p>
            <p className={'centered subheader'}>Section B. Associate Membership</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Any student, staff, faculty
              member of the University of California at Berkeley or former active
              member may hold associate membership in the CSUA.</p>
            <p className={'centered subheader'}>Section C. Criteria</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Only currently registered students,
              faculty and staff may be active members in a registered student
              organization. Only active members may vote or hold office.
              <br/>
              <br/>
              We will not haze according to California State Law. We will not
              restrict membership based upon race, color, national origin, religion,
              sex, gender identity, pregnancy (including pregnancy, childbirth,
              and medical conditions related to pregnancy or childbirth), physical
              or mental disability, medical condition (cancer related or genetic
              characteristics), ancestry, marital status, age, sexual orientation,
              citizenship, or service in the uniformed services (including membership,
              application for membership, performance of service, application for
              service, or obligation for service in the uniformed services).</p>
            <p className={'centered subheader'}>Section D. Effective Time of Membership</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>An applicant's membership is not
              effective until after the meeting at which the applicant joins.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article IV.</p>
            <p className={'centered subheader'}>Officers</p>
            <Divider horizontal margin/>
            <p className={'centered subheader'}>Section A. Types</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The organization shall have seven elected
              offices, named President, Vice President of Technology, Vice
              President of Industry Relations, Secretary/Treasurer, External E
              vents Coordinator, Internal Events Coordinator, and Outreach Chair.</p>
            <p className={'centered subheader'}>Section B. Qualifications</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Only active members of the Computer Science
              Undergraduate Association as defined in Article III, Section A shall b
              e allowed to run for and hold any of the aforementioned offices in
              the Computer Science Undergraduate Association.</p>
            <p className={'centered subheader'}>Section C. Term of Office</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Subsection 1.<br/>
              After their election, the entering officers
              shall assume office after the last day of the semester, at which
              point the existing officers shall vacate their respective offices.</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Subsection 2.<br/>
              If any officer is unable to perform the
              duties of his or her respective office during the semester break
              immediately following elections, then that officer shall appoint
              an interim replacement.</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Subsection 3.<br/>
              Officers who resign from office, no longer
              meet the qualifications set above, or are deemed unfit to serve in
              their respective offices shall vacate office immediately upon notice
              of resignation, loss of qualification, or removal from office.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article V.</p>
            <p className={'centered subheader'}>Duties</p>
            <Divider horizontal margin/>
            <p className={'centered subheader'}>Section A. President</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The President shall:</p>
            <div>
              <ul className={'justified duty-list'}>
                <li>chair, or appoint the chair for, the meetings of the CSUA</li>
                <li>be responsible for the execution of mandates reflecting
                  organization policy as determined by the organization’s active
                  members and its officers in General and Politburo Executive Meetings</li>
                <li>be primarily responsible for representing the CSUA in its duties
                  as the undergraduate computer science students’ representative
                  body</li>
                <li>maintain contact and communication with the University, its
                  faculty members responsible for teaching computer science, and
                  any other relevant organization</li>
                <li>appoint chairs for the various committees, subject to
                  confirmation by the Politburo</li>
                <li>organize and orchestrate the passing on of knowledge from one
                  generation of Politburo to the next</li>
                <li>establish contact with other student organizations for the
                  purpose of coordinating interclub events</li>
                <li>have any other duties and/or responsibilities set forth in
                  this Constitution.</li>
              </ul>
            </div>
            <p className={'centered subheader'}>Section B. Vice President of Industry Relations</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The VP of Industrial Relations shall:</p>
            <div>
              <ul className={'justified duty-list'}>
                <li>liaise with companies and attain sponsors for CSUA’s external events</li>
                <li>generate industrial interest in the CSUA</li>
                <li>liaise with CSUA alumni</li>
                <li>coordinate speakers from alumni or industry; manage
                  infosessions for CSUA</li>
                <li>manage the jobs board/list-serv; manage and administer the
                  resume booklet</li>
                <li>assist the President in execution of duties</li>
                <li>handle requests by Internal Events Coordinator for a speaker
                  for an internal event</li>
                <li>have any other duties and/or responsibilities set forth in
                  this Constitution.</li>
              </ul>
            </div>
            <p className={'centered subheader'}>Section B. Vice President of Technology</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The VP of Industrial Relations shall:</p>
            <div>
              <ul className={'justified duty-list'}>
                <li>liaise with companies and attain sponsors for CSUA’s external events</li>
                <li>generate industrial interest in the CSUA</li>
                <li>liaise with CSUA alumni</li>
                <li>coordinate speakers from alumni or industry; manage
                  infosessions for CSUA</li>
                <li>manage the jobs board/list-serv; manage and administer the
                  resume booklet</li>
                <li>assist the President in execution of duties</li>
                <li>handle requests by Internal Events Coordinator for a speaker
                  for an internal event</li>
                <li>have any other duties and/or responsibilities set forth in
                  this Constitution.</li>
              </ul>
            </div>
          </CardTextArea>
        </Card>
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

Constitution = withRouter(connect(mapStateToProps, mapDispatchToProps)(Guac(Constitution)));

export {Constitution};
