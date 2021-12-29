import React from 'react';
import './App.css';
import Header from './Header.js';

function Main(props) {
  return (
    <section>
      <p>{props.description}</p>
      </section>
  );
}

function Footer(props) {
  return (
  <footer>
    <p>Made with React© {props.year}</p>
  </footer>
  );
}

const coreConcept = [
  "Logical operators",
  "Loops",
  "Functions",
]

coreConcept.map((concept) => (console.log(concept)))

function App() {
  return (
    <div className="App">
      <Header name="JavaScript©" />
      <Main description="This is a property of the Main."/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
