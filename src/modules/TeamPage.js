import React, { Component } from "react";
import ReactDOM from 'react-dom';
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

    const header = headers.team;
    const image = process.env.PUBLIC_URL + header.image;

    return (
      <div className="App">
        <PageHeader image={image} title={header.title} description={header.description} />
        <div className="teampage page">
          <div className="container">
            <div className="team_founder team_section">
              <h1 className="team_section_title">The Founder</h1>
              <MemberCard modal={false} member={team.founder} />
            </div>

            <TeamSection teamType="team_heads"  title={"Team Heads"}
              members={team.teamLeads.sort(sortMembers)} />

            <TeamSection teamType="team_teachers"  title={"Teachers"}
              members={team.teachers.sort(sortMembers)} />

            <TeamSection teamType="team_faculty"  title={"Faculty"}
              members={team.faculty.sort(sortMembers)} />
          </div>
        </div>
      </div>
    );
  }
}

class TeamSection extends Component {
  render() {
    return (
      <div className={this.props.teamType + " team_section"}>
        <h1 className="team_section_title">{this.props.title}</h1>
        <MemberArray members={this.props.members} />
      </div>
    );
  }
}

class MemberArray extends Component {
  render() {
    function getMemberID(m) { return m.name.first + "_" + m.name.last; }
    const mems = this.props.members
    const arrayStyles = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }
    return (
      <div className="team_member_array" style={arrayStyles}>
        {mems.map((m) => <MemberViews key={getMemberID(m)} member={m}/> )}
      </div>
    );
  }
}

class MemberViews extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !(this.state.isOpen)
    });
  }

  render() {
    return (
      <div className="team_member_views" style={{position: "relative"}}>
        <MemberCell onClick={this.toggleModal} member={this.props.member} />
        <ModalMemberCard onClose={this.toggleModal} show={this.state.isOpen} member={this.props.member} />
      </div>
    );
  }
}

class MemberCell extends Component {
  render() {
    const m = this.props.member;
    const firstName = m.name.first;
    const lastName = m.name.last;
    const name = firstName;
    const memberID = firstName[0].toLowerCase() + "_" + lastName.toLowerCase();

    return (
      <div className="member_cell_wrapper" onClick={this.props.onClick}>
        <div className="member_cell wow fadeIn">
          <MemberImage background={false} memberID={memberID} />
          <MemberInfoOverlay
            name={name}
            position={m.position}
            description={m.description}
            college={m.college}
            />
        </div>
      </div>
    )
  }
}

class ModalMemberCard extends Component {
  render() {

    if (!this.props.show) {
      return null;
    }

    const member = this.props.member;
    const firstName = member.name.first;
    const lastName = member.name.last;
    const name = firstName + " " + lastName;
    const memberID = firstName[0].toLowerCase() + "_" + lastName.toLowerCase();

    const modalStyles = {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: "0",
      left: "0",
      zIndex: "300",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    const bgStyles = {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.8)",
    }
    return (
      <div className="modal_container" style={modalStyles}>
        <div className="modal_background" style={bgStyles} />
        <div className="modal_content">
          <MemberCard modal={true} member={this.props.member} onClick={this.props.onClose}/>
        </div>
      </div>
    );
  }
}

