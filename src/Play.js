
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const Loading = styled.img`
    max-width: 750px;
`;
class Play extends React.Component {

  constructor(props) {
      // Initialize mutable state
      super(props);
      this.state = {
          id: 0,

      };
  }
  componentDidMount() {
      
  }
  render() {
    return (
      <div><Loading src={require("./Assets/Loading.gif")} /></div>
    )
  }
}



export default Play
