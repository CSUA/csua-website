import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';

import {Card, CardTextArea} from 'yui-md/lib/Card';
import {Icon} from 'yui-md/lib/Icon';
import {Divider} from 'yui-md/lib/Divider';

import {events} from 'static/data/events';


/*
  Props:
  - verbose <boolean>: if verbose, shows description as well.
  - small <boolean>: if the events should be small.
  - name <string>: Calendar name.
  - events <list<Event>>: list of events
*/
class EventCalendar extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  calcEventComponent(event, verbose, small, key) {
    return (
      <div key={key}>
        <p className={small ? 'title-small' : 'title'}>{event.date} : {event.name}</p>
        <p className={small ? 'subheader-small' : 'subheader'}>{event.time}&emsp;|&emsp;{event.location}</p>
        {verbose ? (small ? <small>{event.description}</small> : <p>{event.description}</p>) : null}
      </div>
    );
  }

/*
  Find event object structure in /static/data/events
*/
  calcEventComponents(props) {
    let events = props.events;
    let eventComponents = [];
    for (var i in events) {
      let event = events[i];
      eventComponents.push(<Divider horizontal margin key={i * 2}/>);
      eventComponents.push(this.calcEventComponent(event, props.verbose, props.small, i * 2 + 1));
    }
    return eventComponents;
  }

  render() {
    return (
      <Card>
        <CardTextArea>
          <p className={'centered ' + (this.props.small ? 'title' : 'header')}>{this.props.name}</p>
          <Icon className={'centered'}>event_note</Icon>
          {this.calcEventComponents(this.props)}
        </CardTextArea>
      </Card>
    );
  }
}

EventCalendar.defaultProps = {
  events: events,
  verbose: false,
  small: false,
  name: 'Calendar'
};

EventCalendar = Guac(EventCalendar);

export default EventCalendar;
export {EventCalendar};
