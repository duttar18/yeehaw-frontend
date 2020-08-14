import React from 'react';
import './App.css';
import Welcome from "./Welcome";
import { BrowserRouter,Switch,Route } from "react-router-dom";

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
    <BrowserRouter>
      <Switch >
        <Route path="/" component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
