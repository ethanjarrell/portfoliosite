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
          <h5 className="h5">In the Stat-tracker project, I created a dynamic Mongo database with Node express, which is populated through user input, and rendered using mustache.</h5>
          <h5>In the draynori project is a educational game for kids, which teaches programming concepts, and uses a ruby on rails back end, and a react front end.</h5>
        </div>

        <div className="imgContainer">
          <a href={"http://ethan.jarrell.webdeveloper.soundcloud.surge.sh/"}>
          <div className="noiseplayer">
            <img className="noiseplayer" alt="noiseplayer website image" src={"noiseplayer.png"}/>
            <img className="noiseplayer" alt="noiseplayer website image" src={"noiseplayer2.png"}/>
          </div></a>
          <a href={"https://mysterious-sea-17562.herokuapp.com/api/splash"}><div className="stattracker">
            <img className="stattracker" alt="stattracker website image" src={"stattracker.png"} />
            <img className="stattracker" alt="stattracker website image" src={"stattracker2.png"} />
          </div></a>
          <div className="draynori">
            <h3>draynori (coming soon)</h3>
            <img className="draynori" alt="draynori website image" src={"draynori.png"} />
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

export default Portfolio;
