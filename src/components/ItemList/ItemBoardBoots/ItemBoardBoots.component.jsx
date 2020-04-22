import React from 'react';

import BoardBootsData from './ItemBoardBoots.data.component';
import ItemIndividual from '../ItemIndividual/ItemIndividual.component';
import importPics from '../../ImportPics/importPics.component';

import '../Item.styles.scss';

class ItemBoardBoots extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: BoardBootsData
    }
  }
  
  render () {
    const {itemInfo} = this.state;
    const images = importPics(require.context('../../assets/item-image/board-boots', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherBoardBootsDataProps})=> (
            <ItemIndividual key={id} images={images} {...otherBoardBootsDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemBoardBoots;