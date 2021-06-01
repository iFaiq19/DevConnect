import http from "../../components/services/httpService";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILE_ERRORS,
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
  http
    .post("/api/profile", profileData)
    .then((res) => history.push("/dashboard"))
    .catch((errProfile) =>
      dispatch({ type: GET_PROFILE_ERRORS, payload: errProfile.response.data })
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
