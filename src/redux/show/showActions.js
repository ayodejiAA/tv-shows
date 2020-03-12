import showActionTypes from "./showTypes";

export const requestShowStart = () => ({
  type: showActionTypes.REQUEST_SHOW_START
});

export const requestShowSuccess = data => ({
  type: showActionTypes.REQUEST_SHOW_SUCCESS,
  payload: data
});

export const requestShowFailure = error => ({
  type: showActionTypes.REQUEST_SHOW_FAILURE,
  payload: error
});

export const reset = () => ({
  type: showActionTypes.RESET
})

export const requestShow = searchTerm => async dispatch => {
  dispatch(requestShowStart());

  try {
    const response = await fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}&embed=episodes`
    );
    const show = await response.json();
    const {
      _embedded: { episodes }
    } = show;
    delete show._embedded;

    dispatch(requestShowSuccess({ showDetails: show, episodes }));
  } catch (error) {
    dispatch(requestShowFailure(error));
  }
};

export default requestShow;
