import { createSelector } from 'reselect';

const selectitemList = state => state.itemList;

export const selectCategories = createSelector(
  [selectitemList],
  itemList=> itemList.categories
);

export const selectCategory = categoryUrlParam =>
  createSelector(
    [selectCategories],
    categories=> categories[categoryUrlParam]
  )

