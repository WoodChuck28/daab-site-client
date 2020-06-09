import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { PageHeader, ListGroup } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import "./styles/Physics.css";

import ResponsiveGrid from "../components/MyGrid";
import NewTicker from "../components/TickerStore"
import StockFetch from "../containers/StockFetch"
import { Card } from "@material-ui/core";

export default function Physics() {
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  function renderLander() {
    return (
      <div className="lander">
        <h1>Physics Home</h1>
        <p>One stop shop for all of algebra based physics</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
        <div>
          <h2>Physics Test</h2>
        </div>
      </div>
    );
  }

  function displayMainPhysics() {
     
    return (
      <div className="mainClass">
      <div></div>
        <Card className="physHeader" style={{background: "#354e01", borderColor: "black", borderWidth: "3px", borderStyle: "solid", 
        padding: "5px"}}>
          <h1>Guide to using the physics pages:</h1>
 
          <ul style={{textAlign: "center"}}>
            <li><strong style={{fontSize: "18px"}}>1. CB: Link to Collegeboard's unit outline guide. Includes standards, science practices, and I can statements</strong></li>
            <li><strong style={{fontSize: "18px"}}>2. NOTES: Link to comprehensive notes guide with example problems throughout</strong></li>
            <li><strong style={{fontSize: "18px"}}>3. NOTES OUTLINE: Link to fill in the blank notes guide with practice problems</strong></li>
            <li><strong style={{fontSize: "18px"}}>4. VOCAB: Link to vocabulary for this unit</strong></li>
            <li><strong style={{fontSize: "18px"}}>5. EXAMPLES: Link to worked examples from the notes tab</strong></li>
            </ul>
        </Card>
        <ResponsiveGrid className="testertester"></ResponsiveGrid>
      </div>
    );
  }

  return (
    <div className="Physics">
      {isAuthenticated ? displayMainPhysics() : renderLander()}
    </div>
  );
}