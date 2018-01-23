import React from 'react';
import './ProgramHeading.scss';


export default (props) => (
  <div className="program_heading">
    <div className="program_title">
      {props.title}
    </div>
    <div className="program_subtitle">
      <div className="program_subtitle_text">
        {props.subtitle}
      </div>
    </div>
  </div>
);
