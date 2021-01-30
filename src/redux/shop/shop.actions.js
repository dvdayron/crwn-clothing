import ShopTypes from './shop.types';

export const updateCollections = collections => ({
  type: ShopTypes.UPDATE_COLLECTIONS,
  payload: collections
});