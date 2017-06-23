import React, { Component } from "react";

import Testimonials from "./Testimonials";
import PartnersPanel from "./PartnersPanel";
import SchoolsPanel from "./SchoolsPanel";

import dataJSON from "../json/data.json";
import headers from "../json/headers.json";
import homepage_video from "../videos/homepage_video.mp4";
import videoPoster from "../images/video_poster.jpg";

import "../scss/Home.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <HomeVideo />
        <div className="homepage page">

          <div className="intro_blurb">
            {dataJSON.introBlurb}
          </div>

          <Testimonials />

          <div className="homepage_panel container">
            <h1 className="centered_header">Our Partners</h1>
            <PartnersPanel />
            <p>In addition, The Coding School is proud to have been awarded the Brown Venture Launch Fund from Brown University Social Innovation Initiative.</p>
          </div>

          <div className="homepage_panel container">
            <h1 className="centered_header">School Districts We Have Coding Programs In</h1>
            <SchoolsPanel />
          </div>

        </div>
      </div>
    );
  }
}

class HomeVideo extends Component {
  render() {
    return (
      <div id="video">
        <div className="video_wrapper">
          <video autoPlay muted loop playsInline poster={videoPoster}>
            <source src={homepage_video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="video_overlay_text">
            <div className="text_boxes wow fadeInDown">
              <span className="typedjs_title title">{headers.homepage.title}</span>
              <span className="typedjs_subtitle subtitle">{headers.homepage.description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
