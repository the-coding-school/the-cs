import './SectionHeader.scss';
import React from 'react';

export default class SectionHeader extends React.Component {
  render() {

    const {
      title,
      subtitle
    } = this.props;

    return (
      <div className="section_header">
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
