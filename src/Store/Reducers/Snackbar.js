export const SET_SNACKBAR = "fitnessClubSnackBar";
const DEFAULT_TIME = 4000;
const initialState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: "",
  snackbarTime: 4000,
};
export const setSnackbar = (
  snackbarOpen,
  snackbarType = "success",
  snackbarMessage = "",
  removeDefaultTime = false
) => ({
  type: SET_SNACKBAR,
  snackbarOpen,
  snackbarType,
  snackbarMessage,
  removeDefaultTime,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarType, removeDefaultTime } =
        action;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage,
        snackbarTime: removeDefaultTime === true ? null : DEFAULT_TIME,
      };
    default:
      return state;
  }
};
