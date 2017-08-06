import React from 'react';

import './FacebookIcon.scss';

export default function FacebookIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      version='1.1'
      {...props}
    >
      <g>
        <path fill='#3F51B5' d='M 42 37 C 42 39.761719 39.761719 42 37 42 L 11 42 C 8.238281 42 6 39.761719 6 37 L 6 11 C 6 8.238281 8.238281 6 11 6 L 37 6 C 39.761719 6 42 8.238281 42 11 Z '/>
        <path fill='#FFFFFF' d='M 34.367188 25 L 31 25 L 31 38 L 26 38 L 26 25 L 23 25 L 23 21 L 26 21 L 26 18.589844 C 26.003906 15.082031 27.460938 13 31.59375 13 L 35 13 L 35 17 L 32.714844 17 C 31.105469 17 31 17.601563 31 18.722656 L 31 21 L 35 21 Z '/>
      </g>
    </svg>
  );
}
