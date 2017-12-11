import './ProgramApproachPiece.scss';
import React from 'react';

export default class ProgramApproachPiece extends React.Component {
    render () {
        const {
		icon,
            	title,
            	desc
        } = this.props;

        return (

            <div className='program_approach_piece'>
                <div className='section A'>
                    <div className='icon'>
			{icon}
		    </div>
                    <div className='title'>
                        {title}
                    </div>
                </div>
                <div className='section B'>
                    {desc}
                </div>
            </div>

        );

    }
}
