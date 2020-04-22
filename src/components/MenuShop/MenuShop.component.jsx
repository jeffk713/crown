import React from 'react';

import MenuDetail from '../MenuDetail/MenuDetail.component';

import './MenuShop.styles.scss';


const MenuShop = ({category, products, linkUrl, images} )=> (
  <div className='MenuShop'>
      <div className='MenuTitle'>
        <div 
        className='MenuTitle-image'
        style={{
          backgroundImage: `url(${images[linkUrl]})`
        }}
        />
        <h1 className='title'>{category}</h1>
      </div>

      {
        products
        .map((product, i) => (
          <MenuDetail key={i} product={product} />
        )) 
      }
  </div>
    
);


export default MenuShop;