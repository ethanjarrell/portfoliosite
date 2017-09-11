import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GuestBookButton extends Component {

    render() {
        return (
          <div className="computerguestDiv">

          <Link className="link guestb" to="/GuestBook">

            <img className="buttonimg" alt="noiseplayer website image" src={"gb1.png"}/>
            <img className="buttonimg" alt="noiseplayer website image" src={"gb2.png"}/>

          </Link>

          </div>
        )
    }
};

export default GuestBookButton;
