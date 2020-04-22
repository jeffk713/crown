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
          image: 'ski',
          id: 1,
          linkUrl: 'ski.jpg'
        },
        {
          category: 'boards',
          products:['boards', 'board boots'],
          image: 'board',
          id: 2,
          linkUrl: 'board.jpg'
        }
        
      ],
      showDetails: false
    }
  }
  handleHover= ()=> {
    this.setState({showDetails: true})
  }

  handleLeave= ()=> {
    this.setState({showDetails: false})
  }

  render () {
    const { sections, showDetails } = this.state
    const images = importPics(require.context('../assets/list-images', false, /\.(png|jpg|svg)$/));

    return (
      <div className='MenuList'>
        {sections.map(({id, ...otherSectionProps}) => (
          <MenuShop 
            key={id} 
            handleHover={this.handleHover} 
            handleLeave={this.handleleave} 
            showDetails={showDetails}
            images={images} 
            {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default MenuList;