import React from 'react';

import SkisData from './ItemSkis.data.component';
import ItemIndividual from '../ItemIndividual/ItemIndividual.component';
import importPics from '../../ImportPics/importPics.component';

import '../Item.styles.scss';

class ItemSkis extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: SkisData
    }
  }
  
  render () {
    const {itemInfo} = this.state;
    const images = importPics(require.context('../../assets/item-image/skis', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherSkisDataProps})=> (
            <ItemIndividual key={id} images={images} {...otherSkisDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemSkis;