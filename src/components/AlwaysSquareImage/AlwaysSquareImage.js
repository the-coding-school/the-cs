// @flow

/*
 * Takes a source for a square image as a prop and ensures that no matter what
 * amount of space it is given in the layout, the full square image will be
 * visible. To do so, a blurred background of the same image is placed behind it
 * to fill the space outside of the square image.
 */

import React from 'react';
import './AlwaysSquareImage.scss';

type PropsType = {
  image: string
};

export default (props: PropsType) => (
  <div
    className='always_square_image'
  >
    <div className='blurred_background'>
      <img src={props.image} alt='something' />
    </div>
    <div className='focused_foreground'>
      <img src={props.image} alt='something' />
    </div>
  </div>
);
