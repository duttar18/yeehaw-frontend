
import React from 'react';
import styled from "styled-components";
import Time from 'react-time';
import { keyFrameRight } from './Keyframesright';
import { keyFrameLeft } from './Keyframesleft';
import { StandRight } from './KeyFrameStandRight';
import { StandLeft } from './KeyFrameStandLeft';
const Button = styled.button`
  position: fixed; 
  margin-top: 20px;
  background-color: black;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-family: 'Pangolin', cursive;
  font-size: 2em;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  width: 300px;
  max-width: 400px;
`;
const FemaleShooterWalking = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 400px;
    animation: ${keyFrameRight} 6s ease-in-out 0s forwards; 
`;
const MaleShooterWalking = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 400px;
    animation: ${keyFrameLeft} 6s ease-in-out 0s forwards; 
`;
const FemaleStand = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 400px;
    animation: ${StandRight} 6s ease-in-out 0s forwards; 
`;
const MaleStand = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 400px;
    animation: ${StandLeft} 6s ease-in-out 0s forwards; 
`;
const FemaleStandNoAn = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 400px;
    right: 0; 
`;
const MaleStandNoAn = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 400px;
    left: 0;
`;
const FemaleDeath = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 400px;
    right: 0;
`;
const MaleDeath = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 400px;
    left: 0;
`;
const Searching = styled.img`
    max-width: 750px;
`;
const Text = styled.h1`
  font-size: 3em; 
  font-family: 'Pangolin', cursive;

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
      player2Name: "",
      player2Gender: "M",
      waittime: 0,
      gameId: 0,
      shoot: false,
      startTime: new Date(),
      time: 0,
      player2Time: 0,
      won: true,
      gameOver: false,
      name: "",
      gender: "M",
    };
    this.shoot = this.shoot.bind(this);
  }
  shoot() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.volume = 0.5;
    audioEl.play()
    let thistime = Date.now() - this.state.startTime.getTime()
    fetch(this.props.apiUrl + "/deathmatch", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": this.props.id,
        "gameId": this.state.gameId,
        "time": thistime
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
                <Text>GAME OVER</Text>
                {this.state.won ?
                  <>
                    <Text> You Won </Text>
                    <FemaleDeath src={require("./Assets/GirlDeathLeft.gif")} />
                    <MaleStandNoAn src={require("./Assets/ManStandRight.gif")} />
                  </> :
                  <><Text> You Didn't Win </Text>
                    <MaleDeath src={require("./Assets/ManDeathRight.gif")} />
                    <FemaleStandNoAn src={require("./Assets/GirlStandLeft.gif")} />
                  </>
                }
              </>
              :
              <>
                <FemaleShooterWalking src={require("./Assets/GirlWalkingRight.gif")} />
                <MaleShooterWalking src={require("./Assets/ManWalkingLeft.gif")} />
                <FemaleStand src={require("./Assets/GirlStandLeft.gif")} />
                <MaleStand src={require("./Assets/ManStandRight.gif")} />
                {this.state.shoot ?
                  <Button onClick={this.shoot}>Shoot!</Button>
                  :
                  <Button>Don't Shoot</Button>
                }
              </>
            }
            <audio className="audio-element">
              <source src={require("./Assets/gunshot.mp3")}></source>
            </audio>
          </div>



        }
      </>

    )
  }
}



export default Play
