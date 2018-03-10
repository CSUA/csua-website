import * as React from 'react';

class Sp18 extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className={'wrapper'}>
        <div className={'title-area'}>
          <h3 className={'centered page-title'}>Spring 2018 Hackathon</h3>
          <p className={'centered header'}>It's happening</p>
          <p className={'centered subheader'}>With IEEE</p>
          <br/>
        </div>
        <div className={'info-area'}>



          <div id="flyer">
              <img src="{{ STATIC_URL }}images/CSUA.jpg"/>
          </div>
          <div id="information">
              <div class="linkbutton">
                  <a href="https://www.facebook.com/events/190920791296789/">RSVP on Facebook!</a>
              </div>
              <div class="headers">
                  Time:
                  <div class="text">
                      Hacking starts at 8:00 PM on Friday, April 1st.
                      You will have 18 hours to hack whatever you want.
                  </div>
              </div>
              <div class="headers">
                  Judges:
                  <div class="text">
                      <div class="judge">Three judges from Meraki</div>
                  </div>
              </div>
              <div class="headers">
                  Schedule:
                  <div class="text">
                      <div class="day">Friday, April 1st
                          <div class="schedule-item">8:00 PM - Hacking Begins</div>
                      </div>
                      <div class="day">Saturday, April 2nd
                          <div class="schedule-item">2:00 PM - Hacking ends</div>
                          <div class="schedule-item">2:30 PM - Presentations/Judging</div>
                          <div class="schedule-item">4:00 PM - Prizes/Closing</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="clear"></div>
          <div id="rules1">
              <div class="headers">
                  Registration:
                  <div class="text">
                      Registration for the Hackathon is day-of.
                  </div>
              </div>
              <div class="headers">
                  Submission Requirements:
                  <div class="text">
                      Set up a GitHub repository for your team.
                      You will use this repo to submit your project.
                      Though your repo may be private during development, it must be
                      public after submission and accessible to the judges.
                  </div>
                  <div class="text">
                      GitHub has excellent tutorials on how to use git and how to set up a
                      repository on GitHub.
                      This type of technology can be life-saving for group projects.
                      For those who know svn, you can use svn with GitHub via git+svn.
                  </div>
                  <div class="space"></div>
                  <div class="linkbutton">
                      <a href="http://help.github.com/">GitHub Help</a>
                  </div>
              </div>
              <div class="headers">
                  Judging Criteria:
                  <div class="text">
                      Completion will be a factor in judging, but incomplete submissions will
                      not be disqualified.
                      Bugs are okay! You are building a quick hack, not production-quality
                      software!
                  </div>
                  <div class="text">
                      If you make any special claims about the capabilities of your software,
                      please present proof of your claims in your presentation.
                      The presentation itself doesn't need to be super high quality, but
                      don't forget to substantiate claims.
                      The description is not graded, but it will be used to help the judges
                      refer to teams' projects while judging.
                  </div>
              </div>
              <div class="headers">
                  Prize Pool:
                  <div class="prize-item">Four Large HD Monitors</div>
                  <div class="prize-item">Two Headphones</div>
                  <div class="prize-item">Two Jamboxes</div>
                  <div class="prize-item">Four Raspberry Pis</div>
              </div>
          </div>
          <div id="rules2">
              <div class="headers">
                  Prize Rules:
                  <div class="text">
                      You can code alone or in pairs or in a group of four, but we will only
                      but giving one prize to a lone star, two prizes to a pair, and up to 4
                      prizes for a team of 4+ people. You'll have to distribute the prizes amongst
                      your group.
                  </div>
                  <div class="text">
                      To be eligible for prizes, you team must consist entirely of CAL
                      undergraduates, with teams of 4 or lower receiving preference.
                  </div>
                  <div class="text">
                      There are three large prize groups. 1st place winners get first pick at
                      the prize groups, then 2nd place group gets second pick, and 3rd place
                      gets the final pick. This means that the 1st place winner may choose
                      the 2nd place prize if they so desire.
                  </div>
              </div>
              <div class="headers">
                  Pre-Hackathon Rules:
                  <div class="text">
                      All code written must be written in the 18-hour period, or explicitly
                      flagged as written beforehand. Making significant use of pre-written
                      non-framework/non-library code is strongly discouraged.
                  </div>
                  <div class="text">
                      Libraries are fine, and anything reasonably called a "framework" should
                      also be fine.
                      Improvements to a library may not be considered in the main body of
                      a work if they are merely incidental to the project, rather than a major
                      component.
                      Non-coding design pre-work and product development is acceptable.
                      Fleshing out and preparation work, in general, should be no big deal.
                  </div>
                  <div class="text">
                      If a project does not pass a "smell test," judges may, at their
                      discretion, take this into consideration when evaluating the project.
                      It is recommended that a README file be included which summarizes the work
                      done and explains the necessary disclaimers for pre-work, libraries, etc.
                      However, this is neither required nor scored.
                  </div>
              </div>
          </div>
          <div class="clear"></div>
          <div id="submission">
              <div class="headers">
                  Submission:
                  <div id="submitbox">
                      <div id="submittext" class="text">
                          Congrats on finishing your hack! You can now submit your GitHub repo
                          here! The judges look forward to reviewing your work!
                      </div>
                      <div id="submitbutton" class="linkbutton">
                      <a href="http://goo.gl/forms/EZoXeXxMAk">Submit Project</a>
                      </div>
                  </div>
              </div>
          </div>



        </div>
      </div>
    );
  }
}

export default Sp18;
export {Sp18};
