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
export class Welcome extends Component {
    render() {
        return (
            <div>
                <Shooter src={require("./Assets/Shooter.gif")} />
                <Welc>
                    <Menu />
                </Welc>
            </div>
        );
    }
}

export default Welcome;
