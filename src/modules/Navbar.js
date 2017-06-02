import React, { Component } from 'react';
import { Link } from 'react-router'
import "../scss/Navbar.scss";
import $ from 'jquery';
import logo from '../images/logo.png';
import dataJSON from "../json/data.json";

class Navbar extends Component {

  componentDidMount() {
    var panelOpen = false;

    function togglePanel() {
      if (panelOpen){
        $("#navbar_panel").css({"left": "100%"});
        panelOpen = false;
      } else {
        $("#navbar_panel").css({"left": "0"});
        panelOpen = true;
      }
    }

    $("#navbar_hamburger").click(togglePanel);
    $("#navbar_panel a").click(togglePanel);
  }

  render() {
    var items = this.props.items;
    var navItems = items.map((i) => {
      return (
        <li className="n" key={i.path}>
          <Link to={"/" + i.path}>
              {i.text.toUpperCase()}
          </Link>
        </li>
      );
    });

    return (
      <nav id="navbar">
        <LogoIcon />
        <ul className="navbar_tabs">{navItems}</ul>
        <div id="navbar_hamburger">
          <div/>
          <div/>
          <div/>
        </div>
        <div id="navbar_panel">{navItems}</div>
      </nav>
    );
  }
}

class LogoIcon extends Component {
  render() {
    // <h1 id="long_nav_logo"><Link to="/">THE CODING SCHOOL</Link></h1>
    // <h1 id="short_nav_logo"><Link to="/">TCS</Link></h1>
    return (
      <div className="navbar_logo">
        <div className="logo_box">
          <Link to="/">
            <img src={logo}/>
          </Link>
        </div>
      </div>
    );
  }
}



export default Navbar;
