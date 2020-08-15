import React, { Component } from "react";
import styled from "styled-components";
import img from './Assets/Background.png';
import Menu from './Menu';


const Welc = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    background-image: url(${img});
    background-size: cover
`;
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

export class Welcome extends Component {
    render() {
        return (
            <div>
                <Player src={require("./Assets/music.mp3")} controls autoplay preload="auto" loop></Player>
                <Shooter src={require("./Assets/Shooter.gif")} />
                <Welc>
                   
                </Welc>
            </div>
        );
    }
}

export default Welcome;
