import React, { useState, useEffect, useReducer } from 'react';
import './App.css';

// https://api.github.com/users/valentinibanescu

function AppTwo({login}) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  const [checked, toggle] = useReducer (
    (checked) => !checked,
    false
    );

  useEffect(() => {
    console.log(`It's ${emotion} around here.`)
  }, [emotion]);

  useEffect(() => {
    console.log(`It's also ${secondary} here.`)
  }, [secondary]);

  useEffect(() => {
    console.log(`Status is ${checked}.`)
  }, [checked]);

  // Handling loading and errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetching data with Hooks
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <>
      <h1 className="App">Hello, World! The current emotion is {emotion} and {secondary}!</h1>
      <button onClick={() => setEmotion("happy")}>Make happy</button>
      <button onClick={() => setEmotion("frustraded")}>Frustrate</button>
      <button onClick={() => setEmotion("motivated")}>Motivate</button>
      <button onClick={() => setSecondary("crabby")}>Make crabby</button>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked ? "Yes" : "No"}</p>
      {/* Return fetched data. */}
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.name} src={data.avatar_url} />
      </div>
    </>
  );
}

export default AppTwo;
