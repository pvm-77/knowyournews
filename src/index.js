import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import axios from 'axios';
// const promise=axios.get('https://gnews.io/api/v4/top-headlines?category=general&max=3&lang=hi&apikey=ec8a1df338cca376771ebd8085a4494f');
// console.log('promuse is',promise);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


