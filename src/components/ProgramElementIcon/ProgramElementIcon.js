// @flow

import './ProgramElementIcon.scss';
import React from 'react';

export default class ProgramElementIcon extends React.Component {
    render () {
        const {
        title,
		icon
        } = this.props;

        return (

            <div className="program_element_icon">
                <div className="element_icon">
			        {icon}
		        </div>
                <div className="element_description">
                    {title}
                </div>
            </div>

        );

    }
}
