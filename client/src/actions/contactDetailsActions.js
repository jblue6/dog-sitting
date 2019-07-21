import axios from "axios";
import { GET_CONTACT_DETAILS } from "./types";

// making the get request to the back end
export const getContactDetails = () => dispatch => {
  axios
    .get("/api/contactDetails")
    .then(res => {
      dispatch({
        type: GET_CONTACT_DETAILS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
