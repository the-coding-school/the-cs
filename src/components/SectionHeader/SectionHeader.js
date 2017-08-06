import React from 'react';

import './SectionHeader.scss';

export default class SectionHeader extends React.Component {
  render() {

    const {
      title,
      subtitle
    } = this.props;

    const sectionId = title && title.split(' ').join('').toLowerCase();

    return (
      <div id={sectionId} className="section_header">
        <div className="title">
          {title}
        </div>
        <div className="subtitle">
          {subtitle}
        </div>
      </div>
    );
  }
}
