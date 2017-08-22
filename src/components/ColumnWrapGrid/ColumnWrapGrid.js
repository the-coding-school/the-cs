import React from 'react';

import './ColumnWrapGrid.scss';

export default function ColumnWrapGrid(props) {
  return (
    <div
      className={`column_wrap_grid ${props.className}`}
    >
      {
        props.cells.map((cell, index) => (
        <div className='column_wrap_grid_item' key={index}>
          {cell}
        </div>
        ))
      }
    </div>
  );
}
