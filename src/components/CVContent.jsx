import React, { Component } from "react";
import CVGeneral from "./CVGeneral";
import CVEducation from "./CVEducation";
import CVPractical from "./CVPractical";

class CVContent extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main>
        <h2>CV Content</h2>
        <CVGeneral />
        <CVEducation />
        <CVPractical />
      </main>
    );
  }
}

export default CVContent;