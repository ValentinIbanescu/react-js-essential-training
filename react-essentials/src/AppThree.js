import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Contact,
  Woops404
} from './pages.js';

function AppThree() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Woops404 />}/>
      </Routes>
    </div>
  )
}

export default AppThree;
