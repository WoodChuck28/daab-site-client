import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import CollegeBoardFluid from '../containers/CollegeBoardDoc';
import Notes from '../containers/Notes';
import Vocabulary from './VocabularyFluids';
import WorkedExamplesFluids from "../containers/WorkedExamplesFluids";
import "./styles/Fluids.css";
import NotesOutline from "../containers/NotesOutlineFluids";

class Fluids extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
          <li><NavLink to="/collegeboard">CB</NavLink></li>
          <li><NavLink to="/notes">NOTES</NavLink></li>
          <li><NavLink to="/notesOutline">NOTES OUTLINE</NavLink></li>
          <li><NavLink to="/vocabularyFluids">VOCAB</NavLink></li>
          <li><NavLink to="/examples">EXAMPLES</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboard" component={CollegeBoardFluid}/>
          <Route path="/notes" component={Notes}/>
          <Route path="/notesOutline" component={NotesOutline}/>
          <Route path="/vocabularyFluids" component={Vocabulary}/>
          <Route path="/examples" component={WorkedExamplesFluids}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Fluids;