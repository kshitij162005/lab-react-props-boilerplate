import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from "./Data"
import AppClass from './AppClass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App props={data}/>
    <AppClass props={data}/>

  </React.StrictMode>
);
