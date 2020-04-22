import React from 'react';

import MenuShop from '../MenuShop/MenuShop.component';

import importPics from '../ImportPics/importPics.component';

import './MenuList.styles.scss';
class MenuList extends React.Component {
  constructor() {
    super()

    this.state= {
      sections: [
        {
          category: 'skis',
          products:['skis', 'ski boots'],
          id: 1,
          linkUrl: 'ski.jpg'
        },
        {
          category: 'boards',
          products:['boards', 'board boots'],
          id: 2,
          linkUrl: 'board.jpg'
        },
        {
          category: 'apperal',
          products:['tops', 'bottoms'],
          id: 3,
          linkUrl: 'apperal.jpg'
        }
        
      ]
    }
  }

  render () {

    const { sections } = this.state
    const images = importPics(require.context('../assets/list-images', false, /\.(png|jpg|svg)$/));

    return (
      <div className='MenuList'>
        {sections.map(({id, ...otherSectionProps}) => (
          <MenuShop 
            key={id} 
            images={images} 
            {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default MenuList;