import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Stylist from './Stylist';
import Services from './Services';
import Home from "./Home";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
    <div className="app">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/stylist" component={Stylist} />
        <Route exact path="/services" component={Services} /> 
    </div>
  </Router>
  );
}

export default App;
