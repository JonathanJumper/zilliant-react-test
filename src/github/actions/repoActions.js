
export const updateRepos = () => (
  (dispatch, getState, api) => {
    dispatch({
      type: 'TOGGLE_FETCHING_REPOS',
      flag: true
    });
    api.getRepos
      .then(response => {
        dispatch({
          type: 'SET_REPOS',
          repos: response.data
        });
      })
      .catch( error => {
        console.error(error);
        dispatch({
          type: 'SET_ERROR_MESSAGE',
          message: 'Could not fetch Repos :('
        });
        dispatch({
          type: 'TOGGLE_FETCHING_REPOS',
          flag: false
        });
      })
  }
);

export const selectRepo = (id) => (
  dispatch => {
    dispatch({
      type: 'SET_REPO',
      id: id
    });
  }
);

export const unselectRepo = () => (
  dispatch => dispatch({
    type: 'UNSET_REPO',
  })
);