import http from "../../components/services/httpService";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register user
export const registerUser = (userData, history) => (dispatch) => {
  http
    .post("/api/users/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Login - Get user token
export const loginUser = (userData) => (dispatch) => {
  http
    .post("/api/users/login", userData)
    .then((res) => {
      //Save to localStorage
      const { token } = res.data;
      //Set token to ls
      localStorage.setItem("jwtToken", token);
      //Set token to auth header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};


// logout
export const logoutCurrentUser = () => (dispatch) => {
  //Remove Token from localStorage
  localStorage.removeItem("jwtToken");
  //Remove auth header
  setAuthToken(false);
  //Set current user to empty and isAuthenticated to false
  dispatch(setCurrentUser({}))
};

// Set Login user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};