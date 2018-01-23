import * as React from 'react';
import './StatBlock.scss';

export default function StatBlock(props) {
  const { title, figure } = props;
  return(
    <div className='stat-block'>
      <div className='figure'>{figure}</div>
      <div className='title'>{title}</div>
    </div>
  );
}
