import { combineReducers } from 'redux';

import itemListReducer from './item/itemList.reducer';
import menuReducer from './menu/menu.reducer';

const rootReducer = combineReducers({
  itemList: itemListReducer,
  menu: menuReducer
});

export default rootReducer;