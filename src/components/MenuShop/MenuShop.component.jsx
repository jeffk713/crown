import React from 'react';
import './MenuShop.component.scss';

const MenuShop = ({category, products, imageUrl})=> (
  <div className='MenuShop'>
    <div 
      className='MenuShop-image'
    >
      <div className='MenuTitle'>
        <h1 className='title'>{category}</h1>
      </div>

      <div className='MenuDetail'>
        <h2 className='subtitle'>{products[0]}</h2>
        <h2 className='subtitle'>{products[1]}</h2>
      </div>
    </div>
  </div>
    
);


export default MenuShop;