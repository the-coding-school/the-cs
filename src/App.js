import React, { Component } from 'react';
import image1 from "./images/carousel/1.png";
import image2 from "./images/carousel/2.png";
import demovideo from "./videos/demovideo.mp4";
import viterbiLogo from "./images/partners/viterbi.png";
import uscStemLogo from "./images/partners/stem.png";
import uscJointLogo from "./images/partners/uscjoint.png";
import hawthorneLogo from "./images/partners/hawthorne.png";
import './App.css';

class App extends Component {
  render() {

    const sources = [image1, image2];
    const tabs = ["Home", "About Us", "Our Mission",
                  "Teaching Team", "Classes","Get Involved",
                  "Sign Up"];
    const courses = [
      {
        name: "Pre-Coding",
        description: "Computer thinking skills"
      },
      {
        name: "Coding I",
        description: "Coding basics in Python"
      },
      {
        name: "Web Coding I",
        description: "HTML/CSS"
      },
      {
        name: "Web Coding II",
        description: "HTML/CSS continued"
      },
      {
        name: "Javascript I",
        description: "Adding functionality to websites"
      },
      {
        name: "Javascript II",
        description: "Adding even more functionality to websites"
      },
      {
        name: "Unity I",
        description: "Intro to 3D game development"
      },
      {
        name: "Unity II",
        description: "Dive deeper into 3D game development"
      },
    ];
    const partners = [
      {
        "name": "USC Viterbi School of Engineering",
        "image": viterbiLogo,
        "description": "University of Southern California's Viterbi School of Engineering."
      },
      {
        "name": "USC STEM Consortium",
        "image": uscStemLogo,
        "description": "Impacts STEM K-12 educational outcomes aligned with the national STEM career agenda."
      },
      {
        "name": "USC Joint Educational Program",
        "image": uscJointLogo,
        "description": undefined
      },
      {
        "name": "Friends of Hawthorne",
        "image": hawthorneLogo,
        "description": undefined
      }

    ]

    return (
      <div className="App">
        <Navbar name={"The Coding School"} items={tabs} />
        <Video />
        <IntroBlurb />
        <OurCourses courses={courses}/>
        <OurPartners partners={partners}/>
        <Footer />
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    var items = this.props.items;
    var navItems = items.map((i) => <li key={i} className="nav_item">{i.toUpperCase()}</li>)

    return (
      <nav className="navbar flex">
          <h1 className="navbar_logo">{this.props.name}</h1>
          <ul className="flex">{navItems}</ul>
      </nav>
    );
  }
}

class Video extends Component {
  render() {
    return (
      <video autoPlay muted loop>
        <source src={demovideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    );
  }
}

class ImageCarousel extends Component {

  constructor(props) {
    super(props);

    const images = this.props.sources;
    this.state = {image: images[0]};
    var i = 1;

    window.setInterval(function() {
      this.setState({image: images[i]});
      (i === images.length - 1) ? (i = 0) : (i++);
    }.bind(this), this.props.delay);
  }

  render() {
    return (
      <div className="image_carousel">
        <img alt="Slideshow" src={this.state.image}></img>
      </div>
    );
  };
}

class IntroBlurb extends Component {
  render() {
    return (
      <div className="intro_blurb container">
        <div className="description">
          <p><span className="first_letter">W</span>e are an after-school educational program that teaches computer science to elementary and middle school students.</p>
          <p>We currently offer the Pre-Coding and Coding I classes for K-8 students, suitable for various levels of experience with technology and computer science.</p>
        </div>
        <ActionButton text="Sign up now!"/>
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
            <img width="160" height="160" src={this.props.imageURL}/>
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
      <div className="flex_center">
        <button className="action_button">{this.props.text}</button>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className='footer container'>
        <hr/>
        <footer>Copyright © 2014 - All Rights Reserved - The Coding School</footer>
      </div>
    );
  }
}

export default App;
