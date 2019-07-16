import axios from "axios";
import { GET_DATA } from "./types";

// making the get request to the back end
export const getData = () => dispatch => {
  axios
    .get("/api/data")
    .then(res => {
      manipulateData(res.data);
      dispatch({
        type: GET_DATA,
        payload: manipulateData(res.data)
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const manipulateData = data => {
  let obj = {};
  data.map(each => {
    console.log(each);
    obj[each.title] = each.value;
  });
  console.log(obj);
  return obj;
};
