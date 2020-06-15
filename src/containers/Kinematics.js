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
import { Card, CardContent } from "@material-ui/core";


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
        <Card style={{background: "inherit"}}>
          <CardContent style={{textAlign: "center"}}>
          <h4>Kinematics - The study of motion in one or more dimensions.</h4>
            <img src="https://hips.hearstapps.com/autoweek/assets/s3fs-public/1017401483-LAT-20190323-lepage-190323-cota-12919.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=980:*"
            style={{width: "60%", height:"300px"}} />
          </CardContent>
        </Card>
        </HashRouter>
        
        
        
    );
  }
}
 
export default Kinematics;