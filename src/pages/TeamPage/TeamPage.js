import React from 'react';
import PageHeader from 'components/PageHeader';

import MemberCard from './MemberCard';
import TeamSection from './TeamSection';

import team from './TeamMembersData';
import pageData from './TeamPageData';

export default class TeamPage extends React.Component {
  render() {

    function getMemberID(m) { return m.name.first + '_' + m.name.last; }

    function sortMembers(a, b) {
      if (getMemberID(a) < getMemberID(b)) return -1;
      if (getMemberID(a) > getMemberID(b)) return 1;
      return 0;
    }

    const header = pageData.header;
    const founder = team.founders[0];

    return (
      <div className='team_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className='page_contents'>
          <div className='container'>
            <div className='team_founder team_section'>
              <h1 className='team_section_title'>Founder</h1>
              <MemberCard
                modal={false}
                onClick={null}
                name={founder.name.first + " " + founder.name.last}
                position={founder.position}
                description={founder.description}
                blurb={founder.blurb}
                college={founder.college}
                links={founder.links}
                images={founder.images}
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

            <TeamSection
              teamType='team_teachers'
              title='CodeConnects Teachers'
              members={team.ccTeachers.sort(sortMembers)}
              showFullName={false}
            />

          </div>
        </div>
      </div>
    );
  }
}
