import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import './style.scss';
setTimeout(()=>
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  , document.getElementById('app')
)
, 0);
