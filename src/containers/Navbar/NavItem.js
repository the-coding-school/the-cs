import React from 'react';
import { Link } from 'react-router'

import '../../scss/Animations.scss';

export default class NavItem extends React.Component {
  render() {
    const {
      path,
      name
    } = this.props.item;
    return (
      <li className='hvr_grow nav_item' key={path}>
        <Link to={path}>
          {name.toUpperCase()}
        </Link>
      </li>
    );
  }
}
