import React from 'react';
import "./Services.css";

class Services extends React.Component {
    render() {
      return (
        <div class="container">
          <div className="Header">
          <h2>Services!</h2>
          <p>All services are priced a la carte.</p>            
          </div>
          <table class="table table-striped table-dark">
            <thead>
              <tr>
                <th>Service</th>
                <th></th>
                <th>Starting Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Womens Cut</td>
                <td></td>
                <td>$40</td>
              </tr>
              <tr>
                <td>Mens Cut</td>
                <td></td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Childrens Cut</td>
                <td></td>
                <td>$25</td>
              </tr>
              <tr>
                <td>Full Foil</td>
                <td></td>
                <td>$110</td>
              </tr>
              <tr>
                <td>Partial Foil</td>
                <td></td>
                <td>$90</td>
              </tr>
              <tr>
                <td>Color Gloss</td>
                <td></td>
                <td>$60</td>
              </tr>
              <tr>
                <td>Base</td>
                <td></td>
                <td>$60</td>
              </tr>
              <tr>
                <td>Balayage</td>
                <td>Consultation Recommended</td>
                <td>$120</td>
              </tr>
              <tr>
                <td>Ombre</td>
                <td></td>
                <td>$130</td>
              </tr>
              <tr>
                <td>Special Occasion Styles</td>
                <td></td>
                <td>$75</td>
              </tr>
              <tr>
                <td>Shampoo-Blowdry</td>
                <td></td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Extensions</td>
                <td>Consultation Required</td>
                <td>Quoted at Consultation</td>
              </tr>
              <tr>
                <td>Color Correction</td>
                <td></td>
                <td>$100 Hour</td>
              </tr>
              <tr>
                <td>Perm</td>
                <td>Consultation Recommended</td>
                <td>$85</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Facial Waxing</td>
                <td></td>
                <td>$15</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Brow Specialist</td>
                <td></td>
              </tr>
              <tr>
                <td>Brow Tinting</td>
                <td></td>
                <td>$15</td>
              </tr>
              <tr>
                <td>Shaping</td>
                <td></td>
                <td>$15</td>
              </tr>
              <tr>
                <td>Lash Tinting</td>
                <td></td>
                <td>$25</td>
              </tr>

              
              


            </tbody>
          </table>
        </div>
                
      )
    }
}

export default Services;