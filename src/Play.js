import React from 'react';
import styled from "styled-components";
import Time from 'react-time';
import { keyFrameRight } from './Keyframesright';
import { keyFrameLeft } from './Keyframesleft';
import { StandRight } from './KeyFrameStandRight';
import { StandLeft } from './KeyFrameStandLeft';
const FlexBox = styled.div`
  position: fixed; 
  left: 3%;
  top: 10%; 
  display: flex; 
  flex-direction: column;
`;
const FlexBox2 = styled.div`
  position: fixed; 
  right: 3%;
  top: 10%; 
  display: flex; 
  flex-direction: column;
`;
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
    height: 20%;
    animation: ${keyFrameRight} 6s ease-in-out 0s forwards; 
`;
const MaleShooterWalking = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 20%;
    animation: ${keyFrameLeft} 6s ease-in-out 0s forwards; 
`;
const FemaleStand = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 20%;
    animation: ${StandRight} 6s ease-in-out 0s forwards; 
`;
const MaleStand = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 20%;
    animation: ${StandLeft} 6s ease-in-out 0s forwards; 
`;
const FemaleStandNoAn = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 20%;
    right: 0; 
`;
const MaleStandNoAn = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 20%;
    left: 0;
`;
const FemaleDeath = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 20%;
    right: 0;
`;
const MaleDeath = styled.img`
    position: fixed; 
    margin-top: 5%;
    height: 20%;
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
      playerMoney: 500,
      player2Money: 1000,
      player2Name: "James Li",
      player2Gender: "M",
      waittime: 0,
      gameId: 0,
      shoot: false,
      startTime: new Date(),
      time: 0,
      player2Time: 0,
      won: true,
      gameOver: false,
      name: "Anonymous",
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
            <FlexBox>
              <h1>{this.state.name}</h1>
              <h1>{this.state.playerMoney}</h1>
            </FlexBox>
            <FlexBox2>
              <h1>{this.state.player2Name}</h1>
              <h1>{this.state.player2Money}</h1>
            </FlexBox2>
            {this.state.gameOver ?
              <>
                <Text>GAME OVER</Text>
                {this.state.won ?
                  <>
                    <Text> You Won </Text>
                    {this.state.gender === "M" ?
                      <>
                        <FemaleDeath src={require("./Assets/GirlDeathLeft.gif")} />
                        <MaleStandNoAn src={require("./Assets/ManStandRight.gif")} />
                      </> :
                      <>
                        <FemaleDeath src={require("./Assets/GirlDeathLeft.gif")} />
                        <MaleStandNoAn src={require("./Assets/GirlStandRight.gif")} />
                      </>
                    }
                  </> :
                  <><Text> You Didn't Win </Text>
                    {this.state.gender === "M" ?
                      <>
                        <MaleDeath src={require("./Assets/ManDeathRight.gif")} />
                        <FemaleStandNoAn src={require("./Assets/GirlStandLeft.gif")} />
                      </> :
                      <>
                        <MaleDeath src={require("./Assets/GirlDeathRight.gif")} />
                        <FemaleStandNoAn src={require("./Assets/GirlStandLeft.gif")} />
                      </>
                    }
                  </>
                }
              </>
              :
              <>

                <FemaleShooterWalking src={require("./Assets/GirlWalkingRight.gif")} />
                <FemaleStand src={require("./Assets/GirlStandLeft.gif")} />
                {this.state.gender === "M" ?
                  <>
                    <MaleShooterWalking src={require("./Assets/ManWalkingLeft.gif")} />
                    <MaleStand src={require("./Assets/ManStandRight.gif")} />
                  </> :
                  <>
                    <MaleShooterWalking src={require("./Assets/GirlWalkingLeft.gif")} />
                    <MaleStand src={require("./Assets/GirlStandRight.gif")} />
                  </>
                }
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