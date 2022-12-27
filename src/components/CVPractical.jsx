import React, { Component } from "react";
import CustomInput from "./CustomInput";

class CVPractical extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section>
        <h3>Practical Experience</h3>
        <div className="practical-inputs">
          <CustomInput name='company-name' label='Company Name' type='text' isRequired={true} />
          <CustomInput name='postition-title' label='Position Title' type='text' isRequired={true} />
          <CustomInput name='main-tasks' label='Main Tasks' type='text' isRequired={true} />
          <CustomInput name='date-started' label='Date Started' type='date' isRequired={true} />
          <CustomInput name='date-ended' label='Date Ended' type='date' isRequired={true} />
        </div>
        
      </section>
    );
  }
}

export default CVPractical;