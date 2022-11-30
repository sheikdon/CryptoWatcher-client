import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const backColor = {
	backgroundColor: 'rgb(32, 30, 31)',

}
ReactDOM.render(
  <BrowserRouter>
  <div >
    <App /></div>
  </BrowserRouter>,
  document.getElementById('root')
);
