import './ProgramApproachPiece.scss';
import React from 'react';

export default class ProgramApproachPiece extends React.Component {
    render () {
        const {
            iconSrc,
            title,
            desc
        } = this.props;

        return (

            <div className='program_approach_piece'>
                <div className='section A'>
                    <img className='icon' src={iconSrc}/>
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