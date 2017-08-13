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
              <ul className={'duty-list'}>
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
                  this Constitution</li>
              </ul>
            </div>
            <p className={'centered subheader'}>Section B. Vice President of Industry Relations</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The VP of Industrial Relations shall:</p>
            <div>
              <ul className={'duty-list'}>
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
                  this Constitution</li>
              </ul>
            </div>
            <p className={'centered subheader'}>Section C. Vice President of Technology</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The VP of Industrial Relations shall:</p>
            <div>
              <ul className={'duty-list'}>
                <li>administer and maintain the technical resources of the CSUA,
                  including but not limited to our list-servs</li>
                <li>be the chief administrator of computer equipment maintained
                  by the CSUA</li>
                <li>be head of our root staff</li>
                <li>be our liaison with all campus IT and technical services</li>
                <li>solve or delegate the solving of technical issues should any arise</li>
                <li>have any other duties and/or responsibilities set forth in
                  this Constitution</li>
              </ul>
            </div>
            <p className={'centered subheader'}>Section D. Secretary/Treasurer</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The Secretary/Treasurer shall:</p>
            <div>
              <ul className={'duty-list'}>
                <li>take minutes at Politburo and General meetings</li>
                <li>manage our library of computer science books</li>
                <li>maintain all necessary financial and non-financial records
                  of the organization</li>
                <li>administer the CSUA’s physical resources</li>
                <li>maintain or delegate the maintenance of the CSUA’s
                  facility resources</li>
                <li>maintain the CSUA’s monetary resources</li>
                <li>maintain a publicly available record of all financial transactions,
                  liabilities, and credits relating to the CSUA</li>
                <li>report on the financial status of the CSUA to its members
                  and officers</li>
                <li>obtain financial agency power with the ASUC as soon as
                  possible after election</li>
                <li>obtain primary signatory power with the ASUC as soon as
                  possible after election have any other duties and/or responsibilities
                  set forth in this Constitution</li>
              </ul>
            </div>
            <p className={'centered subheader'}>Section E. External Events Coordinator</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The External Events Coordinator shall:</p>
            <div>
              <ul className={'duty-list'}>
                <li>plan and prepare all logistics for each external event</li>
                <li>be or appoint the day-of event coordinator to execute the
                  event and handle any issues that might arise</li>
                <li>have any other duties and/or responsibilities set forth in
                  this Constitution</li>
              </ul>
            </div>
            <small className={'centered'}>Note: An external event is defined as
              an event sponsored by a company.</small>
            <p className={'centered subheader'}>Section F. Internal Events Coordinator</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The Internal Events Coordinator shall:</p>
            <div>
              <ul className={'duty-list'}>
                <li>create fun internal events</li>
                <li>plan and prepare all logistics for each internal event</li>
                <li>be or appoint the day-of event coordinator to execute the
                  event and handle any issues that might arise</li>
                <li>submit a request to VP Indrel to obtain a speaker for an
                  internal event should a speaker be required</li>
                <li>have any other duties and/or responsibilities set forth in
                  this Constitution </li>
              </ul>
            </div>
            <small className={'centered'}>An internal event is defined as an event
              that does not have a company sponsor. This includes interclub events,
              intraclub events, alumni events, and recruitment events.</small>
            <p className={'centered subheader'}>Section G. Outreach Chair</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The Outreach Chair shall:</p>
            <div>
              <ul className={'duty-list'}>
                <li>maintain or delegate the maintenance of the CSUA’s website</li>
                <li>maintain the content of the CSUA’s website</li>
                <li>publicize our services to the general student body</li>
                <li>be responsible for publicizing all internal and external events
                  to the club membership and the general student body, respectively</li>
                <li>promote interaction between current students and alumni</li>
                <li>recruit new members</li>
                <li>design and distribute (or delegate) all publication materials
                  for the CSUA</li>
                <li>have any other duties and/or responsibilities set forth in
                  this Constitution.</li>
              </ul>
            </div>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article V.</p>
            <p className={'centered subheader'}>Committees</p>
            <Divider horizontal margin/>
            <p className={'centered subheader'}>Section A. The Politburo</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The Politburo shall consist of all elected
              officers of the CSUA. It shall hold at least three open meetings a
              semester while school is in regular session. The Politburo shall
              determine temporary policies of the CSUA. Politburo decisions may
              be overturned by a two-thirds vote of the general membership at a
              general meeting.</p>
            <p className={'centered subheader'}>Section B. Other Committees</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Other committees may be created or dissolved
              at the direction of either the Politburo, or by a majority vote of
              the general membership at a General Meeting. Directorships or other
              non-politburo positions shall be appointed by the president and
              confirmed by the majority of the politburo.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article VI.</p>
            <p className={'centered subheader'}>Election of Officers</p>
            <Divider horizontal margin/>
            <p className={'centered subheader'}>Section A. Time and Place of Elections</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Officers shall be selected each semester by
              a majority vote of the attending General Membership at a General
              Meeting held no less than two weeks before the last day of instruction,
              announced no less than one week in advance, and held at a time and
              place that is considered generally accessible as well in compliance
              with ASUC regulations concerning accessibility of ASUC sponsored
              activities.</p>
            <p className={'centered subheader'}>Section B. Procedure</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>The chair shall appoint an election officer,
              who shall not vote or run for office. The election officer must be a member.
              Members shall be nominated until no more are willing and eligible.
              No person shall be nominated who is not willing to serve upon their
              election, and no person not present can be nominated for an office
              without his or her written consent being presented at the meeting.
              If only one candidate is in nomination voting may be done by
              acclamation. Otherwise voting shall be done by secret ballot of
              active members. A ballot that is blank or otherwise does not uniquely
              identify a nominated candidate shall not be counted.<br/>
              If there is at any time a majority for a candidate, that candidate
              wins. If there is no majority and there are two candidates the election
              officer shall cast the deciding vote. If there is no majority and
              there are three candidates, the one with the fewest votes shall be
              eliminated. If there is a tie among those with the fewest votes the
              election officer shall select one to be eliminated.<br/>
              If there are more than three candidates, three shall be selected to
              proceed to a runoff round as follows. Select as many candidates as
              possible for the runoff, starting from those with the highest vote
              totals, until it is impossible to proceed without selecting more
              than three or discriminating between candidates who received the same
              number of votes. If it is not possible to select any candidates in
              this way because there is a tie for first, the election officer shall
              cast a vote for one of the tied first-place candidates. If there are
              then fewer than three candidates selected for the runoff round, a
              new vote shall be held among those candidates not already chosen to
              select the remaining candidates.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article VII.</p>
            <p className={'centered subheader'}>Removal and Replacement of Officers</p>
            <Divider horizontal margin/>
            <p className={'centered subheader'}>Section A. Removal</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>An officer may be removed from office in
              one of the following ways:</p>
            <div>
              <ul className={'duty-list'}>
                <li>In the event of extended unexplained absence of an officer,
                  the office may be declared vacant by a majority of the remaining
                  officers.</li>
                <li>Any officer no longer qualified to hold office shall be removed.</li>
                <li>A unanimous vote of the other officers in office may remove
                  an officer from office.</li>
                <li>In the event of a vacancy of an office the President will be
                  responsible for ensuring that the obligations of that office
                  are fulfilled until a replacement has been made.</li>
              </ul>
            </div>
            <p className={'centered subheader'}>Section B. Replacement</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>In case of removal or resignation from office
              of one of the elected officers except the President, the President
              shall appoint a successor. All such appointments to office must be
              confirmed by a majority vote of the Politburo at the next announced
              Politburo meeting. As stated in Article IV, in the event the office
              of President is vacated for whatever reason, the Vice President of
              Technology shall either assume the office of President without
              need for confirmation and appoint a successor to be approved by a
              majority vote of a quorum of the Politburo, or, with the approval
              of a majority vote of the Politburo at the next announced Politburo
              meeting, appoint an eligible member to assume the office of
              President.<br/>
              If both the offices of President and Vice President of Technology
              are vacated in such a way to obstruct the aforementioned order of
              succession, then the remaining officers, in the order of Vice
              President of Industry Relations, Secretary/Treasurer, External Events
              Coordinator, Internal Events Coordinator, and Outreach Chair, may
              either assume the office of President or, with the approval of the
              general membership, appoint a new President who will then fill any
              remaining open offices.<br/>
              If all offices are made vacant, then the Faculty Advisor shall call
              and chair a general meeting to elect new officers.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article VIII.</p>
            <p className={'centered subheader'}>Meetings</p>
            <Divider horizontal margin/>
            <p className={'centered subheader'}>Section A. Procedure</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>All meetings will run under Parliamentary
              procedure or some subset of the same. All questions, unless otherwise
              noted by this Constitution, shall require a majority vote. Only
              active members of the organization are eligible to vote. All meetings
              shall be held at reasonable places and times.<br/>
              Members may vote and run by proxy.</p>
            <p className={'centered subheader'}>Section B. General Meetings</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>General Meetings shall be held three times
              a semester while school is in regular session, and shall be publicly
              announced no less than a week in advance.</p>
            <p className={'centered subheader'}>Section C. Politburo Meetings</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Politburo Meetings may be called by the President
              or by one-third of the Politburo. At least three meetings a semester
              while school is in regular session must be held open to the membership
              of the CSUA. Other meetings may be closed at the request of one-third
              of those members attending or in the event of disciplinary actions.
              In such a case, a listing of general topics discussed will be made
              available within one week after the meeting.</p>
            <p className={'centered subheader'}>Section D. Committee Meetings</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Committee meetings will be run under the same
              rules as the General Meetings. Meetings will be open to attendance
              by all members.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article IX.</p>
            <p className={'centered subheader'}>Bylaws and Policies</p>
            <Divider horizontal margin/>
            <p className={'centered subheader'}>Section A. Bylaws</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Further guidelines pertaining to the operation
              of the CSUA not specifically set forth in the Constitution shall
              be contained in a set of publicly-available bylaws. Bylaws may be
              proposed by any active member of the CSUA, and must be approved by
              a majority vote of the Politburo</p>
            <p className={'centered subheader'}>Section B. Policies</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Regulations pertaining to conduct of CSUA
              members in CSUA activities and in use of CSUA resources shall be
              contained in a set of publicly-available policies. Politburo members
              may formulate and implement interim policies in the execution of
              their duties, subject to later approval of a majority of the Politburo
              at the next Politburo meeting.</p>
            <p className={'centered subheader'}>Section C. Amendments to Bylaws and Policies</p>
            <Divider horizontal margin inset/>
            <p className={'centered'}>Amendments to bylaws and policies may be
              proposed by any active member, and must be approved by a majority
              vote of the Politburo. Such amendments may be overturned by a two-thirds
              vote of the general membership at a general meeting.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article X.</p>
            <p className={'centered subheader'}>Amendment</p>
            <Divider horizontal margin/>
            <p className={'centered'}>Any amendment to this constitution must be
              approved by a two-thirds majority of a general meeting convened
              with at least one week prior prominent public notice of the intent
              to amend the constitution. All amendments, unless otherwise noted
              therein, become effective immediately upon adoption.<br/>
              As a special exception, the officers of the CSUA may, for the sole
              purpose of bringing the constitution into compliance with ASUC and
              OSL requirements, amend the constitution by changing emphasized
              text. All such changes must be publicly announced within one week.<br/>
              All amendments, additions or deletions to this document must be filed
              with the LEAD Center in 432 Eshleman Hall.</p>
          </CardTextArea>
        </Card>
        <Card>
          <CardTextArea>
            <p className={'centered header'}>Article XI.</p>
            <p className={'centered subheader'}>Dissolution</p>
            <Divider horizontal margin/>
            <p className={'centered'}>Dissolution of the Computer Science Undergraduate
              Association may be approved by a two-thirds majority of general
              meeting convened during instruction with at least two weeks notice
              of the intent to dissolve the CSUA. In the event of dissolution,
              to the extent permitted by campus and ASUC regulations, all remaining
              assets shall be donated to a campus computing organization which
              allows free access to all University of California at Berkeley
              students.<br/>
              If the organization is ASUC or GA Sponsored, all unspent ASUC funds
              shall return to the ASUC; all Graduate Assembly funds shall return
              to the Graduate Assembly. If the organization is defunct for five
              (5) or more years, any privately obtained funds (including any funds
              left in miscellaneous accounts) shall be donated to the ASUC. In
              the event that the designated nonprofit organization no longer
              exists or has ceased to be a nonprofit, then the unspent funds
              shall be donated to the ASUC.</p>
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
