import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement("h1", {style: {color: 'green'}}, `Hello, World! This is my first React element.`),
  document.getElementById('root')
);
