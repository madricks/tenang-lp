import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tenang-logo-color-2.png';

import './navbar.styles.scss';

const Navbar = () => (
  <div className='header'>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='navbar'>
            <Link className='logo-container' to='/'>
              <img className='logo' alt='Logo' src={logo} />
            </Link>
            <div className='options'>
              <Link className='option' to='/chatbot'>
                Tenang chatbot
              </Link>
              <Link className='option' to='/personal'>
                For personal
              </Link>
              <Link className='option' to='/company'>
                For company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
