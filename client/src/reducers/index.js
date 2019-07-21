import { combineReducers } from "redux";
import dataReducer from "./dataReducer.js";
import pricesReducer from "./pricesReducer.js";
import contactDetailsReducer from "./contactDetailsReducer.js";

export default combineReducers({
  data: dataReducer,
  prices: pricesReducer,
  contactDetails: contactDetailsReducer
});
