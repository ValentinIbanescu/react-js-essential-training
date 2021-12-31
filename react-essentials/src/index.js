import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import AppTwo from './AppTwo.js';
import AppThree from './AppThree.js';
import Checkbox from './Checkbox.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

/* ReactDOM.render(
  React.createElement("h1", {style: {color: 'green'}}, `Hello, World! This is my first React element.`),
  document.getElementById('root')
); */

/* ReactDOM.render(
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Monday"),
    React.createElement("li", null, "Tuesday"),
    React.createElement("li", null, "Wednesday"),
    React.createElement("li", null, "Thursday"),
    React.createElement("li", null, "Friday"),
  ),
  document.getElementById('root')
); */

ReactDOM.render(
  <Router>
    {/* <App authenticated={false} />
    <AppTwo login="valentinibanescu"/> */}
    <AppThree />
    {/* <Checkbox /> */}
  </Router>,
  document.getElementById('root')
);
