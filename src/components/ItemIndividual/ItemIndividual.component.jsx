import React from 'react';

import './ItemIndividual.styles.scss';


const ItemIndividual =({name, imageUrl, price}) => (
  <div className='ItemIndividual'>
    <div 
      className='itemImage'
      style= {{
        backgroundImage: `url(${imageUrl})` //`url(${images[img_id]})`
      }}
    />
    <div className='itemFooter'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)

export default ItemIndividual;