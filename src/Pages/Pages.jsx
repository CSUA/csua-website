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
          <Route path='/about/politburo' component={Politburo}/>
          <Route path='/about/officers' component={Officers}/>
          <Route path='/about/constitution' component={Constitution}/>
          <Route component={About}/>
          </Switch>
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

Pages = withRouter(connect(mapStateToProps, mapDispatchToProps)(Guac(Pages)));

export default Pages;
export {Pages};
