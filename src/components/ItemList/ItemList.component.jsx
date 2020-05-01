import React from 'react';
import { connect } from 'react-redux';

import { selectCategory } from '../../redux/item/itemList.selectors';

import ItemIndividual from '../ItemIndividual/ItemIndividual.component';
//import importPics from '../ImportPics/importPics.component';

import './ItemList.styles.scss';

const ItemList =({ category }) => {
    const {items} = category;
    //const images= importPics(require.context(`../assets/item-image/${routeName}`, false, /\.(png|jpe?g|svg)$/));
    return (
      <div className='ItemList'>
        {
          items
            .map(({id, ...otherProps})=> (
            <ItemIndividual key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.product)(state)
})

export default connect(mapStateToProps)(ItemList);