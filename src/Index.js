import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from "react-router-dom";
import 'babel-polyfill';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById("app")
 );

module.hot.accept();