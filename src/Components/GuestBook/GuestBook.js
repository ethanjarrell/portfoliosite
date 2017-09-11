import React, { Component } from 'react';
import '../../styles/styles.css';
import BlogButton from '../Buttons/BlogButton.js'
import GuestBookButton from '../Buttons/GuestBookButton.js'
import HomeButton from '../Buttons/HomeButton.js'
import PortfolioButton from '../Buttons/PortfolioButton.js'
import ResumeButton from '../Buttons/ResumeButton.js'
import SignatureCanvas from 'react-signature-canvas'
const axios = require('axios');

class GuestBook extends Component {
  constructor(props) {
    super(props);

    this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);

    this.state = {
      SignatureOfGuest: {},

    };
}

handleSignatureOfGuest(event) {
    this.setState({ SignatureOfGuest: event.target.value });
  }

  addToGuestBook = event => {
    event.preventDefault();
    this.setState({
      SignatureOfGuest: event.target.value,
});


      axios.post('https://ancient-sea-87841.herokuapp.com/signatures', {
        SignatureOfGuest: this.state.SignatureOfGuest,
      })
    .then(response => {
      console.log(response, 'Signature added!');
    })
    .catch(err => {
      console.log(err, 'Signature not added, try again');
    });

    this.setState({
      SignatureOfGuest: {},
    });
};


  render() {
    return (
      <div className="bodyWrapper2">
      <div className="bodyWrapper">
        <div className="guestbookDiv">

        <form className="guestBookForm">

         <SignatureCanvas
           onChange={this.handleSignatureOfGuest}
           name="SignatureOfGuest"
           className="inputForm"
           penColor='black'
           value={this.state.SignatureOfGuest}
           placeholder="Page 1 Title:"
           canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />

           <button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
              >
            Add Signature to Guestbook<i className="" aria-hidden="true" />
            </button>

        </form>

        </div>
        <div className="buttonContainer">
          <HomeButton className="link1" />
          <PortfolioButton className="link1" />
          <ResumeButton className="link1" />
          <BlogButton className="link1" />
          <GuestBookButton className="link1" />
        </div>
      </div>
    </div>
    )
  }

}


export default GuestBook;
