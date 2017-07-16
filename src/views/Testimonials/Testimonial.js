import React from 'react';

export default class Testimonial extends React.Component {
  render() {

    const {
      imageSrc,
      quote,
      author,
      context
    } = this.props;

    return (
        <div className='testimonial_wrapper'>
          <div className='testimonial'>
            <div className='testimonial_image'>
              { imageSrc && <img src={imageSrc} alt='testimonial' /> }
            </div>
            <div className='testimonial_text'>
              <div className='testimonial_quote'>
                {'"' + quote + '"'}
              </div>
              <div className='testimonial_author'>
                {author.toUpperCase()}
              </div>
              <div className='testimonial_context'>
                {context}
              </div>
            </div>
          </div>
        </div>
    );
  }
}
