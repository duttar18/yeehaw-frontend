
import React from 'react'
import styled from "styled-components";
import img from './Assets/Board.png';
import { Link } from "react-router-dom";

const Rules = styled.div`
    margin-top: -100px;
    flex-direction: column;
    font-family: 'Pangolin', cursive;
    padding: 50px;
    display: flex; 
    background-repeat: no-repeat;
    background-image: url(${img});
    background-size: cover;
    width: 940px;
    height: 601px;
`;
const Button = styled.button`
    margin-left: 50%;
    margin-top: 10%;
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
function About() {
  return (
    <Rules>
      <h1> About </h1>
      <h3>1. Outlaw is a Reaction Time Based game where you steal and collect money from people you beat in a 1v1 standoff!</h3>
      <h3>2. Click the button as soon as you see it turn to <span style={{ color: 'green' }}>SHOOT</span>!</h3>
      <h3>3. If you win, you take a portion of your opponents money!</h3>
      <h3>4. If you lose, you lost a portion of yours. The Wild West is a cruel and dangerous place :(</h3>
      <h3>5. Make sure you click SAVE when going to settings</h3>
      <h3>6. Each transaction is recorded with Blockchain, so nobody will be able to cheat how much money they have! </h3>
      <h3>Credits: Daniel Zheng, Raul Dutta, James Li</h3>
      <h3>Created for Yeehaw Hacks MLH Hackathon 2020</h3>
      <Link to="/"><Button> Return </Button></Link>
    </Rules>
  );
}



export default About
