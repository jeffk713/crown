import React from 'react';
import './MenuShop.styles.scss';
import ski from '../../img/ski.jpg';
import board from '../../img/board.jpg';
import MenuDetail from '../MenuDetail/MenuDetail.component'

const MenuShop = ({category, products, linkUrl})=> (
  <div className='MenuShop'>
    <div> 
      <div className='MenuTitle'>
        <img 
        className='MenuShop-image' 
        src={category==='skis'?ski:board} 
        alt={category==='skis'?'ski':'board'} 
        />
        <h1 className='title'>{category}</h1>
        {console.log({linkUrl})}
      </div>
 
      {
        products
        .map((product, i) => (
        <MenuDetail key={i} product={product} category={category} linkUrl={linkUrl} />
        ))
      }
      
    </div>
  </div>
    
);


export default MenuShop;