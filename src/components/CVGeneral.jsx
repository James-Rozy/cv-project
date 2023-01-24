import React, { Component } from 'react';
import CustomInput from './CustomInput';

class CVGeneral extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='cv-section'>
        <h3>General Information</h3>
        <div className='cv-inputs'>
          <CustomInput
            name='name'
            label='Name'
            type='text'
            isRequired={true}
          />
          <CustomInput
            name='email'
            label='Email'
            type='email'
            isRequired={true}
          />
          <CustomInput
            name='phone'
            label='Phone'
            type='tel'
            isRequired={true}
          />
        </div>
      </section>
    );
  }
}

export default CVGeneral;
