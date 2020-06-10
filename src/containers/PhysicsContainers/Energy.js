import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBEnergy from './CBEnergy';
import NotesEnergy from './NotesEnergy';
import VocabEnergy from './VocabEnergy';
import "./styles/Energy.css";


class Energy extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
          <li><NavLink to="/collegeboardEnergy">CB</NavLink></li>
          <li><NavLink to="/notesEnergy">NOTES</NavLink></li>
          <li><NavLink to="/vocabEnergy">VOCAB</NavLink></li>
          <li><NavLink to="/practiceEnergy">Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardEnergy" component={CBEnergy}/>
          <Route path="/notesEnergy" component={NotesEnergy}/>
          <Route path="/vocabEnergy" component={VocabEnergy}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Energy;