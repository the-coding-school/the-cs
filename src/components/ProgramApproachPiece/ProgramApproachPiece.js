/*eslint-disable no-extra-semi */
import './ProgramApproachPiece.scss';
import React from 'react';

export default class ProgramApproachPiece extends React.Component {
    render () {
        const {
		        icon,
            	title,
            	desc,
            	n
        } = this.props;

        return (

            <div className='program_approach_piece'>
                <div className='section A'>
                    <div className='icon'>
			{icon}
		    </div>
                    <div className='title'>
                        {n}) {title}
                    </div>
                </div>
                <div className='section B'>
                    {desc}
                </div>
            </div>

        );

    }
}
