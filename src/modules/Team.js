import React, { Component } from 'react';
import '../Team.scss';
import pic_bibek from '../images/team/bibek.jpg'
import pic_bibek_fun from '../images/team/bibek_fun.jpg'
import pic_kiera from '../images/team/kiera.jpg'
import pic_kiera_fun from '../images/team/kiera_fun.jpg'
import pic_uma from '../images/team/uma.jpg'
import pic_uma_fun from '../images/team/uma_fun.jpg'

class Team extends Component {
  render() {


    const team = [
      {
        name: "Kiera Peltz",
        position: "Founder",
        image: pic_kiera,
        funImage: pic_kiera_fun,
        blurb: "I love computer programming and teaching. Guess I've found \
        a pretty great intersection of my interests!"
      },
      {
        name: "Bibek Ghimire",
        position: "Webmaster, Teacher",
        image: pic_bibek,
        funImage: pic_bibek_fun,
        blurb: "I love computer programming and teaching. Guess I've found \
        a pretty great intersection of my interests!"
      },
      {
        name: "Uma Lakshminarayan",
        position: "PR Rep, Teacher",
        image: pic_uma,
        funImage: pic_uma_fun,
        blurb: "I love computer programming and teaching. Guess I've found \
        a pretty great intersection of my interests!"
      },
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
    const blurb = member.blurb;

    return (
      <div>
        <div className="team_member">
            <div className="member_image">
              <img src={this.state.image}
                  alt={name}
                  onMouseOver={this.setFunPicture}
                  onMouseLeave={this.setRegPicture}/>
            </div>
            <div className="member_title">
              <h1 className="member_name">{name}</h1>
              <h2 className="member_position">{position}</h2>
            </div>
        </div>
      </div>
    )
  }
}

export default Team;
