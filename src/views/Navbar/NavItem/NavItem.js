import './NavItem.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem(props) {

  const {
    item,
    onMouseEnter,
    onMouseLeave,
    onClick,
    hovered
  } = props;

  const {
    path,
    name,
  } = item;

  return (
    <div
      className={`nav_item ${hovered ? 'hovered' : ''}`}
      key={path}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Link to={path}>
        {name.toUpperCase()}
      </Link>
    </div>
  );
}
