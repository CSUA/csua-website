import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Route} from 'react-router-dom';
import io from 'socket.io-client';

import {Content} from 'yui-md/lib/Content';

import {reducer} from './reducer';

import {Header} from './Header';
import {Pages} from './Pages';
import {Footer} from './Footer';
import {Flyer} from './Flyer';

//Application state store.
let store = createStore(reducer);

class App extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
    <Provider store={store}>
      <Route path={'/'}>
        <div className={'app-root'}>
          <Header/>
          <Content footerComponent={<Footer/>}>
            <Pages/>
          </Content>
        </div>
      </Route>
    </Provider>
  );
  }
}

export default App;
export {App};
