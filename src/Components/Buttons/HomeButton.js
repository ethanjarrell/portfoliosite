import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeButton extends Component {

    render() {
        return (
          <div className="computerhomeDiv">

          <Link className="link homeb" to="/">

            <img className="buttonimg" alt="noiseplayer website image" src={"hb1.png"}/>
            <img className="buttonimg" alt="noiseplayer website image" src={"hb2.png"}/>

          </Link>

          </div>
        )
    }
};

export default HomeButton;