class MemberCard extends Component {
  render() {

    const member = this.props.member;
    const firstName = member.name.first;
    const lastName = member.name.last;
    const name = firstName + " " + lastName;
    const memberID = firstName[0].toLowerCase() + "_" + lastName.toLowerCase();

    const flexWrapperStyles = {
      display: "flex",
      width: "100%",
      justifyContent: "center"
    }

    const cardStyles = {
      position: "relative",
      backgroundColor: "white",
      borderRadius: "5px",
      boxShadow: "0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.2), 0 1px 8px 0 rgba(0,0,0,.12)",
      width: "80%",
      maxWidth: "800px",
      padding: "25px"
    }
    const rowStyles = {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    }

    const colStyles = {
      display: "flex",
      flexDirection: "column",
    }

    return (
      <div className="member_card_wrapper" style={flexWrapperStyles}>
        <div className="member_card" style={cardStyles}>
          {this.props.modal && <MemberCloseButton onClick={this.props.onClick} /> }
          <MemberInfoBar name={name} position={member.position} links={member.links} />
          <div className="member_card_row" style={rowStyles}>
            <div className="member_card_column" style={colStyles}>
              <MemberImage background={true} memberID={memberID} />
              <MemberCollegeBar college={member.college} />
              {member.hasOwnProperty("blurb") && <MemberBlurb blurb={member.blurb}/> }
            </div>
            <div className="member_card_column" style={colStyles}>
              <MemberDescription description = {member.description} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class MemberInfoBar extends Component {
  render() {
    const infoStyles = {
      marginBottom: "20px",
    }
    const flexStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    }
    return (
      <div className="member_info_bar" style={infoStyles}>
        <MemberName name={this.props.name} />
        <div style={flexStyle}>
          <MemberPosition position={this.props.position} color={"#333333"}/>
          <MemberLinks links={this.props.links} />
        </div>
      </div>
    );
  }
}

class MemberCloseButton extends Component {
  render() {
    return (
      <div
        className="member_close_button"
        onClick={this.props.onClick}
      >
        <i className="fa fa-times-circle fa-2x"/>
      </div>
    );
  }
}

class MemberImage extends Component {
  render() {
    const root = process.env.PUBLIC_URL + "/images/team/";
    const regImage = root + this.props.memberID + ".jpg";
    const funImage = root + this.props.memberID + "_fun.jpg";
    // <HoverFadeImage default={regImage} hover={funImage} />
    return (
      <div className="member_image">
        {this.props.background && (<div className="member_image_background">
          <img src={regImage} />
        </div>
        )}
        <div className="member_image_main">
          <img src={regImage} alt={this.props.memberID}/>
        </div>
      </div>
    )
  }
}

class MemberInfoOverlay extends Component {
  render() {
    const p = this.props
    return (
      <div className="member_info_overlay">
        <div className="member_main_info">
          <MemberName name={p.name} />
          <MemberPosition position={p.position}/>
        </div>
        <div className="member_secondary_info">
          <MemberDescription description={p.description} />
          <MemberCollegeBar college={p.college} />
        </div>

      </div>
    )
  }
}

class OverlayOpenButton extends Component {
  render() {
    return (
      <div className="overlay_open_button">
        <i className="fa fa-chevron-up" />
      </div>
    );
  }
}

class MemberName extends Component {
  render() {
    return (
      <div className="member_name"> {this.props.name} </div>
    );
  }
}

class MemberPosition extends Component {
  render() {
    return (
      <div className="member_position"> {this.props.position} </div>
    );
  }
}

class MemberDescription extends Component {
  render() {
    return (
      <div className="member_description"> {this.props.description} </div>
    );
  }
}

class MemberBlurb extends Component {
  render() {
    return (
      <div className="member_blurb"> {this.props.blurb} </div>
    );
  }
}

class MemberCollegeBar extends Component {
  render() {
    const college = this.props.college;
    const collegeID = college.toLowerCase().split(" ").join("_");
    return (
      <div className={"member_college " + collegeID}>{college}</div>
    )
  }
}

class MemberLinks extends Component {
  render() {
    const links = this.props.links;
    return (
      <div className="member_links">
        { links.hasOwnProperty('personal') && links.personal &&
           <FontAwesomeLink link={links.personal} classNames="fa fa-external-link-square"/>
         }
        { links.hasOwnProperty('facebook') && links.facebook &&
          <FontAwesomeLink link={links.facebook} classNames="fa fa-facebook-square"/>
        }
        { links.hasOwnProperty('linkedin') && links.linkedin &&
          <FontAwesomeLink link={links.linkedin} classNames="fa fa-linkedin-square"/>
        }
      </div>
    );
  }
}

export default TeamPage;
