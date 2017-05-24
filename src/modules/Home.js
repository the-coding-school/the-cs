import React, { Component } from 'react';
import { Link } from 'react-router'
import demovideo from "../videos/demovideo.mp4";
import { TitledParagraphs, TitledContent, LinkButton } from "./Skeleton";
import dataJSON from "../json/data.json";
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../scss/Home.scss';
import '../css/animate.css';
import '../css/slick.css';
import '../css/slick-theme.css';
import 'slick-carousel';
import $ from 'jquery';


class Home extends Component {
  render() {
    const miP = dataJSON.paragraphs.mainIntro;
    const pP = dataJSON.paragraphs.partnersIntro;
    const bringcodingLink = <LinkButton text="Bring coding to your school!"> <Link to={"/sign-up"} /> </LinkButton>

    return (
      <div className="App">
        <Video />
        <div className="homepage page">
          <TitledParagraphs title={miP.title} paragraphs={miP.paragraphs} />
          <Testimonials />
          <LocationsPanel />
          <TitledParagraphs title={pP.title} paragraphs={pP.paragraphs} />
          <PartnersPanel />
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

class Video extends Component {
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

class ImagePanel extends Component {
  render() {
    const root = process.env.PUBLIC_URL + "/images/classroom/";
    return (
      <div className="image_panel">
        <div className="flex shrink-2">
          <img src={root + "400x400-1.jpg"} alt="placeholder" width="400" height="400" />
          <img src={root + "400x400-2.jpg"} alt="placeholder" width="400" height="400" />
        </div>
        <div>
          <img src={root + "800x400-1.jpg"} alt="placeholder" width="800" height="400" />
        </div>
        <div className="flex shrink-2">
          <img src={root + "400x400-3.jpg"} alt="placeholder" width="400" height="400" />
          <img src={root + "400x400-4.jpg"} alt="placeholder" width="400" height="400" />
        </div>
      </div>
    );
  }
}

class SlickPanel extends Component {
  componentDidMount() {
    $(".slick_panel").slick(this.props.options);
  }

  render() {
    return (
      <div className="slick_panel">
        {this.props.children}
      </div>
    );
  }
}

class Testimonials extends Component {
  render() {
    const slickOpt = {
      autoplay: true,
      autoplaySpeed: 8000,
      dots: true,
      pauseOnHover: true,
      adaptiveHeight: true
    }
    const testimonialsDOM = dataJSON.testimonials.map(function(t) {
      const imageSrc = process.env.PUBLIC_URL + "/images/testimonials/" + t.imageName;
      return (
        <Testimonial key={t.author} imageSrc={imageSrc} quote={t.quote} author={t.author} context={t.context}/>
      );
    })

    return (
      <div className="testimonials_wrapper">
        <div className="testimonials">
          <SlickPanel children={testimonialsDOM} options={slickOpt}/>
        </div>
      </div>
    );
  }
}

class Testimonial extends Component {
  render() {

    return (
        <div className="testimonial_wrapper">
          <div className="testimonial">
            <div className="testimonial_image">
              <img src={this.props.imageSrc} alt="testimonial" />
            </div>
            <div className="testimonial_text">
              <div className="testimonial_quote">
                {'"' + this.props.quote + '"'}
              </div>
              <div className="testimonial_author">
                {this.props.author.toUpperCase()}
              </div>
              <div className="testimonial_context">
                {this.props.context}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

class LocationsPanel extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class PartnersPanel extends Component {

  render() {

    function sortPartners(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }

    const partnersDOM = dataJSON.partners.sort(sortPartners).map((p) => {
      const imageSrc = process.env.PUBLIC_URL + "/images/partners/" + p.imageName;
      return <Partner key={p.name} imageSrc={imageSrc} name={p.name} description={p.description} link={p.link}/>
    });

    return (
      <div className="partners">
        {partnersDOM}
      </div>
    );
  }
}

class Partner extends Component {
  render() {
    const p = this.props;
    return (
      <div className="partner_wrapper">
        <a href={p.link}>
        <div className="partner wow fadeIn">
          <img src={p.imageSrc} alt="partner" width="180" height="180" />
          <div className="partner_description"><p>{p.name}</p></div>
        </div>
        </a>
      </div>
    );
  }
}



export default Home;
