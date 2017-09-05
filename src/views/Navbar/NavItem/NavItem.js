// @flow

import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';

type PropsType = {
  item: {
    path: string,
    name: string
  },
  onMouseEnter: () => void,
  onMouseLeave: () => void,
  onClick: () => void,
  hovered: boolean
}

export default (props: PropsType) => {
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
      <NavLink
        className={`nav_item ${hovered ? 'hovered' : ''}`}
        key={path}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        to={path}
        activeClassName='selected'
      >
        {name.toUpperCase()}
      </NavLink>
  );
}
