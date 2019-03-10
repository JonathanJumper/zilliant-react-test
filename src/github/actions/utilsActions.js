
export const dismissError = () => (
  dispatch => {
    dispatch({
      type: 'SET_ERROR_MESSAGE',
      message: null
    })
  }
);