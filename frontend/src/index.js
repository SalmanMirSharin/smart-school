import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Router, Route } from "react-router";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import './index.css';
import App from './App';
import { Provider } from 'react-redux'

import { store } from './rtkq/app/store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> 
    </Provider>
    
  </React.StrictMode>
);

export default root;