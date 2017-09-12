import React, { Component } from 'react';
import BlogButton from '../Buttons/BlogButton.js'
import GuestBookButton from '../Buttons/GuestBookButton.js'
import HomeButton from '../Buttons/HomeButton.js'
import PortfolioButton from '../Buttons/PortfolioButton.js'
import ResumeButton from '../Buttons/ResumeButton.js'

class GuestNames extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: "",
    };

  }

  componentDidMount() {

    fetch('https://ancient-sea-87841.herokuapp.com/api/signatures')
    .then(results => {
      return results.json();
    }).then(data => {
      let messages =
      data.map((msg) => {
        return(
          <div key={msg.results}>
            <h2>{msg.guestSignature}</h2>
            <h3>{msg.message}</h3>
          </div>
        )
      })
      this.setState({messages: messages});
      console.log("state", this.state.messages);
    })
  }

    render() {
      return (

        <div className="guestdataContainer">
          {this.state.messages}
        </div>

      )
    }
  }

    export default GuestNames;
