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
        <div className="section_header_title">
          {title}
        </div>
        <div className="section_header_subtitle">
          {subtitle}
        </div>
      </div>
    );
  }
}
