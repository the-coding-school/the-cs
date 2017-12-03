import './ProgramElementIcon.scss';
import React from 'react';

export default class ProgramElementIcon extends React.Component {
    render () {
        const {
            iconSrc,
            desc
        } = this.props;

        return (

            <div className="program_element_icon">
                <img className="element_icon" src={iconSrc} alt={desc}/>
                <div className="element_description">
                {desc}
                </div>
            </div>

        );

    }
}