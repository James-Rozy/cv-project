import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className='page-footer'>
        <p>James Rozsypal © {new Date().getFullYear()}</p>
      </footer>
    );
  }
}

export default Footer;
