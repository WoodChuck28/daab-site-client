/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import "./styles/Home.css";
import CarouselPage from "../components/Carousel"

export default function Home() {
  const { isAuthenticated } = useAppContext();
  const [ isLoading, setIsLoading ] = useState(true);

  function displayHome() {
    return (<div className="container">
    <div className="header">
          <h2>WELCOME TO OUR WONDERFUL SITE</h2>
          <h4>Check out our content</h4>
        </div>
    <CarouselPage />
      <div className="grid-container">
        <div className="left">
              <div className="content">
                <a href="/physics" >
                <div className="content-overlay"></div>
                <img src="https://okpuzg.bl.files.1drv.com/y4mLaArqBQgSb-_pvoxNqVkQIodO9IPRgRG8GuYJtaVlwXMKeV9LPvPGTWQAzheivrDuojDWUTjgmigtxgZjXDIrgeV4oS_p1N6crMs0V5KL3bzK1ZwsTb6JHMt11a58VWlc1kuRpf-grfVhk5f8T6DciFK7BorQ4oSEqeYpCBEOIrsTbIfKb9HCovnyOGLxxA0ZguSzZlV42xeQcR3cBwVWg?width=660&height=371&cropmode=none" 
                width="100%" height="300" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">PHYSICS</h3>
                    <p className="content-text">This is a short description</p>
                </div>
                </a>
              </div>
        </div>
        <div className="middle">
        <div className="content">
        <a href="/nameform" >
        <div className="content-overlay"></div>
        <img src="https://96c80q.bl.files.1drv.com/y4mlKKEA_6vnVaRMyNusMZPNO-OACHyxN5qD8C_WA42-4P0Q8jz7fNVq7Fk32ul2hB5Dw3Cv5rj5htvzm-twVc9j-J0H1BkkGcbQNVe-8j9HcZfpK1pkv38vIu4PeymXXIREHtO_FsYlP2rFsYMHtVFtaUaXhvUOnM1xMCzSgbULTJQVZPNwtHkMAxHsYigANbOABVB6UBKp2RQgeuS2AARFQ?width=660&height=495&cropmode=none" 
        width="100%" height="300" />
        <div className="content-details fadeIn-bottom">
          <h3 className="content-title">MD Designs</h3>
            <p className="content-text">This is a short description</p>
        </div>
        </a>
      </div>
        </div>
        <div className="right">
        <div className="content">
        <a href="/blogs" >
        <div className="content-overlay"></div>
        <img src="https://ox8wcq.bl.files.1drv.com/y4mt_0C-12zD_-qZlO5caw1n3ZulBvZPgIXiK4gd3XvZbUxTzz3th_bpcUb8SJiSLC-kK06yW_jKaYyxkVxiyvZaZKIJATQLFyadBTLrx_NH52n8OWSBTSt-lyk6gb5DsCG4vsjEWl66DzrN-C7eTTRiE77X3JScYyI2sxxu-G-jVYBWH9nUJEU40mBuIDtnrQJj9c1q8-QTsHPkuAZ8evgYw?width=660&height=440&cropmode=none" 
        width="100%" height="300" />
        <div className="content-details fadeIn-bottom">
          <h3 className="content-title">Adventure of Mr. Daab</h3>
            <p className="content-text">What is he getting into now? A little about everything.</p>
        </div>
        </a>
      </div>
        </div> 
        
</div>
</div>

    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Mr.Daab.com</h1>
        <p>An Awesome Site!</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="Home">
      {displayHome()}
    </div>
  );
}
