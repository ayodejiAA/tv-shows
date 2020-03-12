import showActionTypes from './showTypes';

const INITIAL_STATE = {
  showDetails: null,
  episodes: null,
  error: null,
  loading: null,
  request: false
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case showActionTypes.REQUEST_SHOW_START:
      return {
        ...state,
        loading: true,
        request: true
      }
    
    case showActionTypes.REQUEST_SHOW_SUCCESS:
      return {
        ...state,
        showDetails: action.payload.showDetails,
        episodes: action.payload.episodes,
        loading: false
      }

    case showActionTypes.REQUEST_SHOW_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading:false
      }

    case showActionTypes.RESET:
      return {
        ...INITIAL_STATE
      }

    default:
      return state 
  }
}
