import React from 'react';

import './HomePage.styles.scss';
import Header from '../../Header/Header.component'
import MenuList from '../../MenuList/MenuList.component'
import ItemList from '../../ItemList/ItemList.component'

const HomePage = () => (
    <div className='HomePage'>
          <Header/>
          <MenuList/>
          <ItemList/>
    </div>
);

export default HomePage;