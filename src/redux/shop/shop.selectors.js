import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsPreview = createSelector(
  [selectShopCollections],
  (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectShopCollection = selectionUrlParam => createSelector(
  [selectShopCollections],
  (collections) => collections ? collections[selectionUrlParam] : null
); 

export const isCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);