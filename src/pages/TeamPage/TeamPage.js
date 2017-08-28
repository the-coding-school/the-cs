import React from 'react';
import PageHeader from 'components/PageHeader';
import SectionHeader from 'components/SectionHeader';
import MemberCard from 'components/MemberCard';
import TeamSection from 'components/TeamSection';

import team from 'data/TeamMembers';
import pageData from './TeamPageData';

export default class TeamPage extends React.Component {
  render() {

    const memID = m => (m.name.first + '_' + m.name.last);
    const sortMembersAlphabetically = (a, b) => (memID(a) < memID(b)) ? -1 : 1;
    const sortMembersByDefinedOrder = (a, b) => (a.order < b.order) ? -1 : 1;

    const header = pageData.header;
    const founder = team.founders[0];

    return (
      <div className='team_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className='page_contents'>
          <div className='container'>
            <div className='team_founder team_section'>
              <SectionHeader title='Founder'/>
              <MemberCard
                modal={false}
                onClick={null}
                name={founder.name.first + " " + founder.name.last}
                position={founder.position}
                description={founder.description}
                blurb={founder.blurb}
                organization={founder.organization}
                links={founder.links}
                images={founder.images}
              />
            </div>

            <TeamSection
              teamType='team_board'
              title='Board Members'
              members={team.boardMembers.sort(sortMembersAlphabetically)}
              showFullName={true}
            />

            <TeamSection
              teamType='team_advisors'
              title='Advisors'
              members={team.advisors.sort(sortMembersAlphabetically)}
              showFullName={true}
            />

            <TeamSection
              teamType='team_heads'
              title='Team Heads'
              members={team.teamLeads.sort(sortMembersByDefinedOrder)}
              showFullName={false}
            />

            <TeamSection
              teamType='team_teachers'
              title='Teachers'
              members={team.teachers.sort(sortMembersAlphabetically)}
              showFullName={false}
            />
            <SectionHeader subtitle={'...and many more!'} />

          </div>
        </div>
      </div>
    );
  }
}
