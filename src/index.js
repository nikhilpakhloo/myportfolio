import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './routeHorizontal/home/Home';
import About from './routeHorizontal/About/About';
import Contact from './routeHorizontal/Contact/Contact';
import Header from './routeHorizontal/Header/Header';
import Work from './routeHorizontal/work/Work';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);
