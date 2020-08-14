import React from 'react';
import './App.css';
import Welcome from "./Welcome";
import About from "./About";
import Play from "./Play";
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
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route path="/play" component={Play} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
