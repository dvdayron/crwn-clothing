import ShopTypes from './shop.types';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = (error) => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());
    const collectionsRef = firestore.collection('collections');
    collectionsRef.get().then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
}