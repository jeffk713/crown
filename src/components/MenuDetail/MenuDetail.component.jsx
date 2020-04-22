import React from 'react';
import { withRouter } from 'react-router-dom'

import './MenuDetail.styles.scss';

const MenuDetail =({product, match, history}) => (
  <div className='MenuDetail'>
    <h2 
      className='subtitle'
      onClick={() => history.push(`${match.url}${product}`)}
    >
    {product}
    </h2>
  </div>
);

export default withRouter(MenuDetail);