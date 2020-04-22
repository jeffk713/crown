import React from 'react';

import BottomsData from './ItemBottoms.data.component';
import ItemIndividual from '../ItemIndividual/ItemIndividual.component';
import importPics from '../../ImportPics/importPics.component';

import '../Item.styles.scss';

class ItemBottoms extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: BottomsData
    }
  }
  
  render () {
    const {itemInfo} = this.state;
    const images = importPics(require.context('../../assets/item-image/board-boots', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherBottomsDataProps})=> (
            <ItemIndividual key={id} images={images} {...otherBottomsDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemBottoms;