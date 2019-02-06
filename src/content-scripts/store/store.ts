import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { ITabState } from './reducer';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

// TS override
declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, promise];

if (PPSettings.DEV) {
  const logger = createLogger();
  middlewares.push(logger);
}
const store: Store<ITabState> = createStore(
  rootReducer,
  {
  },
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;