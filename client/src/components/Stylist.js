import React from 'react';
import "./Home.css";

class Stylist extends React.Component {
    render() {
      return (
        <div>
          <h1 id="perm">Meet Our Stylist</h1>
          <br/>
            <div className="container-fluid">
              <div className="row">
                <div id="card" className="col-12 col-sm-3">
                <img id="pic" src="images/michael.jpg" alt="John Doe"/>
                </div>
                <div id="bio" className="col-12 col-sm-9">
                  <h1>Michael Pope</h1>
                  <p>Hellooooooooooooooooooooooooooooooooo</p>
                </div>
              </div>
            </div>
            <br/>
            <div className="container-fluid">
              <div className="row">
                <div id="bio" className="col-12 col-sm-9">
                  <h1>Michael Pope</h1>
                  <p>Hellooooooooooooooooooooooooooooooooo</p>
                </div>
                <div id="card" className="col-12 col-sm-3">
                  <img id="pic" src="images/michael.jpg" alt="John Doe"/>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div id="card" className="col-12 col-sm-3">
                <img id="pic" src="images/michael.jpg" alt="John Doe"/>
                </div>
                <div id="bio" className="col-12 col-sm-9">
                  <h1>Michael Pope</h1>
                  <p>Hellooooooooooooooooooooooooooooooooo</p>
                </div>
              </div>
            </div>
            <br/>
            <div className="container-fluid">
              <div className="row">
                <div id="bio" className="col-12 col-sm-9">
                  <h1>Michael Pope</h1>
                  <p>Hellooooooooooooooooooooooooooooooooo</p>
                </div>
                <div id="card" className="col-12 col-sm-3">
                  <img id="pic" src="images/michael.jpg" alt="John Doe"/>
                </div>
              </div>
            </div>
        </div>
      )
    }
}

export default Stylist;