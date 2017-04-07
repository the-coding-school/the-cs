import React, { Component } from 'react';
import demovideo from "../videos/demovideo.mp4";
import viterbiLogo from "../images/partners/viterbi.png";
import uscStemLogo from "../images/partners/stem.png";
import uscJointLogo from "../images/partners/uscjoint.png";
import hawthorneLogo from "../images/partners/hawthorne.png";
import schoolIcon from "../images/school.png";
import studentIcon from "../images/student.png";
import groupIcon from "../images/group.png";
import classImage1 from "../images/classroom/1.jpg";
import classImage2 from "../images/classroom/2.jpg";
import images from "../json/images.json";
import { TitledParagraphs } from "./Skeleton";
import '../scss/App.scss';
import '../scss/Home.scss';
import '../css/animate.css';

import content from '../json/about.json'

class Home extends Component {
  render() {
    const partners = [];
    const introParagraphs = [
      "The Coding School is a 501c3 non-profit that teaches computer programming to elementary and middle school students. We believe that learning how to code is like learning a foreign language, and the earlier students begin learning this new way of thinking, the easier it becomes.",
      "We currently offer the Pre-Coding and Coding I classes for K-8 students, suitable for various levels of experience with technology and computer science."
    ];

    return (
      <div className="App">
        <Video />
        <div className="home_page container">

          <TitledParagraphs title="The Coding School" paragraphs={introParagraphs} />
          <hr />
          <OurImpact />
          <hr />
          <ImagePanel />
          <hr/>
          <OurPartners partners={partners} />

        </div>
      </div>
    );
  }
}

class Video extends Component {
  render() {
    return (
      <div id="video">
        <video autoPlay muted loop>
          <source src={demovideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

class IntroBlurb extends Component {
  render() {
    return (
      <div className="container" id="intro_blurb">
        <div className="large_p">
          {this.props.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <ActionButton text="Sign up now!"/>
      </div>
    );
  }
}

class PhotoAlbum extends Component {
  render() {

    const polaroids = images.images.map(function(image) {
      return (
        <a href={image.link} className="medium polaroid">
          <img src={image.src} alt={image.name} />{image.description}
        </a>
      );
    });

    return (
      <div className="photo-album">
        {polaroids}
      </div>
    );
  }
}

class ImagePanel extends Component {
  render() {

    return (
      <div className="image_panel">
        <div className="flex shrink-2">
          <img src="http://www.placehold.it/400x400" />
          <img src="http://www.placehold.it/400x400" />
        </div>
        <div>
          <img src="http://www.placehold.it/820x400" />
        </div>
        <div className="flex shrink-2">
          <img src="http://www.placehold.it/400x400" />
          <img src="http://www.placehold.it/400x400" />
        </div>
      </div>
    );
  }
}

class OurImpact extends Component {
  render() {

    return (
      <div className="container">
        <div className="our_impact flex">
          <Statistic imageSrc={schoolIcon} number="16" description="schools" />
          <Statistic imageSrc={studentIcon} number="1,800" description="students" />
          <Statistic imageSrc={groupIcon} number="44%" description="minority students" />
        </div>
      </div>
    );
  }
}

class Statistic extends Component {
  render() {
    const p = this.props;
    return (
      <div className="statistic">
        <img src={p.imageSrc} width="80" height="80" />
        <h2>{p.number}</h2>
        <p>{p.description}</p>
      </div>
    );
  }
}

class SchoolVisualization extends Component {
  render() {

    var schoolArray = [];
    var schoolImage = <img src={schoolIcon} width="50" height="50"/>
    for (var i = 0; i < 16; i++) {
      schoolArray.push(schoolImage);
    }
    return (
      <div className="wow bounceInLeft">
        {schoolArray}
      </div>
    );
  }
}

class Testimonials extends Component {
  render() {

    return (
      <div className="container">
        <h1 className="title_sm">Testimonials</h1>
        <div className="our_impact flex flex_wrap">

        </div>
      </div>
    );
  }
}




class OurCourses extends Component {
  render() {

    const courses = this.props.courses;
    const coursesDOM = courses.map((c) =>
      <Course key={c.name} name={c.name} description={c.description}/>
    );

    return (
      <div className="container">
        <h1 className="title">OUR COURSES</h1>
        <div className="our_classes flex flex_wrap">
          {coursesDOM}
        </div>
      </div>
    );
  }
}

class Course extends Component {
  render() {
    return (
      <div className="cell_wrapper">
        <div className="cell">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

class OurPartners extends Component {
  render() {

    const p = this.props.partners;
    const partnersDOM = p.map((p) => {
      return <Partner key={p.name} imageURL={p.image} name={p.name} description={p.description} />
    });

    return (
      <div className="container">
        <h1 className="title">OUR PARTNERS</h1>
        <div className="our_partners flex flex_wrap">
          {partnersDOM}
        </div>
      </div>
    );
  }
}

class Partner extends Component {
  render() {
    return (
      <div className="cell_wrapper">
        <div className="cell partner flex">
          <div className="partner_logo">
            <img alt="partner" width="160" height="160" src={this.props.imageURL}/>
          </div>
          <div className="partner_description">
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

class ActionButton extends Component {
  render() {
    return (
      <div className="flex_center btn btn_inflate">
        <button className="action_button">{this.props.text}</button>
      </div>
    );
  }
}



export default Home;
