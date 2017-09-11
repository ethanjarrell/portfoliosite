import React, { Component } from 'react';
import '../../styles/styles.css';
import BlogButton from '../Buttons/BlogButton.js'
import GuestBookButton from '../Buttons/GuestBookButton.js'
import HomeButton from '../Buttons/HomeButton.js'
import PortfolioButton from '../Buttons/PortfolioButton.js'
import ResumeButton from '../Buttons/ResumeButton.js'

class Resume extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="bodyWrapper2">
      <div className="bodyWrapper">
        <div className="imgContainer2">
          <div className="resume">
          <a className="resumelink" href="https://trello-attachments.s3.amazonaws.com/59760c1a3f23bc9fd3ff70cb/598461886e3249f56bd7a888/0ad4b10c009992cd1a0fb1b77735e3f3/Ethan_Jarrell_Resume_Aug_2017.pdf">
          <img className="ResumeGraphic" src={"resume2.png"} />
          <img className="ResumeGraphic" src={"resume3.png"} />
        </a>
        </div>
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

export default Resume;
