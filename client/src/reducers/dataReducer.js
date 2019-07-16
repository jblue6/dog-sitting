import { GET_DATA } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  console.log("dataa reducer triggered");
  console.log(action);
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
