import './FeaturedTeamPanel.scss';

import React from 'react';
import MemberImage from 'components/MemberImage';
import StatBlock from 'components/StatBlock';

import panelData from './FeaturedTeamData';

export default class FeaturedTeamPanel extends React.Component {
  render() {
    return (
      <div className='featuredTeamPanel'>
        <div className='imageGrid'>
            {
                panelData.teamMembers.map( (member)=>{
                    return (
                        <div key={member.name} className='memberImage'>
                            <MemberImage isSquare={true} images={member.images}/>
                        </div>
                    );
                } )
                
            }
        </div>
        <div className='info'>
            <div className='spiel'>
                {panelData.spiel}
            </div>
            <div className='statsGrid'>
                {panelData.stats.map( (stat)=> {
                    return (
                        
                        <StatBlock key={stat.title} title={stat.title} figure={stat.figure}/>
                        
                    );

                
                })}
            </div>
            <a className='button meet-the-team' href='/team'>
                Meet our incredible team
            </a>
        </div>
      </div>
    );
  }
}