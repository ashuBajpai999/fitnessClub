import { combineReducers } from "redux";
import snackbarReducer from "./Snackbar";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
});

export default rootReducer;
