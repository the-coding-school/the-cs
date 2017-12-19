import './FeaturedTeamPanel.scss';

import React from 'react';
import MemberImage from 'components/MemberImage';
import StatBlock from 'components/StatBlock';

import panelData from './FeaturedTeamData';

export default class FeaturedTeamPanel extends React.Component {
  render() {
    return (
      <div className='featured-team-panel'>
        <div className='image-grid'>
            {
              panelData.teamMembers.map((member)=>{
                return (
                  <MemberImage key={member.name} isSquare={true} images={member.images}/>
                );
              })
            }
        </div>
        <div className='info'>
          <div className='spiel'>
            {panelData.spiel}
          </div>
          <div className='stats-grid'>
            {
              panelData.stats.map(stat => (
                <StatBlock
                  key={stat.title}
                  title={stat.title}
                  figure={stat.figure}
                />
              ))
            }
          </div>
          <a className='meet-the-team button' href='/team'>
            Meet our incredible team
          </a>
        </div>
      </div>
    );
  }
}
