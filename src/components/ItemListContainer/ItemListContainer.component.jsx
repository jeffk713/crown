import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ItemList from '../ItemList/ItemList.component';

import './ItemListContainer.styles.scss';

const ItemListContainer = ({match}) => {
    return (
      <div className='ItemListContainer'>
          <Route exact path={`${match.path}:product`} component={ItemList}/>
      </div>
    )
}

export default withRouter(ItemListContainer);