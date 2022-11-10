import React from 'react';
import ReactDOM from 'react-dom/client';
import RainbowFrame from './App';
import reportWebVitals from './reportWebVitals';

const colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
const greeting = "Hello!";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RainbowFrame colors={colors} content={greeting} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
