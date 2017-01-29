import React, { Component } from 'react';
import { FontAwesomeLink } from './Skeleton'
import '../scss/Team.scss';
import pic_bibek from '../images/team/bibek.jpg';
import pic_bibek_fun from '../images/team/bibek_fun.jpg';
import pic_kiera from '../images/team/kiera.jpg';
import pic_kiera_fun from '../images/team/kiera_fun.jpg';
import pic_uma from '../images/team/uma.jpg';
import pic_uma_fun from '../images/team/uma_fun.jpg';
import placehold300 from '../images/placehold300.png';
import '../scss/font-awesome.scss';

class Team extends Component {
  render() {
    const team = [
      {
        name: "Kiera Peltz",
        position: "Founder",
        image: pic_kiera,
        funImage: pic_kiera_fun,
      },
      {
        name: "Bibek Ghimire",
        position: "Webmaster, Teacher",
        image: pic_bibek,
        funImage: pic_bibek_fun,
        links: {
          personal: 'http://www.bibekg.com/',
          facebook: 'http://www.facebook.com/bibekghim'
        }
      },
      {
        name: "Uma Lakshminarayan",
        position: "PR Rep, Teacher",
        image: pic_uma,
        funImage: pic_uma_fun,
      },
      {
        name: "1",
        position: "PR Rep, Teacher",
        image: placehold300,
        funImage: placehold300,
      },
      {
        name: "2",
        position: "PR Rep, Teacher",
        image: placehold300,
        funImage: placehold300,
      },
      {
        name: "3",
        position: "PR Rep, Teacher",
        image: placehold300,
        funImage: placehold300,
      },
      {
        name: "4",
        position: "PR Rep, Teacher",
        image: placehold300,
        funImage: placehold300,
      },
      {
        name: "5",
        position: "PR Rep, Teacher",
        image: placehold300,
        funImage: placehold300,
      },
      {
        name: "6",
        position: "PR Rep, Teacher",
        image: placehold300,
        funImage: placehold300,
      },
      {
        name: "7",
        position: "PR Rep, Teacher",
        image: placehold300,
        funImage: placehold300,
      },
      {
        name: "8",
        position: "PR Rep, Teacher",
        image: placehold300,
        funImage: placehold300,
      }
    ]

    const teamDOM = team.map((member) => (
      <TeamMember key={member.name} member={member}/>
    ));

    return (
      <div className="App">
        <div className="container">
          <div className="team flex flex_wrap">
            {teamDOM}
          </div>
        </div>
      </div>
    );
  }
}

class TeamMember extends Component {

  constructor(props) {
    super(props);
    this.state = { image: this.props.member.image }
    this.setFunPicture = this.setFunPicture.bind(this);
    this.setRegPicture = this.setRegPicture.bind(this);
  }

  setFunPicture() {
    this.setState({ image: this.props.member.funImage });
  }

  setRegPicture() {
    this.setState({ image: this.props.member.image });
  }

  render() {
    const member = this.props.member;
    const name = member.name;
    const position = member.position;
    const links = member.links;
    const image = member.image;
    const funImage = member.funImage;
    /*               <img src={this.state.image}
                      alt={name}
                      onMouseOver={this.setFunPicture}
                      onMouseLeave={this.setRegPicture}/>*/

    return (
      <div className="team_member_wrapper">
        <div className="team_member">
            <div className="member_image">
              <img className="fun" src={funImage}/>
              <img className="reg" src={image}/>
            </div>
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
