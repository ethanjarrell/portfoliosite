import React, { Component } from 'react';
import '../../styles/styles.css';
import BlogButton from '../Buttons/BlogButton.js'
import GuestBookButton from '../Buttons/GuestBookButton.js'
import HomeButton from '../Buttons/HomeButton.js'
import PortfolioButton from '../Buttons/PortfolioButton.js'
import ResumeButton from '../Buttons/ResumeButton.js'

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="bodyWrapper2">
      <div className="bodyWrapper">
        <div className="imgContainer2">
          <img className="BioGraphic" src={"buildthings.png"} />
          <img className="computer" src={"computer.png"} />
        </div>
        <div className="buttonContainer">
          <HomeButton />
          <PortfolioButton />
          <ResumeButton />
          <BlogButton />
          <GuestBookButton />
        </div>
      </div>
    </div>
    )
  }

}

export default Home;
