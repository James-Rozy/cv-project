import React, { Component } from "react";
import CVGeneral from "./CVGeneral";
import CVEducation from "./CVEducation";
import CVPractical from "./CVPractical";
import '../styles/CV.css'

class CVContent extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main className="cv-main">
        <div className="cv-content">
          <h2>CV Content</h2>
          <CVGeneral />
          <CVEducation />
          <CVPractical />
        </div>
        
      </main>
    );
  }
}

export default CVContent;