import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBDyn from './CBDyn';
import NotesDyn from './NotesDyn';
import VocabDyn from './VocabDyn';
import "./styles/Master.css";


class Dynamics extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink to="/collegeboardDyn" style={{color: "white"}}>CB</NavLink></li>
          <li><NavLink to="/notesDyn" style={{color: "white"}}>NOTES</NavLink></li>
          <li><NavLink to="/vocabDyn" style={{color: "white"}}>VOCAB</NavLink></li>
          <li><NavLink to="/practiceDyn" style={{color: "white"}}>Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardDyn" component={CBDyn}/>
          <Route path="/notesDyn" component={NotesDyn}/>
          <Route path="/vocabDyn" component={VocabDyn}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Dynamics;