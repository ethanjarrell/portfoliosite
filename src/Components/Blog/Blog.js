import React, { Component } from 'react';
import '../../styles/styles.css';
import BlogButton from '../Buttons/BlogButton.js'
import GuestBookButton from '../Buttons/GuestBookButton.js'
import HomeButton from '../Buttons/HomeButton.js'
import PortfolioButton from '../Buttons/PortfolioButton.js'
import ResumeButton from '../Buttons/ResumeButton.js'

class Blog extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div className="bodyWrapper2">
      <div className="bodyWrapper">
        <div className="imgContainer3">

          <div className="blogcontainer4">
          <a href={"https://medium.com/@ethan.jarrell"}><div className="blog2">
            <img className="blog2img" alt="blog website image" src={"blog2.png"} />
            <img className="blog2img" alt="blog website image" src={"blog3.png"} />
          </div></a>


        <a href={"https://twitter.com/jarrell_ethan?lang=en"}><div className="twitter">
          <img className="twitterimg" alt="blog website image" src={"twitter.png"} />
          <img className="twitterimg" alt="blog website image" src={"twitter2.png"} />
          </div></a>
      </div>

      <div className="blogcontainer5">
        <a href={"https://medium.com/@ethan.jarrell"}><div className="linkedin">
          <img className="linkedinimg" alt="blog website image" src={"linkedin.png"} />
          <img className="linkedinimg" alt="blog website image" src={"linkedin2.png"} />
          </div></a>

          <a href={"https://github.com/ethanjarrell"}><div className="linkedin">
            <img className="linkedinimg" alt="blog website image" src={"github.png"} />
            <img className="linkedinimg" alt="blog website image" src={"github2.png"} />
            </div></a>
            </div>
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

export default Blog;
