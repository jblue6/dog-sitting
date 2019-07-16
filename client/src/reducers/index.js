import { combineReducers } from "redux";
import dataReducer from "./dataReducer.js";

export default combineReducers({
  data: dataReducer
});
