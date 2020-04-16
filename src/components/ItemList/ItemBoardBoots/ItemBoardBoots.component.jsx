import React from 'react';
import '../Item.styles.scss';
import BoardBootsData from './ItemBoardBoots.data.component'
import ItemIndividual from '../ItemIndividual/ItemIndividual.component'

class ItemBoardBoots extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: BoardBootsData
    }
  }

  render () {
    const {itemInfo} = this.state;
    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherBoardBootsDataProps})=> (
            <ItemIndividual key={id} {...otherBoardBootsDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemBoardBoots;