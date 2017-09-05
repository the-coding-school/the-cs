// @flow

import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './OptionBar.scss';

type PropsType = {
  options: { [string]: {
    path: string,
    text: string
  }}
};

export default (props: PropsType) => (
  <div className='option_bar'>
    {
      Object.keys(props.options).map((o) => (
        <NavLink
          key={props.options[o].path}
          to={`/get-involved/${props.options[o].path}`}
          activeClassName='selected'
          className='option_bar_option'
        >
          {props.options[o].text}
        </NavLink>
      ))
    }
  </div>
);
