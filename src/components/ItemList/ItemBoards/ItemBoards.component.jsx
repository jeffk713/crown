import React from 'react';

import BoardsData from './ItemBoards.data.component';
import ItemIndividual from '../ItemIndividual/ItemIndividual.component';
import importPics from '../../ImportPics/importPics.component';

import '../Item.styles.scss';

class ItemBoards extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: BoardsData
    }
  }
  
  render () {
    const {itemInfo} = this.state;
    const images = importPics(require.context('../../assets/item-image/boards', false, /\.(png|jpe?g|svg)$/));

    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherBoardsDataProps})=> (
            <ItemIndividual key={id} images={images} {...otherBoardsDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemBoards;