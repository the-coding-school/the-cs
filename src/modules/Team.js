import React, { Component } from 'react';
import { PageHeader, FontAwesomeLink } from './Skeleton';
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

    const teamDOM = teamData.members.sort(sortMembers).map((m) => {
      const id = m.name.first + "_" + m.name.last;
      return ( <TeamMember key={id} member={m}/> );
    });

    const teamHeadsDOM = teamData.heads.sort(sortMembers).map((m) => {
      const id = m.name.first + "_" + m.name.last;
      return <HeadMember key={id} member={m}/>
    });

    const header = dataJSON.headers.team;
    const image = process.env.PUBLIC_URL + header.image;
    return (
      <div className="App">
        <PageHeader image={image} title={header.title} description={header.description} />
        <div className="about page container">
          <div className="team_heads">
            {teamHeadsDOM}
          </div>

          <div className="team flex flex_wrap">
            {teamDOM}
          </div>
        </div>
      </div>
    );
  }
}

class HeadMember extends Component {
  render() {

    const member = this.props.member;
    const nameObj = member.name;
    const name = nameObj.first;
    const position = member.position;
    const regImage = member.name.first[0] + "_" + member.name.last + ".jpg";
    const funImage = member.name.first[0] + "_" + member.name.last + "_fun.jpg";
    const description = member.description;

    return (
        <div className="head_member flex">

          <HoverFadeImage funImage={funImage} regImage={regImage}/>

          <div className="member_description">
            <div className="flex_sub">
              <h1>{String(name).toUpperCase()}</h1>
              <h2>{position.toUpperCase()}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
    );
  }
}

class TeamMemberOld extends Component {

  render() {
    const member = this.props.member;
    const nameObj = member.name;
    const name = nameObj.first;
    const position = member.position;
    const description = member.description;
    const links = member.links;
    const regImage = member.name.first[0] + "_" + member.name.last + ".jpg";
    const funImage = member.name.first[0] + "_" + member.name.last + "_fun.jpg";

    return (
      <div className="team_member_wrapper">
        <div className="team_member">
            <div className="member_items">
              <HoverFadeImage funImage={funImage} regImage={regImage}/>
              <div className="member_title">
                <h1 className="member_name">{name}</h1>
                <h2 className="member_position">{position}</h2>
              </div>

            </div>
            {links && <MemberLinks links={links}/>}
        </div>
      </div>
    )
  }
}

class TeamMember extends Component {

  render() {
    const member = this.props.member;

    const collegeID = member.college.toLowerCase().split(' ').join('_');

    const links = member.links;
    const regImage = member.name.first[0] + "_" + member.name.last + ".jpg";
    const funImage = member.name.first[0] + "_" + member.name.last + "_fun.jpg";

    return (
      <div className="team_member_wrapper">
        <div className="team_member wow fadeInUp">
          <HoverFadeImage funImage={funImage} regImage={regImage}/>
          <div className={"college_attended " + collegeID}>{member.college}</div>
          <div className="member_text">
            <h1 className="member_name">{member.name.first + " " + member.name.last}</h1>
            <h2 className="member_position">{member.position}</h2>
            <div className="member_description">
          </div>

            {member.description}
          </div>
        </div>
      </div>
    )
  }
}

class HoverFadeImage extends Component {

  render() {
    const root = process.env.PUBLIC_URL + "/images/team/";
    const funImage = root + this.props.funImage;
    const regImage = root + this.props.regImage;
    console.log(process.env.PUBLIC_URL);
    return (
      <div className="member_image">
        <img className="fun" src={funImage} alt="fun" />
        <img className="reg" src={regImage} alt="regular" />
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
           <FontAwesomeLink link={links.personal} classNames="fa fa-home"/>
         }
        {links.facebook &&
          <FontAwesomeLink link={links.facebook} classNames="fa fa-facebook"/>
        }
      </span>
    );
  }
}

export default Team;
