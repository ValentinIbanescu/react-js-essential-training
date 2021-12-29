import React from 'react';
import logo from './logo.svg';
import './App.css';

const coreConcept = [
  "Logical operators",
  "Loops",
  "Functions",
]

coreConcept.map((concept) => (console.log(concept)))

function Header (props) {
  console.log(props);
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {props.name}
        </a>
        <ul style={{listStyle: "none"}}>{coreConcept.map((concept) => <li>{concept}</li>)}</ul>
      </header>
  );
}

export default Header;
