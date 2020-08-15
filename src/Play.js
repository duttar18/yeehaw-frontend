import "./Play.css"
import React from 'react';
import {Link} from "react-router-dom";
import { withRouter, Router, NavLink, Route, Switch, useLocation } from 'react-router-dom';

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
          <div>
              hi
          </div>
      );
  }
}



export default Play
