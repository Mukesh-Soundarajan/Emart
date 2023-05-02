import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store ={store}>
    <App />
  </Provider>
  </BrowserRouter>);



