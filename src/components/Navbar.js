import React, { Component } from "react";
import { Link } from "react-router"
import "../scss/Navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false
    };
    this.openPanel = this.openPanel.bind(this);
    this.closePanel = this.closePanel.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  openPanel() {
    document.getElementById("navbar_panel").classList.add("panel_open");
    this.setState(() => ({ panelOpen: true }));
  }

  closePanel() {
    document.getElementById("navbar_panel").classList.remove("panel_open");
    this.setState(() => ({panelOpen: false}));
  }

  togglePanel() {
    if (this.state.panelOpen) { this.closePanel(); }
    else { this.openPanel(); }
  }

  componentDidMount() {
    // Enable click-toggle for slide-out navbar items panel
    const that = this;
    document.getElementById("navbar_hamburger").onclick = this.togglePanel;
    const navItems = document.getElementsByClassName("nav_item");
    Array.from(navItems).forEach(function(element) {
      element.addEventListener("click", that.closePanel);
    });
  }

  render() {
    var navItems = this.props.items.map((i) => <NavItem key={i.path} item={i} />);

    return (
      <nav id="navbar">
        <LogoIcon />
        <ul className="navbar_tabs">{navItems}</ul>
        <div id="navbar_hamburger"><div/><div/><div/></div>
        <div id="navbar_panel">{navItems}</div>
      </nav>
    );
  }
}

class NavItem extends Component {
  render() {
    const i = this.props.item
    return (
      <li className="hvr_grow nav_item" key={i.path}>
        <Link to={"/" + i.path}>
            {i.name.toUpperCase()}
        </Link>
      </li>
    );
  }
}

class LogoIcon extends Component {
  render() {
    return (
      <div className="navbar_logo">
        <div className="logo_box">
          <Link to="/">THE CODING SCHOOL</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
