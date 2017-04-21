import React, { Component } from 'react';
import { PageHeader, FontAwesomeLink, HoverFadeImage } from './Skeleton';
import '../scss/App.scss';
import '../scss/Skeleton.scss';
import '../scss/Team.scss';
import '../scss/font-awesome.scss';

import dataJSON from '../json/data.json';

class Team extends Component {
  render() {

    const teamData = dataJSON.team;
    function sortMembers(a, b) {
      const nameA = a.name.first + " " + a.name.last;
      const nameB = b.name.first + " " + b.name.last;
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    }

    const boardDOM = teamData.board.sort(sortMembers).map((m) => {
      const id = m.name.first + "_" + m.name.last;
      return ( <TeamMember key={id} member={m}/> );
    });

    const teachersDOM = teamData.teachers.sort(sortMembers).map((m) => {
      const id = m.name.first + "_" + m.name.last;
      return ( <TeamMember key={id} member={m}/> );
    });

    const founderDOM = teamData.heads.sort(sortMembers).map((m) => {
      const id = m.name.first + "_" + m.name.last;
      return <HeadMember key={id} member={m}/>
    });

    const header = dataJSON.headers.team;
    const image = process.env.PUBLIC_URL + header.image;
    return (
      <div className="App">
        <PageHeader image={image} title={header.title} description={header.description} />
        <div className="team_page container">
          <h1>The Founder</h1>
          <div className="team_founder">
            {founderDOM}
          </div>
          <h1>The Board</h1>
          <div className="team_board">
            {boardDOM}
          </div>
          <h1>The Teachers</h1>
          <div className="team_teachers">
            {teachersDOM}
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
    const regImage = firstName[0].toLowerCase() + "_" + lastName.toLowerCase() + ".jpg";
    const funImage = firstName[0].toLowerCase() + "_" + lastName.toLowerCase() + "_fun.jpg";
    const description = member.description;

    return (
        <div className="head_member flex">

          <div className="member_image">
            <HoverFadeImage funImage={funImage} regImage={regImage}/>
          </div>

          <div className="member_text_wrapper">
            <div className="member_text">
              <div className="member_name">{(firstName + " " + lastName).toUpperCase()}</div>
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

class TeamMember extends Component {

  render() {
    const member = this.props.member;

    const collegeID = member.college.toLowerCase().split(' ').join('_');
    const firstName = member.name.first;
    const lastName = member.name.last;
    const regImage = firstName[0].toLowerCase() + "_" + lastName.toLowerCase() + ".jpg";
    const funImage = firstName[0].toLowerCase() + "_" + lastName.toLowerCase() + "_fun.jpg";

    return (
      <div className="team_member_wrapper">
        <div className="team_member wow fadeIn">
          <div className="member_image">
            <HoverFadeImage funImage={funImage} regImage={regImage}/>
          </div>
          <div className={"college_attended " + collegeID}>{member.college}</div>
          <div className="member_text">
            <h1 className="member_name">{member.name.first + " " + member.name.last}</h1>
            <h2 className="member_position">{member.position}</h2>
            <div className="member_description">
              <p>{member.description}</p>
            </div>
            <div className="member_links">
              <MemberLinks links={member.links} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

class MemberLinks extends Component {
  render() {
    const links = this.props.links;
    return (
      <span className="member_links">
        {links.personal &&
           <FontAwesomeLink link={links.personal} classNames="fa fa-home"/>
         }
        {links.facebook &&
          <FontAwesomeLink link={links.facebook} classNames="fa fa-facebook"/>
        }
        {links.linkedin &&
          <FontAwesomeLink link={links.linkedin} classNames="fa fa-linkedin"/>
        }
      </span>
    );
  }
}

export default Team;
