import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Aside from "./components/aside/Aside"
import Header from "./components/header/Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aside />
    <Header />
  </React.StrictMode>
);
