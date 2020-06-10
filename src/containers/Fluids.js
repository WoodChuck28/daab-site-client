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
import "./styles/PhysicsStyles.css";
import NotesOutline from "../containers/NotesOutlineFluids";
import SimsFluids from "./SimsFluids";

class Fluids extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink to="/collegeboardFluids" style={{color: "white"}}>CB</NavLink></li>
          <li><NavLink to="/notesFluids" style={{color: "white"}}>NOTES</NavLink></li>
          <li><NavLink to="/notesOutlineFluids" style={{color: "white"}}>NOTES OUTLINE</NavLink></li>
          <li><NavLink to="/vocabularyFluids" style={{color: "white"}}>VOCAB</NavLink></li>
          <li><NavLink to="/examplesFluids" style={{color: "white"}}>EXAMPLES</NavLink></li>
          <li><NavLink to="/simsFluids" style={{color: "white"}}>Simulations</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/collegeboardFluids" component={CollegeBoardFluid}/>
          <Route path="/notesFluids" component={Notes}/>
          <Route path="/notesOutlineFluids" component={NotesOutline}/>
          <Route path="/vocabularyFluids" component={Vocabulary}/>
          <Route path="/examplesFluids" component={WorkedExamplesFluids}/>
          <Route path="/simsFluids" component={SimsFluids}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Fluids;