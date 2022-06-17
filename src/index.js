import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Nav from './Nav';
import About from './About';
import Hi from './Hi';
import List from './List';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hi />} />
      <Route path="/App" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
