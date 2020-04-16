import React from 'react';
import '../Item.styles.scss';
import SkiBootsData from './ItemSkiBoots.data.component'
import ItemIndividual from '../ItemIndividual/ItemIndividual.component'

class ItemSkiBoots extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: SkiBootsData
    }
  }

  render () {
    const {itemInfo} = this.state;
    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherSkiBootsDataProps})=> (
            <ItemIndividual key={id} {...otherSkiBootsDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemSkiBoots;