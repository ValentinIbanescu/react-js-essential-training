import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Contact,
  Woops404,
  Services,
  History,
  Location
} from './pages.js';

function AppThree() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
           <Route path="services" element={<Services />}></Route>
           <Route path="history" element={<History />}></Route>
           <Route path="location" element={<Location />}></Route>
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Woops404 />}/>
      </Routes>
    </div>
  )
}

export default AppThree;
