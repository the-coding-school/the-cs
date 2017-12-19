import * as React from 'react';
import './StatBlock.scss';

export default class StatBlock extends React.Component {
    render() {
        
        const {
                title,
                figure
            } = this.props;
        
        return (
        
            <div className='stat-block'>
                <div className='figure'>
                    {figure}
                </div>
                <div className='title'>
                    {title}
                </div>
            </div>
        
        );
    }
}
