import React, { Component } from 'react';
import { Link } from 'react-router'
import demovideo from "../videos/demovideo.mp4";
import { TitledParagraphs, TitledContent, LinkButton } from "./Skeleton";
import dataJSON from "../json/data.json";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import '../scss/App.scss';
import '../scss/Home.scss';
import $ from 'jquery';

class HomePage extends Component {
  render() {
    const miP = dataJSON.paragraphs.mainIntro;

    const bringcodingLink = <LinkButton text="Bring coding to your school!"> <Link to={"/sign-up"} /> </LinkButton>

    return (
      <div className="App">
        <HomeVideo />
        <div className="homepage page">
          <TitledParagraphs title={miP.title} paragraphs={miP.paragraphs} />
          <Testimonials />
          <Partners />
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
          <video autoPlay muted loop playsInline>
            <source src={demovideo} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
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
