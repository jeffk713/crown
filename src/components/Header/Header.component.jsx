import React from 'react';
import {Link} from 'react-router-dom'

import { ReactComponent as Logo} from '../assets/crown.svg';

import './Header.styles.scss'


class Header extends React.Component {

  render () {
    return (
      <header className='Header'>
        <Link to='/'>
          <Logo className='logo'/>
        </Link>
        <h1 className='headerTitle'>
          seymour snow 
        </h1>
      </header>
    )
  }
}

export default Header;