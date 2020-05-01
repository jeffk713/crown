import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectMenuGroups = createSelector(
  [selectMenu],
  menu => menu.menuGroups
)

