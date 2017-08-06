import './SectionHeader.scss';
import React from 'react';

import { generateIdFromString } from 'utilities/dom';

export default class SectionHeader extends React.Component {
  render() {

    const {
      title,
      subtitle
    } = this.props;

    return (
      <div id={title && generateIdFromString(title)} className="section_header">
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
