// @flow

import React from 'react';
import { LinkScrollPage, Anchor } from 'components/LinkScrollPage';
import PageHeader from 'components/PageHeader';
import SectionHeader from 'components/SectionHeader';
import MemberCard from 'components/MemberCard';
import TeamSection from 'components/TeamSection';
import team, {
  sortListFirstThenByFunc,
  sortMembersAlphabetically
} from 'data/TeamMembers';
import pageData from './TeamPageData';

export default class TeamPage extends LinkScrollPage {
  render() {

    const teachersHardCodedList = [
      'KJ Famulegun',
      'Jennifer Lauriello',
      'John Fletcher',
      'Leya Breanna-Baltaxe',
      'Lisa Truong',
      'Matthew Chen',
      'Maheen Khan',
      'Matthew Moreno',
      'Micah Benn',
      'Megan Shea',
      'Michael Eberle',
      'Nicole Seo',
      'Nikita WCSU',
      'Ochaun Marshall',
      'Priyanka Lamichhane',
      'Robert Garrett',
      'Shane Johnson',
      'Sapharah Prescod',
      'Tessa Weidmann',
      'Zachary Peters',
      'Harish Shankar',
      'Emma Huang',
      'Ezequil Morales',
      'Eva Lomazov',
      'Eloisa Esparza',
      'Diego Valdez',
      'Chris Salem',
      'Brian Greenberg',
      'Bo Curry',
      'Alison Chao',
      'Alexander Arnold'
    ];

    const teamHeadsHardCodedList = [
      'Akila Rajesh',
      'Bibek Ghimire',
      'Mindi Cao',
      'Anthony Mirand',
      'Jason Lin',
      'Stacy Miller',
      'Christie Matthews',
      'Crystal Hsieh',
      'Uma Lakshminarayan',
      'Alejandro Fischer',
      'Natalie Ethell',
      'Amy Baer',
      'Andy Patterson',
      'Laura Felenstein'
    ];

    const advisorsHardCodedList = [
      'Eva Manolis',
      'Pamit Surana',
      'Jessica McKellar',
      'Ravi Pendse',
      'Matt Dababneh',
      'Gisele Ragusa',
      'Bill Derouin',
      'Mark Redekopp'
    ]

    const sortedTeachers = sortListFirstThenByFunc(
      team.teachers,
      teachersHardCodedList,
      sortMembersAlphabetically
    );

    const sortedTeamHeads = sortListFirstThenByFunc(
      team.teamHeads,
      teamHeadsHardCodedList,
      sortMembersAlphabetically
    );

    const sortedAdvisors = sortListFirstThenByFunc(
      team.advisors,
      advisorsHardCodedList,
      sortMembersAlphabetically
    );

    const header = pageData.header;
    const founder = team.founders[0];

    return (
      <div className='team_page page'>
        <PageHeader image={header.image} title={header.title} description={header.description} />
        <div className='page_contents'>
          <div className='container'>

            <Anchor pageMap={this.pageMap} id='founder' />
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

            <Anchor pageMap={this.pageMap} id='advisors' />
            <TeamSection
              teamType='team_advisors'
              title='Our Advising Team'
              members={sortedAdvisors}
              showFullName={true}
            />

            <Anchor pageMap={this.pageMap} id='heads' />
            <TeamSection
              teamType='team_heads'
              title='Team Heads'
              members={sortedTeamHeads}
              showFullName={false}
            />

            <Anchor pageMap={this.pageMap} id='teachers' />
            <TeamSection
              teamType='team_teachers'
              title='Teachers'
              members={sortedTeachers}
              showFullName={false}
            />
            <SectionHeader subtitle={'...and many more!'} />

          </div>
        </div>
      </div>
    );
  }
}
