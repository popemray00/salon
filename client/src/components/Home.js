import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends React.Component {
    render() {
      return (
        <div>
          <div className="Home"></div>
          
          <div id="footer" className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <h1 id="contact">Contact Us!</h1>
              </div>
              
              <div id="address" className="col-lg-3">
                <h3>ADDRESS:</h3>
                <h4>
                192 NE 2nd St<br/>
                Gresham, OR 97030<br/>
                United States</h4>
              </div>
              
              <div id="info" className="col-lg-3">
                <h3>Phone Number:</h3>
                <h4>503-674-7474</h4>
                <h3>Email Address:</h3>
                <h4>salonambiancegresham@gmail.com</h4>
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