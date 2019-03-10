import { createStore, applyMiddleware, compose } from 'redux'; // state management
import thunk from 'redux-thunk'; // extended actions

import rootReducer from './reducers/rootReducer'

import api from './requests';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // chrome ext

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);
