import React, { Component } from "react";
import CustomInput from "./CustomInput";

class CVEducation extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section>
        <h3>Educational Experience</h3>
        <div className="education-inputs">
          <CustomInput name='school-name' label='School Name' type='text' isRequired={true} />
          <CustomInput name='study-title' label='Title of Study' type='text' isRequired={true} />
          <CustomInput name='study-date' label='Date of Study' type='date' isRequired={true} />
        </div>
      </section>
    );
  }
}

export default CVEducation;