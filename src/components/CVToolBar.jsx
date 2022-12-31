import React, { Component } from 'react';

class CVToolBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='cv-toolbar'>
        <button>Edit</button>
        <button>Export</button>
      </div>
    );
  }
}

export default CVToolBar;
