import React, { Component } from "react";
import { PageHeader, FontAwesomeLink} from "./Skeleton";
import { HoverFadeImage } from "./HoverFade.js";
import "../scss/Skeleton.scss";
import "../scss/Team.scss";
import "../scss/_fa/font-awesome.scss";

import team from "../json/team.json";
import headers from "../json/headers.json";

class TeamPage extends Component {
  render() {

    function getMemberID(m) { return m.name.first + "_" + m.name.last; }

    function sortMembers(a, b) {
      if (getMemberID(a) < getMemberID(b)) return -1;
      if (getMemberID(a) > getMemberID(b)) return 1;
      return 0;
    }

    const founderDOM = <HeadMember member={team.founder}/>
    const facultyDOM = team.faculty.sort(sortMembers).map((m) => <FacultyMember key={getMemberID(m)} member={m}/> );
    const teamLeadsDOM = team.teamLeads.sort(sortMembers).map((m) => <TeamMember key={getMemberID(m)} member={m}/> );
    const teachersDOM = team.teachers.sort(sortMembers).map((m) => <TeamMember key={getMemberID(m)} member={m}/> );

    const header = headers.team;
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

            <div className="team_heads team_member_set">
              <h1 className="team_section_title">The Team Heads</h1>
              {teamLeadsDOM}
            </div>

            <div className="team_teachers team_member_set">
              <h1 className="team_section_title">The Teachers</h1>
              {teachersDOM}
            </div>

            <div className="team_faculty team_member_set">
              <h1 className="team_section_title">The Faculty</h1>
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

    return (
        <div className="head_member flex">
          <MemberImage memberID={memberID} />
          <div className="member_text_wrapper">
            <div className="member_text">
              <div className="member_name">{(firstName + " " + lastName)}</div>
              <div className="member_position">{position.toUpperCase()}</div>
              <div className="member_description">
                <p>{member.achievements}</p>
                <p>{member.description}</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

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

class FacultyMember extends Component {
  render() {
    const m = this.props.member;
    const firstName = m.name.first;
    const lastName = m.name.last;
    const name = firstName + " " + lastName;
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
    const root = process.env.PUBLIC_URL + "/images/team/";
    const regImage = root + this.props.memberID + ".jpg";
    const funImage = root + this.props.memberID + "_fun.jpg";
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
    const collegeID = college.toLowerCase().split(" ").join("_");
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
