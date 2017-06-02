import React, { Component } from 'react';
import { SlickPanel } from './Skeleton';
import "../scss/Testimonials.scss";
import dataJSON from '../json/data.json';

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

export default Testimonials;
