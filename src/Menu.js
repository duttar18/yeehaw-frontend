import React, { Component } from "react";
import styled from "styled-components";

const Flexbox = styled.div`
    display: flex; 
    flex-direction: column;
    height: 50%
    align-items: center; 
    align-content: center; 
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
    width: 200px;
    max-width: 300px;
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
