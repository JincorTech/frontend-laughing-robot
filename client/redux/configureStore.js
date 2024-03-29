import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { stateTransformer } from 'redux-seamless-immutable';

import rootReducer from './rootReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({
  stateTransformer,
  collapsed: true
});

const configureStoreProduction = (initialState, history = null) => {
  const middlewares = [sagaMiddleware];

  if (history) middlewares.push(routerMiddleware(history));

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

const configureStoreDev = (initialState, history = null) => {
  const middlewares = [sagaMiddleware, loggerMiddleware];

  if (history) middlewares.push(routerMiddleware(history));

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

const configureStore = process.env.NODE_ENV === 'development'
  ? configureStoreDev
  : configureStoreProduction;

export default configureStore;
