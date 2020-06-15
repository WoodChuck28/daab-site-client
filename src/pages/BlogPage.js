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


export default function BlogPage() {

  function displayBlogs() {
    return (<div className="container">
    <div className="header">
          <h2>The Adventures of Mr. Daab</h2>
          <p>Click on a blog and its content will appear below on this page!</p>
          <HashRouter>
        <div>
        <div class="wrapper">
    		
    		<div class="card radius shadowDepth1">
    			<div class="card__image border-tlr-radius">
    				<img src="http://lorempixel.com/400/200/sports/" alt="image" class="border-tlr-radius"/>
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
	    				<h2><NavLink to="/firstPost" style={{color: "black"}}>First Post - A little about this site</NavLink></h2>
	    				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
	    			</article>
    			</div>
    			<div class="card__action">
    				<div class="card__author">
    					<img src="http://lorempixel.com/40/40/sports/" alt="user"/>
    					<div class="card__author-content">
    						By <a href="#">Mr. Daab</a>
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
