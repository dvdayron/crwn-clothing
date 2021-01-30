import ShopTypes from './shop.types';

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  error: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ShopTypes.FETCH_COLLECTIONS_START:
      return {
        ...state, 
        isFetching: true
      }
    case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state, 
        collections: action.payload,
        isFetching: false
      }
    case ShopTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state, 
        isFetching: false,
        error: action.payload
      }
    default: return state;
  }
}

export default shopReducer;