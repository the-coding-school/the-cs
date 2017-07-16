import React from 'react';
import NavItem from './NavItem';
import NavLogo from './NavLogo';

import './Navbar.scss';

export default class Navbar extends React.Component {
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
    document.getElementById('navbar_panel').classList.add('panel_open');
    this.setState(() => ({ panelOpen: true }));
  }

  closePanel() {
    document.getElementById('navbar_panel').classList.remove('panel_open');
    this.setState(() => ({panelOpen: false}));
  }

  togglePanel() {
    if (this.state.panelOpen) { this.closePanel(); }
    else { this.openPanel(); }
  }

  componentDidMount() {
    // Enable click-toggle for slide-out navbar items panel
    const that = this;
    document.getElementById('navbar_hamburger').onclick = this.togglePanel;
    const navItems = document.getElementsByClassName('nav_item');
    Array.from(navItems).forEach(function(element) {
      element.addEventListener('click', that.closePanel);
    });
  }

  render() {

    var allItems = this.props.items.map((i) => <NavItem key={i.path} item={i} />);
    var navItems = this.props.items.slice(1).map((i) => <NavItem key={i.path} item={i} />);

    return (
      <nav id='navbar'>
        <NavLogo />
        <ul className='navbar_tabs'>{navItems}</ul>
        <div id='navbar_hamburger'><div/><div/><div/></div>
        <div id='navbar_panel'>{allItems}</div>
      </nav>
    );
  }
}
