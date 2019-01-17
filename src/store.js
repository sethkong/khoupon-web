// src/store.js 
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middlware = composeWithDevTools(applyMiddleware(promise(), thunk));

export default createStore(rootReducer, middlware); 

