import { combineReducers } from "redux";
import autoListReducer from "./autoListReducer";

export default combineReducers({
  autoList: autoListReducer
});
