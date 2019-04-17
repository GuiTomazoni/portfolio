import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <reactFragment>
        <Header />   
        <About />
        <Portfolio />
        <Contact />  
        <Footer />   
      </reactFragment>
    );
  }
}

export default App;
