import React, { Component } from "react";
import styled from "styled-components";

const Flexbox = styled.div`
    width: 100%;
    display: flex; 
    flex-direction: column;
    height: 50%
    justify-content: center; 
`;
const Button = styled.a`
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    max-width: 200px;
`;


export class Menu extends Component {
    render() {
        return (
            <Flexbox>
                <Button>Play</Button>
                <Button>About</Button>
                <Button>Tutorial</Button>
            </Flexbox>
        );
    }
}

export default Menu;
