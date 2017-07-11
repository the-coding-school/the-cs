import React from 'react';
import SlickPanel from '../../components/SlickPanel';
import Testimonial from './Testimonial';
import testimonialsData from './TestimonialsData';
import './Testimonials.scss';


export default class Testimonials extends React.Component {
  render() {
    const slickOpt = {
      autoplay: true,
      autoplaySpeed: 8000,
      dots: true,
      pauseOnHover: true,
      adaptiveHeight: true
    }

    return (
      <div className='testimonials_wrapper'>
        <div className='testimonials'>
          <SlickPanel options={slickOpt}>
            {
              testimonialsData.map((t, i) => (
                <Testimonial
                  key={'testimonial-' + i}
                  image={t.image}
                  quote={t.quote}
                  author={t.author}
                  context={t.context}
                />
              ))
            }
          </SlickPanel>
        </div>
      </div>
    );
  }
}
