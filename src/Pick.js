import "./Pick.css"
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from './Assets/Board.png';

const Flexbox = styled.div`
    display: flex; 
    justify-content: space-around;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(${img});
    background-size: cover;
    width: 940px;
    height: 601px;
`;
const Character = styled.div`
    display: flex; 
    flex-direction: column;
`;
const Button = styled.a`
    background-color: black;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-family: 'Pangolin', cursive;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    margin-left: 100px;
    max-width: 300px;
    margin-top: 50px;
`;
const Button2 = styled.a`
    background-color: black;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-family: 'Pangolin', cursive;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 50px;
    max-width: 300px;
    margin-top: 50px;
    margin-right: 50px;
`;
const In = styled.input`
    width: 50px;
`;
const Shooter = styled.img`
    height: 400px;
`;

const FemaleShooter = styled.img`
    height: 400px;
`;


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Anonymous",
            gender: "M"
        }
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }
    handleChange(event) {
        this.setState({ name: event.target.value });
    }
    save(event) {
        console.log(this.state, this.props.id)
        fetch(this.props.apiUrl + "/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": this.props.id,
                "name": this.state.name,
                "gender": this.state.gender
            })
        })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then((data) => {
                this.setState(data);
                console.log(data)
            })
    }

    componentDidMount() {
        fetch(this.props.apiUrl + "/user", {
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
            })

    }
    render() {
        return (
            <Flexbox>
                <Character>
                    <Shooter src={require("./Assets/SmallManShoot.gif")} />
                    <Button onClick={() => { this.setState({ gender: "M" }) }} className={this.state.gender === "M" ? "selected" : {}}>Cowboy</Button>
                </Character>
                <Character>
                    <FemaleShooter src={require("./Assets/SmallGirlShoot.gif")} />
                    <Button onClick={() => { this.setState({ gender: "F" }) }} className={this.state.gender === "F" ? "selected" : {}}>Cowgirl</Button>
                </Character>
                <Character>
                    <In type="text" value={this.state.name} onChange={this.handleChange} />
                    <Button2 onClick={this.save}>Save</Button2>
                </Character>
            </Flexbox>
        );
    }
}

export default Menu;
