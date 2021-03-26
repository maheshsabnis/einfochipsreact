// importing React object  
import React from 'react';
import ReactDOM from 'react-dom';
 

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// importing redux
// createStore, used to create a store
// applyMiddleware, used to configure middleware for store
// compose, used to enhancer(?) the store by loading middleware and devtools at a time 
// enhancer, is the object that will decorate the store with multiple parameters 
import { createStore, applyMiddleware, compose } from "redux";

// Provider, the platform to integrate react with redux
import { Provider } from "react-redux";
import reducer from './sagaapp/reducers/reducers';
// import SAGA middleware for redux
import createSagaMiddleware from 'redux-saga';  

import MainSagaComponent from './sagaapp/mainsagacomponent';

// the React.js bundling and build utility provided by create-react-app
import reportWebVitals from './reportWebVitals';
import rootSaga from './sagaapp/sagas';

// create a Saga Middleware instance
// this will be used to connect the redux store with the saga  
const appSagaMiddleware = createSagaMiddleware();

// creae an enhancer object to contain the Dev Tools
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



// create a store
// first parameter is 'reducers'
// second parmeter is 'enhancer', this is the REDUX_TOOLS for simulating redux store in browser
// configure the store by enhancing it by using the middleware 
let store = createStore(reducer,enhancer(applyMiddleware(appSagaMiddleware)));
// run the saga middlewaer at application level
appSagaMiddleware.run(rootSaga);

// Provider Has 'store', 
// any component(s) executes under 'Provider' will have store subscription and hence any acrion
// displatched by any component will monitored by reducer because reduecer is handling the store
// using 'createStore' 
// 'store' has reducers
// 'reduecrs' are monitoring actoins to update store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
         <MainSagaComponent></MainSagaComponent>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
