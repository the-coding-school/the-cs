import React from 'react';
import PageHeader from 'components/PageHeader';

import MemberCard from './MemberCard';
import TeamSection from './TeamSection';

import team from './team.json';
import headerImage from './TeamPage.jpg';
import pageData from './TeamPage.json';

export default class TeamPage extends React.Component {
  render() {

    function getMemberID(m) { return m.name.first + '_' + m.name.last; }

    function sortMembers(a, b) {
      if (getMemberID(a) < getMemberID(b)) return -1;
      if (getMemberID(a) > getMemberID(b)) return 1;
      return 0;
    }

    const header = pageData.header;

    return (
      <div className='App'>
        <PageHeader image={headerImage} title={header.title} description={header.description} />
        <div className='teampage page'>
          <div className='container'>
            <div className='team_founder team_section'>
              <h1 className='team_section_title'>The Founder</h1>
              <MemberCard
                modal={false}
                onClick={null}
                name={team.founder.name.first + " " + team.founder.name.last}
                memberID={team.founder.name.first[0].toLowerCase() + '_' + team.founder.name.last.toLowerCase()}
                position={team.founder.position}
                description={team.founder.description}
                blurb={team.founder.blurb}
                college={team.founder.college}
                links={team.founder.links}
              />
            </div>

            <TeamSection
              teamType='team_heads'
              title='Team Heads'
              members={team.teamLeads.sort(sortMembers)}
              showFullName={false}
            />

            <TeamSection
              teamType='team_teachers'
              title='Sampling of Our Teachers'
              members={team.teachers.sort(sortMembers)}
              showFullName={false}
            />

            <TeamSection
              teamType='team_faculty'
              title='Faculty'
              members={team.faculty.sort(sortMembers)}
              fullName={true}
            />

          </div>
        </div>
      </div>
    );
  }
}
