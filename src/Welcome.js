import React, { Component } from "react";
import styled from "styled-components";
import img from './Assets/Background.png';



const Welc = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-around; 
    height: 100vh;
    background-image: url(${img});
    background-size: cover
`;
const Shooter = styled.img`
    height: 400px;
    margin-top: 750px;
    margin-left: -900px;

`;
export class Welcome extends Component {
    render() {
        return (
            <Welc>
                <Shooter src={require("./Assets/Shooter.gif")} />
            </Welc>
        );
    }
}

export default Welcome;
