import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {Guac} from 'guac-hoc/lib/Guac';
import {Route, Switch} from 'react-router-dom';

import {About} from './About';
import {Politburo} from './Politburo';
import {Officers} from './Officers';
import {Constitution} from './Constitution';
import {Events} from './Events';
import {Industry} from './Industry';
import {Sponsors} from './Sponsors';
import {Join} from './Join';
import {Tutoring} from './Tutoring';
import {Hackathon} from './Hackathon';

import paths from 'static/structure/paths';

class Pages extends React.Component {
  constructor() {
    super();
    this.bindAllMethods();
  }

  render() {
    return (
      <div className={'page'}>
        <Route path='*' render={() => {window.scrollTo(0, 0); return null;}}/>
        <Switch>
          <Route path={paths.politburo}
            render={()=><Politburo pb={this.props.value.pb}/>}/>
          <Route path={paths.officers}
            render={()=><Officers officers={this.props.value.officers}/>}/>
          <Route path={paths.constitution} component={Constitution}/>
          <Route path={paths.tutoring} component={Tutoring}/>
          <Route path={paths.events}
            render={()=><Events events={this.props.value.events}/>}/>
          <Route path={paths.sponsors}
            render={()=><Sponsors sponsors={this.props.value.sponsors}/>}/>
          <Route path={paths.industry} component={Industry}/>
          <Route path={paths.hackathon} component={Hackathon}/>
          <Route path={paths.join} component={Join}/>
          <Route path={paths.home}
            render={()=><About events={this.props.value.events}/>}/>
        </Switch>
      </div>
    );
  }
}

Pages = Guac(Pages);

export default Pages;
export {Pages};
