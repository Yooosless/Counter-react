import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let count=0;
function counts(){
  count++;
  const element=<p>{count}</p>;

ReactDOM.render(
  
 element, document.getElementById('root')
);}
setInterval(counts, 1000);
