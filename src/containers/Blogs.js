import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "aws-amplify"

import { onError } from "../libs/errorLib";
import { useAppContext } from "../libs/contextLib";

import "./styles/Blogs.css"

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const { isAuthenticated } = useAppContext;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
  
      try {
        const blogs = await loadBlogs();
        setBlogs(blogs);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);
  
  function loadBlogs() {
    return API.get("blogs", "/blogs");
  }

  function renderBlogsList(blogs) {
    return [{}].concat(blogs).map((blog, i) =>
      i !== 0 ? (
        <LinkContainer key={blog.blogsId} to={`/blogs/${blog.blogsId}`}>
          <ListGroupItem header={blog.content.trim().split("\n")[0]}>
            {"Created: " + new Date(blog.createdAt).toLocaleString()}
          </ListGroupItem>
        </LinkContainer>
      ) : (
        <LinkContainer key="new" to="/blogs/new">
          <ListGroupItem>
            <h4>
              <b>{"\uFF0B"}</b> Create a new blog
            </h4>
          </ListGroupItem>
        </LinkContainer>
      )
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple blog component</p>
      </div>
    );
  }

  function renderBlogs() {
    return (
      <div className="blogs">
        <PageHeader>Blogs</PageHeader>
        <ListGroup>
          {!isLoading && renderBlogsList(blogs)}
        </ListGroup>
      </div>
    );
  }

  return (
    <div className="Blogs">
      {isAuthenticated ? renderBlogs() : renderLander()}
    </div>
  );
}