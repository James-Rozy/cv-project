import React, { Component } from 'react';
import CVGeneral from './CVGeneral';
import CVEducation from './CVEducation';
import CVPractical from './CVPractical';

class CVContent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className='container'>
        <div className='content'>
          <h2 className='cv-header'>CV Content</h2>
          <CVGeneral />
          <CVEducation />
          <CVPractical />
        </div>
      </main>
    );
  }
}

export default CVContent;
