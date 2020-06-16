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

import "./styles/Blog.css"
import { Grid } from "@material-ui/core";


export default function BlogPage() {
  const image1 = require('../assets/resources/img/galaxy2.jpg');
  const image2 = require('../assets/resources/img/MyLOGO.png');
  const serverlessImage = require('../assets/resources/img/Serverless.PNG')

  function displayBlogs() {
    return (<div className="container">
    <div className="header">
          <h2>The Adventures of Mr. Daab</h2>
          <p>Click on a blog and its content will appear below on this page!</p>
          <HashRouter>
        <div>
        <div class="wrapper" style={{display: "contents", margin: "20px"}}>
        
    		<div class="row card__padding" style={{display: "flex", marginLeft: "10px"}}>
    		<div class="card radius shadowDepth1" style={{maxWidth: "300px", margin: "20px"}}>
    			<div class="card__image border-tlr-radius">
    				<img src={image1} height="200" alt="image" class="border-tlr-radius"/>
                </div>

    			<div class="card__content card__padding">
                    <div class="card__share">
                        <div class="card__social">  
                            <a class="share-icon facebook" href="#" ><span class="fa fa-facebook"></span></a>
                            <a class="share-icon twitter" href="#"><span class="fa fa-twitter"></span></a>
                            <a class="share-icon googleplus" href="#"><span class="fa fa-google-plus"></span></a>
                        </div>
                    </div>
    				<div class="card__meta">
    					<a href="#">General</a>
                <time>13 June 2020</time>
    				</div>
    				<article class="card__article">
	    				<h4><NavLink to="/firstPost" style={{color: "black"}}>First Post - A little about this site</NavLink></h4>
	    				<p>I created this site in an effort to assist with Physics education at a college level. Additionally...</p>
	    			</article>
    			</div>
    			<div class="card__action">
    				<div class="card__author">
    					<img src={image2} width="50" height= "50" alt="user"/>
    					<div class="card__author-content">
    						By <a href="#">Mr. Daab</a>
    					</div>
    				</div>
    			</div>
        </div>

        <div class="card radius shadowDepth1" style={{maxWidth: "300px", margin: "20px"}}>
    			<div class="card__image border-tlr-radius">
    				<img src={serverlessImage} height="200" alt="image" class="border-tlr-radius"/>
                </div>

    			<div class="card__content card__padding">
                    <div class="card__share">
                        <div class="card__social">  
                            <a class="share-icon facebook" href="#" ><span class="fa fa-facebook"></span></a>
                            <a class="share-icon twitter" href="#"><span class="fa fa-twitter"></span></a>
                            <a class="share-icon googleplus" href="#"><span class="fa fa-google-plus"></span></a>
                        </div>
                    </div>
    				<div class="card__meta">
    					<a href="#">Development</a>
                <time>14 June 2020</time>
    				</div>
    				<article class="card__article">
	    				<h4><NavLink to="/secondPost" style={{color: "black"}}>Serverless Framework - How this site works</NavLink></h4>
	    				<p>MRDaab.com is a serverless website built on Javascript, HTML, React, and Amazon Web Services. The incredible thing 
              about a SERVLESS framework is...</p>
	    			</article>
    			</div>
    			<div class="card__action">
    				<div class="card__author">
    					<img src={image2} width="50" height="50" alt="user"/>
    					<div class="card__author-content">
    						By <a href="#">Mr. Daab</a>
    					</div>
    				</div>
    			</div>
        </div>
        </div>
        
        
    	</div>
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
