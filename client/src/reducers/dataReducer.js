import { GET_DATA } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
