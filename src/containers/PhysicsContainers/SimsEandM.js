import React, { Component } from "react";
import Iframe from 'react-iframe'
import "./styles/Energy.css";
 
class SimsEandM extends Component {
  render() {
    return (
    <div className="myclass">
    <iframe src="https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_en.html" 
    width="100%" height="500" scrolling="no" allowfullscreen></iframe>
      </div>
    );
  }
}
 
export default SimsEandM;