import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware,compose,combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import nameReducers from "./components/reducers/nameReducer";
import wishReducer from "./components/reducers/wishReducer";
const masterReducer=combineReducers({
  name:nameReducers,
  wish:wishReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//for dev tool
// const store =createStore(reducers,composeEnhancers(applyMiddleware(thunk))); // for dev tool
//const store =createStore(masterReducer,{name:'ramesh',wish:['eat','sleep']},composeEnhancers(applyMiddleware(thunk)));// for master reducer
//const store =createStore(reducers,applyMiddleware(thunk)); 
const store =createStore(masterReducer,composeEnhancers(applyMiddleware(thunk)));// for master reducer
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}> <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
