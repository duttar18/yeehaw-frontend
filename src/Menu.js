import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Flexbox = styled.div`
    display: flex; 
    flex-direction: column;
    height: 50%
    justify-content: center;
    align-items: center;
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
    margin: 4px 2px;
    cursor: pointer;
    width: 200px;
    max-width: 300px;
`;
const Title = styled.h1`
    font-family: 'Pangolin', cursive;
    font-size: 150px;
`;

export class Menu extends Component {
    render() {
        return (
            <Flexbox>
                <Title>Outlaws</Title>
                <Link to="/play"><Button>Play</Button></Link>
                <Link to="/about"><Button>About</Button></Link>
                <Link to="/pick"><Button>Settings</Button></Link>
            </Flexbox>
        );
    }
}

export default Menu;
