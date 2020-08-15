import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from './Assets/Board.png';

const Flexbox = styled.div`
    display: flex; 
    height: 50%
    justify-content: space-around;
    align-items: center;
    background-repeat: no-repeat;
    height: 50%;
    width: 50%;
    background-image: url(${img});
    background-size: cover;
`;
const Character = styled.div`
    margin-left: 200px;
    display: flex; 
    flex-direction: column;
`;
const Button = styled.a`
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
    width: 200px;
    margin-left: 100px;
    max-width: 300px;
`;

const Shooter = styled.img`
    height: 400px;
 
 
`;

const FemaleShooter = styled.img`
    height: 400px;
  
 
`;


export class Menu extends Component {

    render() {
        return (
            <Flexbox>
                <Character>
                    <Shooter src={require("./Assets/Shooter.gif")} />
                    <Link to="/"><Button>Male</Button></Link>

                </Character>
                <Character>
                    <FemaleShooter src={require("./Assets/GirlShooter.gif")} />
                    <Link to="/"><Button>Female</Button></Link>

                </Character>

            </Flexbox>
        );
    }
}

export default Menu;
