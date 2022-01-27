import React from 'react';

import './donut.styles.scss';

const Donut = ({ percent = 0 }) => (
  <div className='donut-container'>
    <h2>{`${percent}%`}</h2>
    <svg width='160' height='160' xmlns='http://www.w3.org/2000/svg'>
      <g>
        <title>Layer 1</title>
        <circle
          r='69.85699'
          cy='81'
          cx='81'
          stroke-width='20'
          stroke='#f2f2f2'
          fill='none'
        />
        <circle
          id='circle'
          style={{ strokeDashoffset: (440 * (100 - percent)) / 100 }}
          className='donut'
          r='69.85699'
          cy='81'
          cx='81'
          strokeWidth='20'
          stroke='#5393f5'
          fill='none'
        />
      </g>
    </svg>
  </div>
);

export default Donut;
