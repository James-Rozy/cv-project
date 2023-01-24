import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  constructor() {
    super();
  }

  toggleEdit() {
    const editBtn = document.getElementById('btn-edit-save');

    if (editBtn.classList.contains('header-btn-edit')) {
      editBtn.textContent = 'Save';
      editBtn.classList.remove('header-btn-edit');
      editBtn.classList.add('header-btn-save');
    } else {
      editBtn.textContent = 'Edit';
      editBtn.classList.remove('header-btn-save');
      editBtn.classList.add('header-btn-edit');
    }
  }

  render() {
    return (
      <header className='page-header'>
        <h1>Curriculum Vitae Builder</h1>
        <div className='header-input-wrapper'>
          <button
            id='btn-edit-save'
            className='header-btn-edit'
            onClick={this.toggleEdit}
          >
            Edit
          </button>
          <button className='header-btn-export'>Export</button>
        </div>
      </header>
    );
  }
}

export default Header;
