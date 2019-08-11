import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Stylist from './Stylist';
import Services from './Services';
import Contact from './Contact';
import Home from "./Home";
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/stylist" component={Stylist} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} /> 
    </div>
  </Router>
  );
}

export default App;
