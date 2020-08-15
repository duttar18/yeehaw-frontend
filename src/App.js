import React from 'react';
import './App.css';
import Welcome from "./Welcome";
import About from "./About";
import Play from "./Play";
import { BrowserRouter,Switch,Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
      // Initialize mutable state
      super(props);
      this.state = {
          id: 0,
          name: "player"
      };
  }
  componentDidMount() {
    fetch("http://yeehaw-backend.herokuapp.com/createPlayer", {
      method: "POST",
      headers:{
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
          "name" : this.state.name
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
          <Switch >
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/play" component={Play} />
          </Switch>
        </BrowserRouter>
      );
  }
}





export default App;
