import React from 'react';
import './ItemIndividual.styles.scss'

const BoardBootsItem =({id, name, imageUrl, price}) => (
  <div className='ItemIndividual'>
    <div className='itemImage'>
      <img 
      className='image'
      src={imageUrl}
      alt='item-pic'
      />
    </div>
    {console.log({imageUrl})}
    <div className='itemFooter'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)

export default BoardBootsItem;