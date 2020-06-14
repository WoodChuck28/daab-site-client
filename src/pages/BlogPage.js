/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "./styles/Home.css";
import BlogsVisual from "../containers/VisualBlogs"
import BlogsVisual2 from "../containers/VisualBlogs2";


export default function BlogPage() {

  function displayBlogs() {
    return (<div className="container">
    <div className="header">
          <h2>The Adventures of Mr. Daab</h2>
          <h4>Check out my blogs below</h4>
          <HashRouter>
        <div>
          <ul className="header" style={{background: "#001a00"}}>
          <li><NavLink to="/firstPost" style={{color: "white"}}>First Post - A little about this site</NavLink></li>
          <li><NavLink to="/secondPost" style={{color: "white"}}>My Serverless Website? </NavLink></li>
          </ul>
          <div className="content">
          <Route path="/firstPost" component={BlogsVisual}/>
          <Route path="/secondPost" component={BlogsVisual2}/>
          </div>
        </div>
        </HashRouter>
        </div>   
    </div>
    );
  }


  return (
    <div className="Home">
      {displayBlogs()}
    </div>
  );
}
