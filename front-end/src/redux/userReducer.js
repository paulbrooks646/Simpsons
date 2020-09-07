import axios from "axios";

const initialState = {
  info: {},
  isLoggedIn: false,
};

const LOGIN_USER = "LOGIN_USER";
const REGISTER_USER = "REGISTER_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_USER = "GET_USER";

export function loginUser(info) {
  return {
    type: LOGIN_USER,
    payload: info,
  };
}

export function registerUser(info) {
  return {
    type: REGISTER_USER,
    payload: info,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: initialState,
  };
}

export function getUser() {
  const info = axios.get("/user");
  return {
    type: GET_USER,
    payload: info,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, info: action.payload, isLoggedIn: true };
    case LOGOUT_USER:
      return { ...state, ...action.payload };
    case REGISTER_USER:
      return { ...state, info: action.payload, isLoggedIn: true };
    case GET_USER + "_PENDING":
      return state;
    case GET_USER + "_FULFILLED":
      return { ...state, info: action.payload.data, isLoggedIn: true };
    case GET_USER + "_REJECTED":
      return state;
    default:
      return state;
  }
}
