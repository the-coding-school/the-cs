import React from 'react';
import SlickPanel from '../../components/SlickPanel';
import Testimonial from './Testimonial';
import './Testimonials.scss';
import testimonials from './testimonials.json';

export default class Testimonials extends React.Component {
  render() {
    const slickOpt = {
      autoplay: true,
      autoplaySpeed: 8000,
      dots: true,
      pauseOnHover: true,
      adaptiveHeight: true
    }
    const testimonialsDOM = testimonials.map(function(t, i) {

      const imagePath = process.env.PUBLIC_URL + '/images/testimonials/' + t.imageName;
      const imageSrc = (t.imageName === '') ? null : imagePath;

      return (
        <Testimonial
          key={'testimonial-' + i}
          imageSrc={imageSrc}
          quote={t.quote}
          author={t.author}
          context={t.context}/>
      );
    })

    return (
      <div className='testimonials_wrapper'>
        <div className='testimonials'>
          <SlickPanel children={testimonialsDOM} options={slickOpt}/>
        </div>
      </div>
    );
  }
}
