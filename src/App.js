import React, { Component } from 'react';
import Header from './components/Header';
import CVContent from './components/CVContent';
import Footer from './components/Footer';
import './styles/css/style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <CVContent />
        <Footer />
      </div>
    );
  }
}

export default App;
