import React from 'react';

import 'css/slick.css';
import 'css/slick-theme.css';
import './SlickPanel.scss';

import 'slick-carousel';
// Unfortunately, jQuery is required in order to use slick (carousel)
import $ from "jquery";

export default class SlickPanel extends React.Component {
  componentDidMount() {
    $('.slick_panel').slick(this.props.options);
  }

  render() {
    return (
      <div className='slick_panel'>
        {this.props.children}
      </div>
    );
  }
}
