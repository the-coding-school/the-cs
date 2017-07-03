import React from 'react';

import './SectionHeader.scss';

export default class SectionHeader extends React.Component {
  render() {

    const {
      title,
      subtitle
    } = this.props;

    return (
      <div className="section_header">
        <div className="title">
          {title.toUpperCase()}
        </div>
        <div className="subtitle">
          {subtitle}
        </div>
      </div>
    );
  }
}
