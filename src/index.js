import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import './index.css';
import App from './containers/App';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { requestRobots, searchRobots } from './reducers';
import { createLogger } from 'redux-logger';
import 'tachyons';

import './index.css';

const logger = createLogger()

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();