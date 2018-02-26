import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import {Card, CardTextArea} from 'yui-md/lib/Card';
import {Divider} from 'yui-md/lib/Divider';

import {_PaperBorder} from './_PaperBorder';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import request from 'superagent';

BigCalendar.momentLocalizer(moment);

const CALENDAR_ID = "berkeley.edu_ovluroab46af2sbup6ot2h6m58@group.calendar.google.com";
const API_KEY = "AIzaSyCPRfO9EWrZeIYtb2Ql2Ku31JHxBC7zORU";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
let tutoring = /[\w ][ \t]*-[ \t]*[\w]/

function getEvents(callback){
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        let events = [];
        JSON.parse(resp.text).items.map((event) => {
          if(event.start !== undefined 
              && event.end !== undefined
              && event.summary.search(tutoring) !== -1
            ){
            events.push({
              start: new Date(event.start.dateTime),
              end: new Date(event.end.dateTime),
              title: event.summary || "",
            })
        }
        })
        callback(events)
      }
    })
}

//require('style-loader!css!react-big-calendar/lib/css/react-big-calendar.css')
class Tutoring extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    } 
    this.bindAllMethods();
  }

  componentDidMount () {
    getEvents((events) => {
      if(events !== undefined){
        this.setState({events});
      }
    })
  }

  render() {
    return (
      <div className={'constitution-page'}>
        <_PaperBorder/>
        <h3 className={'centered page-title'}>Tutoring Calendar</h3>
        <br/>
          <Divider horizontal margin/>
          <center>
            <BigCalendar 
              style={
                {height: '60em',
                width: '100%'}
              }
              date={new Date()}
              events={this.state.events}/>
            </center>
    </div>
    );
  }
}

Tutoring = Guac(Tutoring);

export default Tutoring;
export {Tutoring};
