import React from 'react';
import "./Home.css";

class Services extends React.Component {
    render() {
      return (
        <div class="container">
          <h2>Services!</h2>
          <p>All services are priced a la carte.</p>            
          
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Service</th>
                <th></th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
                
      )
    }
}

export default Services;