
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Time from 'react-time';


const Searching = styled.img`
    max-width: 750px;
`;
function timeout(ms) { //pass a time in milliseconds to this function
  return new Promise(resolve => setTimeout(resolve, ms));
}
class Play extends React.Component {

  constructor(props) {
    // Initialize mutable state
    super(props);
    this.state = {
      finding: true,
      playerMoney: 0,
      player2Money: 0,
      player2Name: 0,
      waittime: 0,
      gameId: 0,
      shoot: false,
      startTime: new Date(),
      time: 0,
      player2Time: 0,
      won: true,
      gameOver: false,
    };
    this.shoot = this.shoot.bind(this);
  }
  shoot() {

    this.setState({ time: (((new Date()) - this.state.startTime) / 1000.0) })
    fetch(this.props.apiUrl + "/deathmatch", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": this.props.id,
        "gameId": this.state.gameId,
        "time": this.state.time
      })
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState(data);
        this.setState({ gameOver: true })
      })
  }
  componentDidMount() {
    console.log(this.props.id)
    fetch(this.props.apiUrl + "/finding", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": this.props.id
      })
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState(data);
        this.setState({ finding: false });
        return data.waittime;
      })
      .then(timeout)
      .then(() => {
        this.setState({ shoot: true, startTime: new Date() })
      })

  }
  render() {
    return (
      <>
        {this.state.finding ?
          <div><Searching src={require("./Assets/Searching.gif")} /></div> :
          <div>
            {this.state.gameOver ?
              <>
                <p>GAME OVER!!! Insert rainbow animation</p>
                {this.state.won ?
                  <div> you won </div> :
                  <div> you did not win</div>
                }
              </>
              :
              <>
                {this.state.shoot ?
                  <button onClick={this.shoot}>Shoot!</button>
                  :
                  <button>Don't Shoot</button>
                }
              </>
            }
          </div>



        }
      </>

    )
  }
}



export default Play
