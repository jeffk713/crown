import React from 'react';
import { ReactComponent as Logo} from '../assets/crown.svg';
import './Header.styles.scss'


class Header extends React.Component {

  render () {
    return (
      <header className='Header'>
        <Logo className='logo'/>
        <h1 className='headerTitle'>
          seymour snow 
        </h1>
      </header>
    )
  }
}

export default Header;