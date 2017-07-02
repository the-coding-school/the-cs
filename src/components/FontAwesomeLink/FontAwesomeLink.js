import React from 'react';

export default class FontAwesomeLink extends React.Component {
  render() {
    const link = this.props.link;
    const classNames = this.props.classNames;

    if (this.props.link) {
      return (
        <a href={link}>
          <i className={classNames + " fa-lg hvr_grow"}></i>
        </a>
      );
    }
  }
}
