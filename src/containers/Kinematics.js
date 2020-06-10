import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CollegeBoardKine from '../containers/CBKine';
import NotesKine from '../containers/NotesKine';

import VocabularyKine from '../containers/VocabularyKine';
import "./styles/PhysicsStyles.css";


class Kinematics extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink id="myLink" to="/collegeboardKine" style={{color: "white"}}>CB</NavLink></li>
          <li><NavLink to="/notesKine" style={{color: "white"}}>NOTES</NavLink></li>
          <li><NavLink to="/vocabularyKine" style={{color: "white"}}>VOCAB</NavLink></li>
          <li><NavLink to="/practiceKine" style={{color: "white"}}>Example Problems</NavLink></li>
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