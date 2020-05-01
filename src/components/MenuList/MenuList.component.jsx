import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectMenuGroups } from '../../redux/menu/menu.selectors'

import MenuShop from '../MenuShop/MenuShop.component';

import importPics from '../ImportPics/importPics.component';

import './MenuList.styles.scss';

class MenuList extends React.Component {

  convertedMenuGroups = (menuGroups) => {

    const menuGroupsArr = Object.keys(menuGroups).map(menuGroup => {
      const {category, products, id, linkUrl} = menuGroups[menuGroup]
      return {
        id,
        category,
        products,
        linkUrl
      }
    })
    return menuGroupsArr
  }

  render () {
    const { menuGroups } = this.props;
    const menuGroupsArr = this.convertedMenuGroups(menuGroups)
    const images = importPics(require.context('../assets/list-images', false, /\.(png|jpg|svg)$/));

    return (
      <div className='MenuList'>
        {
          menuGroupsArr.map(({id, ...otherProps}) => (
          <MenuShop 
            key={id} 
            images={images} 
            {...otherProps} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  menuGroups: selectMenuGroups
}
)

export default connect(mapStateToProps)(MenuList);