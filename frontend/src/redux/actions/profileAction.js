import axios from "axios";
import http from "../../components/services/httpService";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILE_ERRORS,
  SET_CURRENT_USER,
  GET_DELETE_ERRORS,
} from "./types";

// Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  http
    .get("/api/profile")
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

// Create profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post("/api/profile", profileData)
    .then((res) => history.push("/dashboard"))
    .catch((errProfile) =>
      dispatch({
        type: GET_PROFILE_ERRORS,
        payload: errProfile.response.data,
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};

// Delete account and profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are  you sure? This can NOT be undone!")) {
    http
      .delete("/api/profile")
      .then((res) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((errDelete) =>
        dispatch({
          type: GET_DELETE_ERRORS,
          payload: errDelete.response.data,
        })
      );
  }
};
