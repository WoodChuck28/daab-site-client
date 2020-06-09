import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CollegeBoardFluid from '../containers/CollegeBoardDoc';
import Notes from '../containers/Notes';
import Vocabulary from '../containers/Vocabulary';
import "./styles/Fluids.css";


class Kinematics extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
          <li><NavLink to="/collegeboard">CB</NavLink></li>
          <li><NavLink to="/notes">NOTES</NavLink></li>
          <li><NavLink to="/vocabulary">VOCAB</NavLink></li>
          <li><NavLink to="/practice">Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboard" component={CollegeBoardFluid}/>
          <Route path="/notes" component={Notes}/>
          <Route path="/vocabulary" component={Vocabulary}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Kinematics;