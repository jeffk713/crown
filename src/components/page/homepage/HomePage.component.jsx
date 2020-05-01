import React from 'react';

import MenuList from '../../MenuList/MenuList.component'
import ItemListContainer from '../../ItemListContainer/ItemListContainer.component';
import './HomePage.styles.scss';

const HomePage = () => (
    <div className='HomePage'>
        <MenuList/>
        <ItemListContainer />
    </div>
);

export default HomePage;