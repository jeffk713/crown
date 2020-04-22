import React from 'react';

import './ItemIndividual.styles.scss';


const ItemIndividual =({id, img_id, images, name, price}) => (
  <div className='ItemIndividual'>
    <div 
      className='itemImage'
      style= {{
        backgroundImage: `url(${images[img_id]})`
      }}
    />
    <div className='itemFooter'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)

export default ItemIndividual;