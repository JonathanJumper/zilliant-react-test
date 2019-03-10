
export const updateUser = () => (
  (dispatch, getState, api) => {
    dispatch({
      type: 'TOGGLE_FETCHING_USER',
      flag: true
    });
    api.getUser
      .then(response => {
        dispatch({
          type: 'SET_USER',
          user: response.data
        });
      })
      .catch( error => {
        console.log("mememe");
        console.error(error);
        dispatch({
          type: 'SET_ERROR_MESSAGE',
          message: 'Could not fetch User :('
        });
        dispatch({
          type: 'TOGGLE_FETCHING_USER',
          flag: false
        });
      })
  }
);