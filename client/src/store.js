// this is where the state tree for the application sits
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

// thunk allows you to make asyncronous requests that interact with the store
const middleWare = [thunk];

// this allows the use of the redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

// export this so it can be used by the app.js
export default store;
