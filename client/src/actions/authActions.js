import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// check token & load user
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: USER_LOADING });

  // try and retieve the user from the api/auth/user endpoint
  axios
    .get("/api/auth/user", tokenConfig(getState))
    // on success trigger the USER_LOADED action
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    // other wise trigger the AUTH_ERROR action
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Register User
export const register = ({ name, email, password }) => dispatch => {
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // request body
  const body = JSON.stringify({ name, email, password });

  // try and register the user - post
  axios
    .post("/api/users", body, config)
    // on success trigger the REGISTER_SUCCESS action
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    // on failure trigger the REGISTER_FAIL action
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// login user
export const login = ({ email, password }) => dispatch => {
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // request body
  const body = JSON.stringify({ email, password });

  // try and register the user - post
  axios
    .post("/api/auth", body, config)
    // on success trigger the REGISTER_SUCCESS action
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    // on failure trigger the REGISTER_FAIL action
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// logout user
export const logout = () => {
  return { type: LOGOUT_SUCCESS };
};

// setup config/headers and token
export const tokenConfig = getState => {
  // get token from localstorage
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // if token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
