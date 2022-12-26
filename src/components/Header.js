import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className='page-header'>
        <h1>Curriculum Vitae Builder</h1>
      </header>
    );
  }
}

export default Header;
