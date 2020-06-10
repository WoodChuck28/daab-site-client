import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CBUCM from './CBUCM';
import NotesUCM from './NotesUCM';
import VocabUCM from './VocabUCM';
import "./styles/UCM.css";


class UCM extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
          <li><NavLink to="/collegeboardUCM">CB</NavLink></li>
          <li><NavLink to="/notesUCM">NOTES</NavLink></li>
          <li><NavLink to="/vocabUCM">VOCAB</NavLink></li>
          <li><NavLink to="/practiceUCM">Example Problems</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardUCM" component={CBUCM}/>
          <Route path="/notesUCM" component={NotesUCM}/>
          <Route path="/vocabUCM" component={VocabUCM}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default UCM;