import React from 'react';

import MenuList from '../../MenuList/MenuList.component'
import ItemList from '../../ItemList/ItemList.component'

import './HomePage.styles.scss';

const HomePage = () => (
    <div className='HomePage'>
        <MenuList/>
        <ItemList/>
    </div>
);

export default HomePage;