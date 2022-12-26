import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
