import React from 'react';

import NavbarHeader from './NavbarHeader';
import NavbarTabs from './NavbarTabs';
import NavbarDropdown from './NavbarDropdown';
import NavPanel from './NavPanel';

import './Navbar.scss';

import pages from 'pages';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelOpen: false,
      hoveredTab: null,
      displayedTab: null,
      dropdownHovered: false
    };
  }

  openPanel() {
    this.setState({ panelOpen: true });
    document.body.style.overflow = 'hidden';
  }

  closePanel() {
    this.setState({ panelOpen: false });
    document.body.style.overflow = 'visible';
  }

  togglePanel() {
    this.state.panelOpen ?
      this.closePanel() :
      this.openPanel();
  }

  setHoveredTab(index) {
    let nextState = {};
    nextState.hoveredTab = index;
    if (typeof index === 'number') {
      nextState.displayedTab = index;
    }
    this.setState(nextState);
  }

  setDropdownHoverState(newState) {
    this.setState({ dropdownHovered: newState });
  }

  render() {

    const pagesOnNavTabs = pages.slice(1);

    const showDropdown = (
      this.state.dropdownHovered ||
      typeof this.state.hoveredTab === 'number'
    );

    return (
      <div className='navbar'>
        <NavbarHeader />

        <NavbarTabs
          tabItems={pagesOnNavTabs}
          hoveredTab={showDropdown && this.state.displayedTab}
          setHoveredTab={this.setHoveredTab.bind(this)}
          onHamburgerClick={this.togglePanel.bind(this)}
        />

        <NavbarDropdown
          dropdownData={
            showDropdown &&
            pagesOnNavTabs[this.state.displayedTab] !== undefined &&
            {
              pagePath: pagesOnNavTabs[this.state.displayedTab].path,
              sections: pagesOnNavTabs[this.state.displayedTab].sections
            }
          }
          setHoverState={this.setDropdownHoverState.bind(this)}
        />

        <NavPanel
          showPanel={this.state.panelOpen}
          items={pages}
          onItemClick={this.closePanel.bind(this)}
          onHamburgerClick={this.togglePanel.bind(this)}
        />

      </div>
    );
  }
}
