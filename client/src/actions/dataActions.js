import axios from "axios";
import { GET_DATA } from "./types";

// making the get request to the back end
export const getData = () => dispatch => {
  axios.get("/api/data").then(res => {
    console.log(res.data);
    dispatch({
      type: GET_DATA,
      payload: res.data
    });
  });
};
