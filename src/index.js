import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Routing from './Component/Routing/Routing';


const root = ReactDOM.createRoot(document.getElementById('demo'));



root.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>
);

reportWebVitals();