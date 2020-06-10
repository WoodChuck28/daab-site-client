import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CollegeBoardKine from '../containers/CBKine';
import NotesKine from '../containers/NotesKine';

import VocabularyKine from '../containers/VocabularyKine';
import "./styles/Kinematics.css";


class Kinematics extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
          <li><NavLink to="/collegeboardKine">CB</NavLink></li>
          <li><NavLink to="/notesKine">NOTES</NavLink></li>
          <li><NavLink to="/vocabularyKine">VOCAB</NavLink></li>
          <li><NavLink to="/practiceKine">Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardKine" component={CollegeBoardKine}/>
          <Route path="/notesKine" component={NotesKine}/>
          <Route path="/vocabularyKine" component={VocabularyKine}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Kinematics;