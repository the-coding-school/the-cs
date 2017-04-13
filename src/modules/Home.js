import React, { Component } from 'react';
import demovideo from "../videos/demovideo.mp4";
import { TitledParagraphs } from "./Skeleton";
import dataJSON from "../json/data.json";
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../scss/Home.scss';
import '../css/animate.css';
import '../css/slick.css';
import '../css/slick-theme.css';
import $ from 'jquery';
import slick from 'slick-carousel';

class Home extends Component {
  render() {
    const partners = dataJSON.partners;
    const introParagraphs = dataJSON.introParagraphs;
    const partnersParagraphs = dataJSON.partnersParagraphs;
    return (
      <div className="App">
        <Video />
        <div className="home page container">

          <TitledParagraphs title="The Coding School" paragraphs={introParagraphs} />
          <hr />

          <Testimonials />
          <hr />
          <ImagePanel />
          <hr/>
          <div>
          <TitledParagraphs title="Our Partners" paragraphs={partnersParagraphs} />
          </div>
          <PartnersPanel />
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

class OurImpact extends Component {
  render() {

    const schoolIcon = process.env.PUBLIC_URL + "/images/school.png";
    const studentIcon = process.env.PUBLIC_URL + "/images/student.png";
    const groupIcon = process.env.PUBLIC_URL + "/images/group.png";
    const impact = dataJSON.ourImpact;
    const impactDOM = impact.map(function(i) {
      return <TitledParagraphs key={i.title} title={i.title} paragraphs={i.paragraphs} />
    })
    return (
      <div className="our_impact">
        {impactDOM}
        <hr/>
        <div className="statistics flex">
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
        <img alt="statistic" src={p.imageSrc} width="80" height="80" />
        <h2>{p.number}</h2>
        <p>{p.description}</p>
      </div>
    );
  }
}

class Testimonials extends Component {
  render() {
    const slickOpt = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
    }
    const testimonialsDOM = dataJSON.testimonials.map(function(t) {
      const imageSrc = process.env.PUBLIC_URL + t.imageSrc;
      return (
        <Testimonial key={t.author} imageSrc={imageSrc} quote={t.quote} author={t.author} />
      );
    })

    return (
      <div className="testimonials">
        <SlickPanel children={testimonialsDOM} options={slickOpt}/>
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
            <div className="testimonial_quote">
              <p>{'"' + this.props.quote + '"'}</p>
            </div>
            <div className="testimonial_author">
              {this.props.author.toUpperCase()}
            </div>
          </div>
        </div>
    );
  }
}

class PartnersPanel extends Component {
  render() {
    const partnersDOM = dataJSON.partners.map((p) => {
      const imageSrc = process.env.PUBLIC_URL + "/images/partners/" + p.imageSrc;
      return <Partner key={p.name} imageSrc={imageSrc} name={p.name} description={p.description} link={p.link}/>
    });

    return (
      <div className="partners flex flex_wrap">
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
        <div className="partner">
          <img src={p.imageSrc} alt="partner" width="180" height="180" />
          <div className="partner_description"><p>{p.name}</p></div>
        </div>
        </a>
      </div>
    );
  }
}



export default Home;
