import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import AppTwo from './AppTwo.js';

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
  <>
    <App authenticated={false} />
    <AppTwo />
  </>,
  document.getElementById('root')
);
