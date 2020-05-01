const INITIAL_STATE = {
  menuGroups: {
    menuGroupski: {
      category: 'skis',
      products:['skis', 'ski_boots'],
      id: 1,
      linkUrl: 'ski.jpg'
    },
    menuGroupBoard: {
      category: 'boards',
      products:['boards', 'board_boots'],
      id: 2,
      linkUrl: 'board.jpg'
    },
    menuGroupApparel: {
      category: 'apparel',
      products:['apparel'],
      id: 3,
      linkUrl: 'apparel.jpg'
    }
  }
}

const menuReducer = (state=INITIAL_STATE, action) => {
  switch (action.type){
    default: 
     return state;
  }
}

export default menuReducer;