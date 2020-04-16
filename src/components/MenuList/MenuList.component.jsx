import React from 'react';
import './MenuList.styles.scss';
import MenuShop from '../MenuShop/MenuShop.component'

class MenuList extends React.Component {
  constructor() {
    super()

    this.state= {
      sections: [
        {
          category: 'skis',
          products:['skis', 'ski boots'],
          image: 'ski',
          id: 1,
          linkUrl: 'skis'
        },
        {
          category: 'boards',
          products:['boards', 'board boots'],
          imageUrl: 'board',
          id: 2,
          linkUrl: 'boards'
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