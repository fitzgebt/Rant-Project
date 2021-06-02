import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'

let store = createStore(rootReducer, compose(applyMiddleware(thunk),composeWithDevTools()))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
