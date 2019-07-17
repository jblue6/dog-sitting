import { GET_DATA } from "../actions/types";

const initialState = {};

// destructured type and payload from initial state
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_DATA:
      // add data to the state  
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
