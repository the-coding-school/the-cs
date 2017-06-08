import React, { Component } from 'react';
import { PageHeader, FontAwesomeLink, HoverFadeImage, HoverFadeContent } from './Skeleton';
import '../scss/Skeleton.scss';
import '../scss/Team.scss';
import '../scss/_fa/font-awesome.scss';

import teamJSON from '../json/team.json';
import dataJSON from "../json/data.json";

class TeamPage extends Component {
  render() {

    const teamData = teamJSON.team;

    function sortMembers(a, b) {
      const nameA = a.name.first + " " + a.name.last;
      const nameB = b.name.first + " " + b.name.last;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    }

    function mapMembers(m) {
      const id = m.name.first + "_" + m.name.last;
      return ( <TeamMember key={id} member={m}/> );
    }

    const founderDOM = teamData.founder.sort(sortMembers).map((m) => {
      const id = m.name.first + "_" + m.name.last;
      return <HeadMember key={id} member={m}/>
    });

    const facultyDOM = teamData.faculty.sort(sortMembers).map(mapMembers);
    const teamLeadsDOM = teamData.team_leads.sort(sortMembers).map(mapMembers);
    const teachersDOM = teamData.teachers.sort(sortMembers).map(mapMembers);

    const header = dataJSON.headers.team;
    const image = process.env.PUBLIC_URL + header.image;

    return (
      <div className="App">
        <PageHeader image={image} title={header.title} description={header.description} />
        <div className="teampage page">
          <div className="container">
            <div className="team_founder">
              <h1 className="team_section_title">The Founder</h1>
              {founderDOM}
            </div>
            <h1 className="team_section_title">The Team Heads</h1>
            <div className="team_board team_member_set">
              {teamLeadsDOM}
            </div>
            <h1 className="team_section_title">The Teachers</h1>
            <div className="team_teachers team_member_set">
              {teachersDOM}
            </div>
            <h1 className="team_section_title">The Faculty</h1>
            <div className="team_faculty team_member_set">
              {facultyDOM}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class HeadMember extends Component {
  render() {

    const member = this.props.member;
    const position = member.position;
    const firstName = member.name.first;
    const lastName = member.name.last;
    const memberID = firstName[0].toLowerCase() + "_" + lastName.toLowerCase();
    const description = member.description;

    return (
        <div className="head_member flex">
          <MemberImage memberID={memberID} />
          <div className="member_text_wrapper">
            <div className="member_text">
              <div className="member_name">{(firstName)}</div>
              <div className="member_position">{position.toUpperCase()}</div>
              <div className="member_description">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

// ------- Team Member (smaller cells) ------- //

class TeamMember extends Component {

  render() {
    const m = this.props.member;
    const firstName = m.name.first;
    const lastName = m.name.last;
    const name = firstName;
    const memberID = firstName[0].toLowerCase() + "_" + lastName.toLowerCase();

    return (
      <div className="team_member_wrapper">
        <div className="team_member wow fadeIn">
          <MemberImage memberID={memberID} />
          <TeamMemberCollegeBar college={m.college} />
          <TeamMemberDescription name={name} position={m.position} description={m.description} links={m.links} />
        </div>
      </div>
    )
  }
}

class MemberImage extends Component {
  render() {
    const p = this.props;
    const root = process.env.PUBLIC_URL + "/images/team/";
    const regImage = root + p.memberID + ".jpg";
    const funImage = root + p.memberID + "_fun.jpg";
    return (
      <div className="member_image">
        <HoverFadeImage default={regImage} hover={funImage} />
      </div>
    )
  }
}

class TeamMemberCollegeBar extends Component {
  render() {
    const college = this.props.college;
    const collegeID = college.toLowerCase().split(' ').join('_');
    return (
      <div className={"college_attended " + collegeID}>{college}</div>
    )
  }
}

class TeamMemberDescription extends Component {
  render() {
    const p = this.props;
    return (
      <div className="member_text">
        <div className="member_name_row">
          <h1 className="member_name">{p.name}</h1>
          <div className="member_links"><MemberLinks links={p.links} /></div>
        </div>
        <div className="member_position">{p.position}</div>


        <div className="member_description">{p.description}</div>

      </div>
    );
  }
}

class MemberLinks extends Component {
  render() {
    const links = this.props.links;
    return (
      <span className="member_links">
        {links.personal &&
           <FontAwesomeLink link={links.personal} classNames="fa fa-external-link-square"/>
         }
        {links.facebook &&
          <FontAwesomeLink link={links.facebook} classNames="fa fa-facebook-square"/>
        }
        {links.linkedin &&
          <FontAwesomeLink link={links.linkedin} classNames="fa fa-linkedin-square"/>
        }
      </span>
    );
  }
}

export default TeamPage;
