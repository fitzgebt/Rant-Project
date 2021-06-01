import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { store } from './app/store';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers/index'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

let store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
