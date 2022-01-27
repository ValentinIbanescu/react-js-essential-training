import React from 'react';
import logo from './logo.svg';
import './App.css';
import cover from './cover.jpg';

const concepts = [
  "Logical operators",
  "Loops",
  "Functions",
  "Array iteration"
]

const conceptsObject = concepts.map((concept, index) => ({id: index, title: concept}));
console.log(conceptsObject);

function Header(props) {
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
        <ul style={{listStyle: "none"}}>{props.concepts.map((concept) =>
        <li key={concept.id}>
          {concept.title}
          </li>)
        }</ul>
      </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>{props.description}</p>
      <img src={cover} className="App-cover" alt="profile in pullover" height="200" />
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

function App(props) {
  return (
    <div className="App">
      <Header name="JavaScript©" concepts={conceptsObject}/>
      <Main description="This is a property of the Main."/>
      { (props.authenticated) ? <SecretComponent /> : <StandardComponent />}
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

function SecretComponent() {
 return <h1 className="App-link">Secret component available only for authenticated users.</h1>
}

function StandardComponent() {
  return <h1 className="App-link">Standard component available for everybody.</h1>
}

export default App;
