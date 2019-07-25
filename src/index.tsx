import React from 'react';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSageMiddleware from 'redux-saga';

import { rootReducer } from 'reducers'
import { rootSaga } from 'core';

const sagaMiddleware = createSageMiddleware();
const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware
    )
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

