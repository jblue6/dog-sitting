import { combineReducers } from "redux";
import dataReducer from "./dataReducer.js";
import pricesReducer from "./pricesReducer.js";

export default combineReducers({
  data: dataReducer,
  prices: pricesReducer
});
