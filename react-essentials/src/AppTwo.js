import React, { useState } from 'react';
import './App.css';

function AppTwo() {
  const [emotion, setEmotion] = useState("happy");
  return (
    <>
      <h1 className="App">Hello, World! The current emotion is {emotion}!</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("frustraded")}>Frustrate</button>
      <button onClick={() => setEmotion("motivated")}>Motivate</button>
    </>
  );
}

export default AppTwo;
