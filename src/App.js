import React from 'react';
import './App.css';
import Welcome from "./Welcome";

function App() {
  fetch("http://yeehaw-backend.herokuapp.com/", {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })

  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
