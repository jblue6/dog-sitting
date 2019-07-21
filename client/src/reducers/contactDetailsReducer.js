import { GET_CONTACT_DETAILS } from "../actions/types";

const initialState = {};

// destructured type and payload from initial state
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CONTACT_DETAILS:
      // add data to the state
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
