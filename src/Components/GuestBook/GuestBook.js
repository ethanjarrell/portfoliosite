import React, { Component } from 'react';
import '../../styles/styles.css';
import BlogButton from '../Buttons/BlogButton.js'
import GuestBookButton from '../Buttons/GuestBookButton.js'
import HomeButton from '../Buttons/HomeButton.js'
import PortfolioButton from '../Buttons/PortfolioButton.js'
import ResumeButton from '../Buttons/ResumeButton.js'
import GuestNames from './GuestNames.js'
const axios = require('axios');

class GuestBook extends Component {
  constructor(props) {
    super(props);

    this.handleSignatureOfGuest = this.handleSignatureOfGuest.bind(this);
    this.handleMessageofGuest = this.handleMessageofGuest.bind(this);

    this.state = {
      SignatureOfGuest: "",
      MessageofGuest: "",
    };
}

handleSignatureOfGuest(event) {
    this.setState({ SignatureOfGuest: event.target.value });
  }
  handleMessageofGuest(event) {
      this.setState({ MessageofGuest: event.target.value });
    }

  addToGuestBook = event => {
    event.preventDefault();
    this.setState({
      SignatureOfGuest: event.target.value,
      MessageofGuest: event.target.value,
});


      axios.post('https://ancient-sea-87841.herokuapp.com/api/signatures', {
        SignatureOfGuest: this.state.SignatureOfGuest,
        MessageofGuest: this.state.MessageofGuest,
      })
    .then(response => {
      console.log(response, 'Signature added!');
    })
    .catch(err => {
      console.log(err, 'Signature not added, try again');
    });

    this.setState({
      SignatureOfGuest: "",
      MessageofGuest: "",
    });
};


  render() {
    return (
      <div className="bodyWrapper2">
      <div className="bodyWrapper">
        <div className="guestbookDiv">

        <form className="guestBookForm">
          <label className="guestlabel">Tell me your name</label>

         <input
           onChange={this.handleSignatureOfGuest}
           name="SignatureOfGuest"
           className="NameinputForm"
           value={this.state.SignatureOfGuest}
           placeholder="Enter your name"
            />

          <label className="guestlabel">Write me a nice message</label>

          <textarea
              onChange={this.handleMessageofGuest}
              name="MessageofGuest"
              className="MessageinputForm"
              value={this.state.MessageofGuest}
              placeholder="Type a message"
               />

           <button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
              >
            Submit to Guestbook<i className="GuestBookButton2" aria-hidden="true" />
            </button>

        </form>

        </div>

        <GuestNames />

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
