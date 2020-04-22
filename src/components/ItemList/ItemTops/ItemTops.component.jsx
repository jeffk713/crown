import React from 'react';

import ItemTopsData from './ItemTops.data.component';
import ItemIndividual from '../ItemIndividual/ItemIndividual.component';
import importPics from '../../ImportPics/importPics.component';

import '../Item.styles.scss';

class ItemTops extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: ItemTopsData
    }
  }
  
  render () {
    const {itemInfo} = this.state;
    const images = importPics(require.context('../../assets/item-image/tops', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherItemTopsDataProps})=> (
            <ItemIndividual key={id} images={images} {...otherItemTopsDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemTops;