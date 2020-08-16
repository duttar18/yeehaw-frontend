import "./Pick.css"
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


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "player",
            gender: "M"
        }
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    save(event){
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
                    <Shooter src={require("./Assets/Shooter.gif")} />
                    <Button onClick={()=>{this.setState({gender:"M"})}} className={this.state.gender==="M" ? "selected" : {}}>Cowboy</Button>
                </Character>
                <Character>
                    <FemaleShooter src={require("./Assets/GirlShooter.gif")} />
                    <Button onClick={()=>{this.setState({gender:"F"})}} className={this.state.gender==="F" ? "selected" : {}}>Cowgirl</Button>
                </Character>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <button>Save</button>
                </form>


            </Flexbox>
        );
    }
}

export default Menu;
