import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBDyn from './CBDyn';
import NotesDyn from './NotesDyn';
import VocabDyn from './VocabDyn';
import "./styles/Dynamics.css";


class Dynamics extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
          <li><NavLink to="/collegeboardDyn">CB</NavLink></li>
          <li><NavLink to="/notesDyn">NOTES</NavLink></li>
          <li><NavLink to="/vocabDyn">VOCAB</NavLink></li>
          <li><NavLink to="/practiceDyn">Example Problems</NavLink></li>
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