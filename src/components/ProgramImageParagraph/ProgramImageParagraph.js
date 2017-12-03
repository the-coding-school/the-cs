import './ProgramImageParagraph.scss';
import React from 'react';

export default class ProgramImageParagraph extends React.Component {
    render () {
        const {
            imgSrc,
            text
        } = this.props;

        return (

            <div className='program_image_paragraph'>
                <img className='image' src={imgSrc} alt='program element'/>
                <div className='text'>
                    {text}
                </div>
            </div>

        );

    }
}