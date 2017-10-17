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
        <div className="portfoliodescContainer">
          <h5>In the Nimbo-Stratus project, I created a site where you could search for and play music by connecting to, and pulling data from the soundcloud API.</h5>
          <h5 className="h5">This project was a personal project, which I designed to help me organize talks and presentations.  The app has a couple of different API calls, to try and make resources for planning a presentation available in the app, and also keeps all the presentations organized and easy to use.</h5>
          <h5>In the draynori project is a educational game for kids, which teaches programming concepts, and uses a ruby on rails back end, and a react front end.</h5>
        </div>

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
