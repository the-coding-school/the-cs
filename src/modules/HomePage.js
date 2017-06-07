import React, { Component } from 'react';
import { Link } from 'react-router'
import homepage_video from "../videos/homepage_video.mp4";
import { TitledParagraphs, TitledContent, LinkButton, SectionHeader } from "./Skeleton";
import dataJSON from "../json/data.json";
import Testimonials from "./Testimonials";
import { PartnersPanel } from "./Partners";
import { SchoolsPanel } from "./Schools";
import '../scss/Home.scss';
import videoPoster from "../images/video_poster.jpg";
import $ from 'jquery';

class HomePage extends Component {
  render() {
    const miP = dataJSON.paragraphs.mainIntro;

    const bringcodingLink = <LinkButton text="Bring coding to your school!"> <Link to={"/sign-up"} /> </LinkButton>

    return (
      <div className="App">
        <HomeVideo />
        <div className="homepage page">
          <IntroBlurb />
          <Testimonials />
          <div className="homepage_panels">
            <div className="homepage_panel_wrapper">
              <div className="homepage_panel">
                <h1 className="centered_header">Our Partners</h1>
                <PartnersPanel />
                <p>In addition, The Coding School is proud to have been awarded the Brown Venture Launch Fund from Brown University Social Innovation Initiative.</p>
              </div>
            </div>
            <div className="homepage_panel_wrapper">
              <div className="homepage_panel">
                <h1 className="centered_header">Schools We Teach At</h1>
                <SchoolsPanel />
              </div>
            </div>
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
              <span className="typedjs_title title">{dataJSON.headers.homepage.title}</span>
              <span className="typedjs_subtitle subtitle">{dataJSON.headers.homepage.description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class IntroBlurb extends Component {
  render() {
    return (
      <div className="intro_blurb">
        {dataJSON.introBlurb}
      </div>
    );
  }
}

class BringCodingButton extends Component {
  render() {
    return (
      <div className="bring_coding_button">
        <Link to={"/sign-up"}>
          <LinkButton text="Bring coding to your school!" />
        </Link>
      </div>
    );
  }
}

export default HomePage;
