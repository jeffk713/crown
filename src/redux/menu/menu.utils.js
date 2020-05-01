export const convertedMenuGroups = (menuGroups) => {

  const menuGroupsArr = Object.keys(menuGroups).map(menuGroup => {
    const {category, products, id} = menuGroups[menuGroup]
    return {
      id,
      category,
      products
    }
  })
  return menuGroupsArr
}