import React from 'react';
import { createRoot } from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const rootElement = document.getElementById('root')

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
      <Router >
          <App />
      </Router>
  </Provider>
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
