import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import io from 'socket.io-client';

import {Content} from 'yui-md/lib/Content';

import {reducer} from './reducer';

import './style.scss'
import {Header} from './Header';
import {Pages} from './Pages';
import {Footer} from './Footer';

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
       <BrowserRouter>
         <Route path={'/'}>
          <div className={'app-root'}>
            <Header/>
            <Content footerComponent={<Footer/>}>
              <Pages/>
            </Content>
          </div>
        </Route>
      </BrowserRouter>
    </Provider>
        );
  }
}

setTimeout(()=>
ReactDOM.render(
  <App/>
  , document.getElementById('app')
)
, 0);

export default App;
export {App};
