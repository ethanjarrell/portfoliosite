import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioButton extends Component {

    render() {
        return (
          <div className="computerportDiv">

          <Link className="link portfoliob" to="/Portfolio">

            <img className="buttonimg" alt="noiseplayer website image" src={"pb1.png"}/>
            <img className="buttonimg" alt="noiseplayer website image" src={"pb2.png"}/>

          </Link>

          </div>
        )
    }
};

export default PortfolioButton;
