import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends React.Component {
    render() {
      return (
        <div>
        <div className="Home">

        </div>
        <div id="footer" className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
          <h1 id="contact">Contact Us!</h1>
          </div>
          <div id="address" className="col-lg-3">
          <h3>ADDRESS:</h3>
          <p>
          11111 w west st<br/>
          Sandy OR, 97055
          </p>
          </div>
          <div id="info" className="col-lg-3">
          <h3>
            Phone Number:</h3>
            <p>
            503-555-5555</p>
            <h3>Email Address:</h3>
            <p>
            Salonambiancegresham@gmail.com
          </p>
          </div>
          <div id="social" className="col-lg-3">
          <a href="https://www.facebook.com/salonambiancegresham/" target="blank"><FontAwesomeIcon icon={['fab', 'facebook']} size="5x" id="social"/></a><br/>
                <a href="https://www.instagram.com/salonambiancegresham/?hl=en" target="blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="5x" id="social"/></a>
          </div>
        </div>
        </div>
        </div>
      )
    }
}    

export default Home;