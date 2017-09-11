import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogButton extends Component {

    render() {
        return (
          <div className="computerblogDiv">

          <Link className="link blogb" to="/Blog">

            <img className="buttonimg" alt="noiseplayer website image" src={"bb1.png"}/>
            <img className="buttonimg" alt="noiseplayer website image" src={"bb2.png"}/>

          </Link>

          </div>
        )
    }
};

export default BlogButton;
