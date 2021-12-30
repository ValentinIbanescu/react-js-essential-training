import React, { useState, useEffect } from 'react';
import './App.css';

function AppTwo() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`It's ${emotion} around here.`)
  }, [emotion]);

  useEffect(() => {
    console.log(`It's also ${secondary} here.`)
  }, [secondary]);

  useEffect(() => {
    console.log(`Status is ${checked}.`)
  }, [checked]);

  function toggle() {
    setChecked(checked => !checked)
  }

  return (
    <>
      <h1 className="App">Hello, World! The current emotion is {emotion} and {secondary}!</h1>
      <button onClick={() => setEmotion("happy")}>Make happy</button>
      <button onClick={() => setEmotion("frustraded")}>Frustrate</button>
      <button onClick={() => setEmotion("motivated")}>Motivate</button>
      <button onClick={() => setSecondary("crabby")}>Make crabby</button>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked ? "Yes" : "No"}</p>
    </>
  );
}

export default AppTwo;
