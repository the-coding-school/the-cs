import React from 'react';

export default class Testimonial extends React.Component {
  render() {
    return (
        <div className='testimonial_wrapper'>
          <div className='testimonial'>
            <div className='testimonial_image'>
              <img src={this.props.imageSrc} alt='testimonial' />
            </div>
            <div className='testimonial_text'>
              <div className='testimonial_quote'>
                {'"' + this.props.quote + '"'}
              </div>
              <div className='testimonial_author'>
                {this.props.author.toUpperCase()}
              </div>
              <div className='testimonial_context'>
                {this.props.context}
              </div>
            </div>
          </div>
        </div>
    );
  }
}
