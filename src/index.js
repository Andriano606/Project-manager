import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div id="modal-root"></div> 
    <div id="root">
      <App />
    </div> 
  </>
);
