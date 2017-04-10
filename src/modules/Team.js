import React, { Component } from 'react';
import { FontAwesomeLink } from './Skeleton'
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

    return (
      <div className="App">
        <div className="container">
            <div className="team_heads row">
              {teamHeadsDOM}
            </div>

            <div className="team flex flex_wrap row">
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
    const name = nameObj.first + " " + nameObj.last;
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

class TeamMember extends Component {

  render() {
    const member = this.props.member;
    const nameObj = member.name;
    const name = nameObj.first + " " + nameObj.last;
    const position = member.position;
    const links = member.links;
    const regImage = member.name.first[0] + "_" + member.name.last + ".jpg";
    const funImage = member.name.first[0] + "_" + member.name.last + "_fun.jpg";

    return (
      <div className="team_member_wrapper col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="team_member">
            <HoverFadeImage funImage={funImage} regImage={regImage}/>
            <div className="member_title">
              <h1 className="member_name">{name}</h1>
              <h2 className="member_position">{position}</h2>
            </div>
            {links && <MemberLinks links={links}/>}
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
