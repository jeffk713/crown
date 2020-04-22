import React from 'react';

import SkiBootsData from './ItemSkiBoots.data.component';
import ItemIndividual from '../ItemIndividual/ItemIndividual.component';
import importPics from '../../ImportPics/importPics.component';

import '../Item.styles.scss';

class ItemSkiBoots extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: SkiBootsData
    }
  }

  
  render () {
    const {itemInfo} = this.state;
    const images = importPics(require.context('../../assets/item-image/ski-boots', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherSkiBootsDataProps})=> (
            <ItemIndividual key={id} images={images} {...otherSkiBootsDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemSkiBoots;