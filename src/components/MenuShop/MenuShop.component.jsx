import React from 'react';
import './MenuShop.component.scss';
import ski from '../../img/ski.jpg';
import board from '../../img/board.jpg';
import MenuDetail from '../MenuDetail/MenuDetail.component'

const MenuShop = ({category, products})=> (
  <div className='MenuShop'>
    <div> 
      <div className='MenuTitle'>
        <img 
        className='MenuShop-image' 
        src={category==='skis'?ski:board} 
        alt={category==='skis'?'ski':'board'} 
        />
        <h1 className='title'>{category}</h1>
        {console.log({products})}
      </div>
 
      {{products}.products.map((product, i) => (
        <MenuDetail key={i} product={product}/>
      ))}
      
    </div>
  </div>
    
);


export default MenuShop;