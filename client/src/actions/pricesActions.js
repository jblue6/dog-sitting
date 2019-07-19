import axios from "axios";
import { GET_PRICES } from "./types";

// making the get request to the back end
export const getPrices = () => dispatch => {
  axios
    .get("/api/prices")
    .then(res => {
      dispatch({
        type: GET_PRICES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};