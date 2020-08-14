import React, { Component } from "react";
import styled from "styled-components";
import img from './Assets/Background.png';
import Menu from './Menu';


const Welc = styled.div`
    width: 100%;
    display: flex; 
    height: 100vh;
    background-image: url(${img});
    background-size: cover
`;
const Shooter = styled.img`
    height: 400px;
    position: fixed;
    margin-top: 700px;
    margin-left: 400px;

`;
export class Welcome extends Component {
    render() {
        return (
            <Welc>
                <Shooter src={require("./Assets/Shooter.gif")} />
                <Menu />
                
            </Welc>
        );
    }
}

export default Welcome;
