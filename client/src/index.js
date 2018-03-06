import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import * as reducers from './reducers';

//чтобы использовать в консоле браузера для тестирования. development only
import axios from 'axios';
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

console.log('Environment is', process.env.NODE_ENV);
