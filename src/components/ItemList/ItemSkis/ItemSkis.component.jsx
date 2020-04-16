import React from 'react';
import '../Item.styles.scss';
import SkisData from './ItemSkis.data.component'
import ItemIndividual from '../ItemIndividual/ItemIndividual.component'

class ItemSkis extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      itemInfo: SkisData
    }
  }

  render () {
    const {itemInfo} = this.state;
    return (
      <div className='ItemContainer'>
        {
          itemInfo
            .map(({id, ...otherSkisDataProps})=> (
            <ItemIndividual key={id} {...otherSkisDataProps} />
          ))
        }
      </div>
    )
  }
}

export default ItemSkis;