import React from 'react';
import './MenuList.component.scss';
import MenuShop from '../MenuShop/MenuShop.component'

class MenuList extends React.Component {
  constructor() {
    super()

    this.state= {
      sections: [
        {
          category: 'skis',
          products:['skis', 'ski boots'],
          imageUrl: '../img/ski img.jpg',
          id: 1,
          linkUrl: 'shop/skis'
        },
        {
          category: 'boards',
          products:['boards', 'board boots'],
          imageUrl: '../img/board img.jpg',
          id: 2,
          linkUrl: 'shop/boards'
        }
        
      ]
    }
  }
  render () {
    return (
      <div className='MenuList'>
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuShop key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default MenuList;