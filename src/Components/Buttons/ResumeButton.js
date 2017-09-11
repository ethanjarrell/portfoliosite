import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResumeButton extends Component {

    render() {
        return (
          <div className="computerresuDiv">

          <Link className="link resumeb" to="/Resume">

            <img className="buttonimg" alt="noiseplayer website image" src={"rb1.png"}/>
            <img className="buttonimg" alt="noiseplayer website image" src={"rb2.png"}/>

          </Link>

          </div>
        )
    }
};

export default ResumeButton;
