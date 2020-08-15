import React from 'react';
import './App.css';
import Welcome from "./Welcome";
import About from "./About";
import Play from "./Play";
import Menu from "./Menu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import img from './Assets/Background.png';

const Shooter = styled.img`
    height: 400px;
    position: fixed;
    margin-top: 60vh;
    margin-left: 40vh;
`;
const Player = styled.audio`
    position: fixed; 
    width: 300px;
    margin: 20px;

`;
const Welc = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    background-image: url(${img});
    background-size: cover
`;
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
      <Player src={require("./Assets/music.mp3")} controls autoplay preload="auto" loop></Player>
      <Shooter src={require("./Assets/Shooter.gif")} />
      <Welc >
        <Switch >
          <Route exact path="/" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/play" component={Play} />
        </Switch>
      </Welc>
    </BrowserRouter>
  );
}

export default App;
