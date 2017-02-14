import React, { Component } from 'react';
import { FontAwesomeLink } from './Skeleton'
import '../scss/Team.scss';
// import pic_bibek from '../images/team/b_ghimire.jpg';
// import pic_bibek_fun from '../images/team/b_ghimire_fun.jpg';
// import pic_kiera from '../images/team/kiera.jpg';
// import pic_kiera_fun from '../images/team/kiera_fun.jpg';
// import pic_uma from '../images/team/uma.jpg';
// import pic_uma_fun from '../images/team/uma_fun.jpg';
// import placehold300 from '../images/placehold300.png';
import '../scss/font-awesome.scss';

import teamData from '../json/team.json';

class Team extends Component {
  render() {

    // const teamHeads = [
    //   {
    //     name: "Kiera Peltz",
    //     position: "Founder",
    //     image: pic_kiera,
    //     funImage: pic_kiera_fun,
    //     description: "Lorem ipsum dolor sit amet, a morbi accumsan pellentesque erat a elit. Suscipit risus pellentesque vivamus at. Vel arcu consectetuer et imperdiet, in nulla, convallis metus sit amet, id lectus ut. Penatibus sem aliquet lacinia egestas donec ipsum, tempus risus non dictumst donec velit, sit commodo, aenean diam scelerisque pretium. Ante justo ultricies est, pellentesque mauris, dolor non vel ridiculus quisque nec, mauris dolor id nibh ut nulla. Lacus cursus adipiscing et dictum, elit in vestibulum sem ut purus, massa ultricies id ullam neque dui nulla, convallis elit ut lectus purus id dolor, tellus tellus. Velit integer mus et, vehicula in dictum, ut maecenas, adipiscing quis laoreet."
    //   },
    //   {
    //     name: "Someone Else Peltz",
    //     position: "Founder",
    //     image: pic_kiera,
    //     funImage: pic_kiera_fun,
    //     description: "Lorem ipsum dolor sit amet, a morbi accumsan pellentesque erat a elit. Suscipit risus pellentesque vivamus at. Vel arcu consectetuer et imperdiet, in nulla, convallis metus sit amet, id lectus ut. Penatibus sem aliquet lacinia egestas donec ipsum, tempus risus non dictumst donec velit, sit commodo, aenean diam scelerisque pretium. Ante justo ultricies est, pellentesque mauris, dolor non vel ridiculus quisque nec, mauris dolor id nibh ut nulla. Lacus cursus adipiscing et dictum, elit in vestibulum sem ut purus, massa ultricies id ullam neque dui nulla, convallis elit ut lectus purus id dolor, tellus tellus. Velit integer mus et, vehicula in dictum, ut maecenas, adipiscing quis laoreet."
    //   }
    // ]
    //
    // const team = [
    //   {
    //     name: "Kiera Peltz",
    //     position: "Founder",
    //     image: pic_kiera,
    //     funImage: pic_kiera_fun,
    //   },
    //   {
    //     name: "Bibek Ghimire",
    //     position: "Webmaster, Teacher",
    //     image: pic_bibek,
    //     funImage: pic_bibek_fun,
    //     links: {
    //       personal: 'http://www.bibekg.com/',
    //       facebook: 'http://www.facebook.com/bibekghim'
    //     }
    //   },
    //   {
    //     name: "Uma Lakshminarayan",
    //     position: "PR Rep, Teacher",
    //     image: pic_uma,
    //     funImage: pic_uma_fun,
    //   },
    //   {
    //     name: "1",
    //     position: "PR Rep, Teacher",
    //     image: placehold300,
    //     funImage: placehold300,
    //   },
    //   {
    //     name: "2",
    //     position: "PR Rep, Teacher",
    //     image: placehold300,
    //     funImage: placehold300,
    //   },
    //   {
    //     name: "3",
    //     position: "PR Rep, Teacher",
    //     image: placehold300,
    //     funImage: placehold300,
    //   },
    //   {
    //     name: "4",
    //     position: "PR Rep, Teacher",
    //     image: placehold300,
    //     funImage: placehold300,
    //   },
    //   {
    //     name: "5",
    //     position: "PR Rep, Teacher",
    //     image: placehold300,
    //     funImage: placehold300,
    //   },
    //   {
    //     name: "6",
    //     position: "PR Rep, Teacher",
    //     image: placehold300,
    //     funImage: placehold300,
    //   },
    //   {
    //     name: "7",
    //     position: "PR Rep, Teacher",
    //     image: placehold300,
    //     funImage: placehold300,
    //   },
    //   {
    //     name: "8",
    //     position: "PR Rep, Teacher",
    //     image: placehold300,
    //     funImage: placehold300,
    //   }
    // ]

    const teamDOM = teamData.members.map((m) => {
      const id = m.name.first + "_" + m.name.last;
      return ( <TeamMember key={id} member={m}/> );
    });

    const teamHeadsDOM = teamData.heads.map((m) => {
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
    const links = member.links;
    const image = member.name.first[0] + "_" + member.name.last + ".jpg";
    const funImage = member.name.first[0] + "_" + member.name.last + "_fun.jpg";
    const description = member.description;

    return (
        <div className="head_member flex">
          <div className="member_image">
            <div className="image_swapper">
              <img className="fun" src={"http://www.bibekg.com/tcs-images/" + funImage}/>
              <img className="reg" src={"http://www.bibekg.com/tcs-images/" + image}/>
            </div>
          </div>
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
    const image = member.name.first[0] + "_" + member.name.last + ".jpg";
    const funImage = member.name.first[0] + "_" + member.name.last + "_fun.jpg";
    /*               <img src={this.state.image}
                      alt={name}
                      onMouseOver={this.setFunPicture}
                      onMouseLeave={this.setRegPicture}/>*/

    return (
      <div className="team_member_wrapper">
        <div className="team_member">
            <div className="member_image">
              <img className="fun" src={"http://www.bibekg.com/tcs-images/" + funImage}/>
              <img className="reg" src={"http://www.bibekg.com/tcs-images/" + image}/>
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
