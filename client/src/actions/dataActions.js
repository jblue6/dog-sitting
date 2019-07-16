import axios from "axios";
import { GET_DATA } from "./types";

// making the get request to the back end
export const getData = () => dispatch => {
  console.log("daata acion triggered");
  axios
    .get("/api/data")
    .then(res => {
      dispatch({
        type: GET_DATA,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
