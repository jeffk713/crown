import React from 'react';
import './MenuDetail.styles.scss';

const MenuDetail =({product}) => (
  <div className='MenuDetail'>
    <h2 className='subtitle'>{product}</h2>
  </div>
);

export default MenuDetail;