import React from 'react';
import { Link } from 'react-router'

import '../../scss/Animations.scss';

export default class NavItem extends React.Component {
  render() {
    const i = this.props.item
    return (
      <li className='hvr_grow nav_item' key={i.path}>
        <Link to={'/' + i.path}>
            {i.name.toUpperCase()}
        </Link>
      </li>
    );
  }
}
