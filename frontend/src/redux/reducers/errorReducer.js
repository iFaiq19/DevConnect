import {
  GET_LOGIN_ERRORS,
  GET_SIGNUP_ERRORS,
  GET_PROFILE_ERRORS,
} from "./../actions/types";

const initialState = { profileErrors: {}, loginErrors: {}, signupErrors: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_ERRORS:
      return {
        ...state,
        signupErrors: {},
        loginErrors: {},
        profileErrors: action.payload,
      };
    case GET_LOGIN_ERRORS:
      return {
        ...state,
        profileErrors: {},
        signupErrors: {},
        loginErrors: action.payload,
      };
    case GET_SIGNUP_ERRORS:
      return {
        ...state,
        profileErrors: {},
        loginErrors: {},
        signupErrors: action.payload,
      };
    default:
      return state;
  }
}
