import React, { Component } from 'react';
import '../../styles/styles.css';
import BlogButton from '../Buttons/BlogButton.js'
import GuestBookButton from '../Buttons/GuestBookButton.js'
import HomeButton from '../Buttons/HomeButton.js'
import PortfolioButton from '../Buttons/PortfolioButton.js'
import ResumeButton from '../Buttons/ResumeButton.js'

class Portfolio extends Component {
  constructor() {
    super();

  }



  render() {
    return (
      <div className="bodyWrapper2">
      <div className="bodyWrapper">
        

        <div className="imgContainer">
          <a href={"http://ethan.jarrell.webdeveloper.soundcloud.surge.sh/"}>
          <div className="noiseplayer">
            <img className="noiseplayer" alt="noiseplayer website image" src={"noiseplayer.png"}/>
            <img className="noiseplayer" alt="noiseplayer website image" src={"noiseplayer2.png"}/>
          </div></a>
          <a href={"https://presentation-maker.herokuapp.com/landing"}><div className="stattracker">
            <img className="stattracker" alt="stattracker website image" src={"talkmaker.png"} />
            <img className="stattracker" alt="stattracker website image" src={"talkmaker.png"} />
          </div></a>
        <a href={"https://draynori3.herokuapp.com/home"}>
          <div className="draynori">
            <h3>draynori (coming soon)</h3>
            <img className="draynori" alt="draynori website image" src={"draynori.png"} />
          </div>
        </a>
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

export default Portfolio;
