import React from 'react';
import './App.css';
import Header from './Header.js';

function Main() {
  return (
    <section>
      <p>Lorem</p>
      </section>
  );
}

function Footer() {
  return (
  <footer>
    <p>Made with React©</p>
  </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
