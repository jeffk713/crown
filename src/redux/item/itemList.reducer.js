
import SHOP_DATA from './itemList.data';

const INITIAL_STATE = {
  categories: SHOP_DATA
}

const itemListReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    
    default: 
      return state;
  }
}

export default itemListReducer;