import React from 'react';
import { Link } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

import './button-download-app.styles.scss';
import { ButtonDownloadAppTypes } from './button-download-app.types';

const ButtonDownloadApp = ({ type, url }) => (
  <Link className='app-btn blu flex vert' to={url}>
    {type === ButtonDownloadAppTypes.APPSTORE ? (
      <FaApple className='icon' />
    ) : (
      <FaGooglePlay className='icon' />
    )}
    <p>
      {type === ButtonDownloadAppTypes.APPSTORE
        ? 'Available on the'
        : 'Get it on'}
      <br />
      <span className='big-txt'>
        {type === ButtonDownloadAppTypes.APPSTORE ? 'App Store' : 'Google Play'}
      </span>
    </p>
  </Link>
);

// <a class="app-btn blu flex vert" href="http:apple.com">
//     <i class="fab fa-apple"></i>
//     <p>Available on the <br/> <span class="big-txt">App Store</span></p>
//   </a>

export default ButtonDownloadApp;
