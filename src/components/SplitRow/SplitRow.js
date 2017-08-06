import React from 'react';

import './SplitRow.scss';

export default function SplitRow(props) {

  return (
    <div className='split_row'>
      <div className='side_wrapper'>
        <div className='left side'>
          {props.left}
        </div>
      </div>
      <div className='side_wrapper'>
        <div className='right side'>
          {props.right}
        </div>
      </div>
    </div>
  );
}
