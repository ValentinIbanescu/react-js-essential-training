import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>[Company website]</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About us]</h1>
    </div>
  );
}
export function Events() {
  return (
    <div>
      <h1>[Our events]</h1>
    </div>
  );
}
export function Contact() {
  return (
    <div>
      <h1>[Contact us]</h1>
    </div>
  );
}

export function Woops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>This page does not exist at {location.pathname}!</h1>
    </div>
  );
}
