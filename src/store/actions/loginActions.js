import axios from "axios";
export const LOGIN_AUTH = "LOGIN_AUTH";
export const AUTH_TOKEN = "AUTH_TOKEN";

export const LOGOUT = "LOGOUT";

export const loginAuth = (credentails) => {
  return (dispatch) => {
    axios
      .get(`https://swapi.dev/api/people/?search=${credentails.username}`)
      .then((response) => {
        dispatch({
          type: LOGIN_AUTH,
          count: response.data.count,
          userData: response.data.count === 1 ? response.data.results : [],
          loginDetails: credentails
        });
      });
  };
};

export const authTokenFun = (authStatus) => {
  return {
    type: AUTH_TOKEN,
    authToken: authStatus,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
