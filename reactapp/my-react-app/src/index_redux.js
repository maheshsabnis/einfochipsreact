// importing React object  
import React from 'react';
import ReactDOM from 'react-dom';
 

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// importing redux
// createStore, used to create a store
import { createStore } from "redux";

// Provider, the platform to integrate react with redux
import { Provider } from "react-redux";

import reducers from './reduxapp/reducers/reducers';


import MainReduxComponent from './reduxapp/mainreduxcomponent';

// the React.js bundling and build utility provided by create-react-app
import reportWebVitals from './reportWebVitals';

// create a store
// first parameter is 'reducers'
// second parmeter is 'enhancer', this is the REDUX_TOOLS for simulating redux store in browser

let store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
// Provider Has 'store', 
// any component(s) executes under 'Provider' will have store subscription and hence any acrion
// displatched by any component will monitored by reducer because reduecer is handling the store
// using 'createStore' 
// 'store' has reducers
// 'reduecrs' are monitoring actoins to update store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <MainReduxComponent/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
