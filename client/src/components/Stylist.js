import React from 'react';

class Stylist extends React.Component {
    render() {
      return (
        <div>
            <div className="media border p-3">
              <img src="images/salonhome.png" alt="John Doe" className="mr-3 mt-3 rounded-circle" />
              <div className="media-body">
                <h4>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
                <p>Lorem ipsum...</p>
              </div>
            </div>

            <div class="media">
              <img src="images/salonhome.png" class="align-self-center mr-3" />
              <div class="media-body">
                <h4>Media Middle</h4>
                <p>Lorem ipsum...</p>
              </div>
            </div>

        </div>
      )
    }
}

export default Stylist;