import React from 'react';
import './App.css';
import About from "./About";
import Play from "./Play";
import Menu from "./Menu";
import Pick from "./Pick";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import img from './Assets/Backdrop.gif';
import { Link } from "react-router-dom";
import { keyFrameRider } from './KeyFrameRider';


const Rider = styled.img`
  margin-top: 35%; 
    height: 200px;
    position: fixed;
    animation: ${keyFrameRider} 12s ease-in-out 0s infinite; 
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
const Button = styled.button`
    position: fixed;
    margin-left: 350px;
    margin-top: 20px;
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-family: 'Pangolin', cursive;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    max-width: 200px;
`;
const Button2 = styled.button`
    position: fixed;
    margin-left: 20px;
    margin-top: 20px;
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-family: 'Pangolin', cursive;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    max-width: 200px;
`;
const HomeButton = styled.button`
    position: fixed;
    margin: 20px;
    right: 0;
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-family: 'Pangolin', cursive;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    max-width: 200px;
`;
class App extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
    this.state = {
      id: 0,
      apiUrl: "https://yeehaw-backend.herokuapp.com"
    };
  }
  componentDidMount() {
    fetch(this.state.apiUrl + "/createPlayer", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": "player"
      })
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState(data)
      })
  }
  render() {
    return (
      <BrowserRouter>
        {this.state.visible ? <Player src={require("./Assets/music.mp3")} controls autoplay preload="auto" loop /> : null}
        {this.state.visible ? <Button onClick={() => { this.setState({ visible: false }) }}>Hide</Button> : <Button2 onClick={() => { this.setState({ visible: true }) }}>Music</Button2>}
        <Link to="/"><HomeButton>Home</HomeButton></Link>
        <Rider src={require("./Assets/Rider.gif")} />
        <Welc >
          <Switch >
            <Route exact path="/" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/play" component={() => <Play id={this.state.id} apiUrl={this.state.apiUrl} />} />
            <Route path="/pick" component={() => <Pick id={this.state.id} apiUrl={this.state.apiUrl} />} />
          </Switch>
        </Welc>
      </BrowserRouter>
    );
  }
}





export default App;
