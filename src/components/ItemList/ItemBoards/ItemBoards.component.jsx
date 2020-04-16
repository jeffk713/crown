import React from 'react';
import '../Item.styles.scss';
import BoardsData from './ItemBoards.data.component'
import ItemIndividual from '../ItemIndividual/ItemIndividual.component'

class ItemBoards extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: BoardsData
    }
  }

  render () {
    const {itemInfo} = this.state;
    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherBoardsDataProps})=> (
            <ItemIndividual key={id} {...otherBoardsDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemBoards;